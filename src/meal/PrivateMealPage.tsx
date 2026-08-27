import { useEffect, useMemo, useState } from 'react';

import {
  deriveMealPageState,
  parseMealIndex,
  parseMealSnapshot,
  type MealArea,
  type MealIndex,
  type MealSnapshot,
} from './meal-data.ts';

type LoadState =
  | { kind: 'loading' }
  | { kind: 'error'; message: string }
  | { kind: 'ready'; index: MealIndex; snapshot: MealSnapshot };

export function PrivateMealPage() {
  const [loadState, setLoadState] = useState<LoadState>({ kind: 'loading' });
  const [selectedPostcode, setSelectedPostcode] = useState('44369');

  useEffect(() => {
    void loadIndexAndArea(selectedPostcode, setLoadState);
  }, [selectedPostcode]);

  const pageState = useMemo(
    () => (loadState.kind === 'ready' ? deriveMealPageState(loadState.snapshot) : null),
    [loadState],
  );

  return (
    <div className="meal-app">
      <header className="meal-nav">
        <a className="meal-wordmark" href="/">Choi01</a>
        <form method="post" action="/meal/logout">
          <button className="quiet-button" type="submit">로그아웃</button>
        </form>
      </header>

      <main className="meal-main">
        <section className="meal-intro" aria-labelledby="meal-title">
          <div>
            <p className="meal-kicker">PRIVATE WEEKLY NOTE</p>
            <h1 id="meal-title">이번 주, 뭘 해먹지?</h1>
          </div>
          <p>공식 마트 페이지의 식품 할인만 읽어, 오늘 만들 수 있는 메뉴와 장보기 순서를 정리합니다.</p>
        </section>

        {loadState.kind === 'loading' && <LoadingWorkbench />}
        {loadState.kind === 'error' && <ErrorWorkbench message={loadState.message} />}
        {loadState.kind === 'ready' && pageState && (
          <>
            <section className="control-rail" aria-label="지역과 데이터 상태">
              <label htmlFor="meal-area">지역</label>
              <select
                id="meal-area"
                value={selectedPostcode}
                onChange={(event) => setSelectedPostcode(event.target.value)}
              >
                {loadState.index.areas.map((area) => (
                  <option key={area.postcode} value={area.postcode}>{area.postcode} · {area.city}</option>
                ))}
              </select>
              <div className="freshness" role="status">
                <strong>{statusLabel(pageState.kind)}</strong>
                <span>{loadState.snapshot.valid_from} – {loadState.snapshot.valid_until}</span>
              </div>
            </section>

            {pageState.kind === 'between-weeks' && (
              <section className="between-note" role="status">
                <h2>이번 주 할인은 끝났어요.</h2>
                <p>만료된 가격은 숨겼습니다. 월요일 아침에 새 식품 할인을 확인합니다.</p>
              </section>
            )}

            {(pageState.kind === 'expired' || pageState.kind === 'unavailable') && (
              <section className="between-note" role="status">
                <h2>현재 표시할 가격이 없습니다.</h2>
                <p>지난 가격을 재사용하지 않습니다. 다음 갱신 상태를 확인해 주세요.</p>
              </section>
            )}

            {(pageState.kind === 'available' || pageState.kind === 'partial') && (
              <div className="workbench-grid">
                <section className="workbench-pane" aria-labelledby="meals-heading">
                  <div className="pane-heading">
                    <h2 id="meals-heading">해먹을 메뉴</h2>
                    <span>{pageState.meals.length}개</span>
                  </div>
                  <div className="meal-stack">
                    {pageState.meals.length ? pageState.meals.map((meal) => (
                      <article className="meal-row" key={meal.recipe_id}>
                        <div>
                          <h3>{meal.title}</h3>
                          <p>할인 재료 · {meal.matched_offer_ingredients.join(', ')}</p>
                        </div>
                        <div className="meal-cost">€ {meal.estimated_cost_eur.toFixed(2)}</div>
                        {meal.steps?.length ? (
                          <ol>{meal.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                        ) : meal.source_url ? (
                          <a className="source-link" href={meal.source_url} target="_blank" rel="noreferrer">원문 레시피 ↗</a>
                        ) : null}
                      </article>
                    )) : <EmptyLine text="현재 할인 재료와 연결되는 승인 레시피가 없습니다." />}
                  </div>
                  {loadState.snapshot.shopping_list.length > 0 && (
                    <section className="shopping-block" aria-labelledby="shopping-heading">
                      <h3 id="shopping-heading">장보기 목록</h3>
                      <dl>
                        {loadState.snapshot.shopping_list.map((item) => (
                          <div key={`${item.ingredient_name}-${item.retailers.join('-')}`}>
                            <dt>{item.german_product_name ?? item.ingredient_name}</dt>
                            <dd>{item.retailers.join(', ') || '일반 구매'} · € {item.estimated_price_eur.toFixed(2)}</dd>
                          </div>
                        ))}
                      </dl>
                    </section>
                  )}
                </section>

                <section className="workbench-pane" aria-labelledby="offers-heading">
                  <div className="pane-heading">
                    <h2 id="offers-heading">이번 주 식품 할인</h2>
                    <span>{pageState.offers.length}개</span>
                  </div>
                  <div className="offer-grid">
                    {pageState.offers.map((offer) => (
                      <article className="offer-card" key={`${offer.retailer}-${offer.product_name}`}>
                        <p className="retailer">{offer.retailer}</p>
                        <h3>{offer.product_name}</h3>
                        <p className="offer-quantity">{offer.quantity}</p>
                        <p className="offer-price">€ {offer.price_eur.toFixed(2)}</p>
                        <a className="source-link" href={offer.source_url} target="_blank" rel="noreferrer">공식 페이지 ↗</a>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            )}
          </>
        )}
      </main>

      <footer className="meal-footer">개인용 · 매주 월요일 갱신 · 만료 가격 자동 폐기</footer>
    </div>
  );
}

async function loadIndexAndArea(
  postcode: string,
  setState: (state: LoadState) => void,
): Promise<void> {
  setState({ kind: 'loading' });
  try {
    const indexResponse = await fetch('/meal/data/current/index.json', { credentials: 'same-origin' });
    if (!indexResponse.ok) throw new Error('지역 목록을 불러오지 못했습니다.');
    const index = parseMealIndex(await indexResponse.json());
    const area = index.areas.find((candidate) => candidate.postcode === postcode) ?? index.areas[0];
    if (!area) throw new Error('지원 지역이 없습니다.');
    const snapshot = await loadArea(area);
    setState({ kind: 'ready', index, snapshot });
  } catch (error) {
    setState({ kind: 'error', message: error instanceof Error ? error.message : '데이터를 확인하지 못했습니다.' });
  }
}

async function loadArea(area: MealArea): Promise<MealSnapshot> {
  const response = await fetch(`/meal/data/current/${area.postcode}.json`, { credentials: 'same-origin' });
  if (!response.ok) throw new Error(`${area.city} 데이터를 불러오지 못했습니다.`);
  return parseMealSnapshot(await response.json());
}

function statusLabel(kind: ReturnType<typeof deriveMealPageState>['kind']): string {
  return {
    available: '현재 가격',
    partial: '일부 마트만 확인',
    unavailable: '갱신 대기',
    expired: '가격 만료',
    'between-weeks': '월요일 갱신 대기',
  }[kind];
}

function LoadingWorkbench() {
  return <div className="loading-workbench" aria-busy="true" aria-label="이번 주 할인 불러오는 중"><span /><span /><span /></div>;
}

function ErrorWorkbench({ message }: { message: string }) {
  return <section className="between-note" role="alert"><h2>노트를 열지 못했습니다.</h2><p>{message}</p></section>;
}

function EmptyLine({ text }: { text: string }) {
  return <p className="empty-line" role="status">{text}</p>;
}
