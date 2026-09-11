# 모해먹지 정적 주간 스냅샷

기본 화면은 `public/mohemeokji/data/current.json`이 가리키는 해시 고정 manifest를 읽고, 사용자가 고른 우편번호·마트·지점의 location 파일만 불러옵니다. 레시피 상세는 사용자가 열 때만 content-hashed detail 파일을 가져옵니다. 공개 디렉터리와 manifest에는 원본 CSV나 DB 후보 review queue가 없으며, 브라우저는 다른 마트 location도 읽지 않습니다. 검증 전 상세 번들을 사용하던 `?snapshot=legacy` 경로는 데이터를 읽기 전에 명시적으로 중단하고 이번 주 자료 링크만 제공합니다.

현재 게시 스냅샷은 2026-09-07 주간 CSV와 읽기 전용 `01ontology`의 `recipe-full`에서 만든 11개 실제 지점 자료입니다. 승인 registry의 source ID·source hash·transform version·approval method·validation version이 모두 일치하고, 해당 지점의 정확한 할인상품과 정의 주재료가 겹치는 한국어 의역만 게시합니다. 48개는 지점별 상한이며 목표를 채우기 위해 부정확한 레시피를 섞지 않습니다. 현재 스냅샷은 81개 고유 승인 레시피를 지점별로 333회 참조하며, 실제 주재료 연결과 생 단백질 조리 근거에 따라 지점별 8~47개를 제공합니다. 가성비는 완전한 장바구니 가격, 영양·다이어트는 계량된 영양 근거가 없어 현재 스냅샷에서 사용할 수 없다고 표시됩니다.

All six HTML entry pages share `meal-shopping.js`, `meal-package-prices.js`, and
the snapshot runtime. Existing postcode/store paths remain valid, while
the page presents a postcode selector followed by the supermarkets found under
that postcode in the CSV. The legacy source archive contains 52 recipes; it is
not the default visible catalog.
Each supermarket shows only dishes whose defining ingredients have a current
offer in that postcode/store, so menu membership and counts vary by location.
Run `node scripts/sync-meal-pages.mjs` after changing shared assets or the
canonical HTML. It synchronizes legacy entry pages and content-hashed asset URLs.

Prices are whole selling-unit prices, represented as integer euro cents.
The catalog links every postcode/store record to its exact row in
`public/offers/supermarket_food_offers_2026-09-07.csv`. It is a weekly snapshot,
not a live offer feed. Generated metadata groups the available supermarkets
under each postcode and keeps the legacy route's store first as the default.
The selected combination is represented as `?postcode=...&store=...`.

Both the `sale` and `missing` ingredient lists enter the basket. Unknown prices
remain unknown, with an explicit incomplete subtotal. Users can enter prices,
change package counts, and exclude ingredients they already own. Price and
pantry changes apply across the current page; package counts belong to each
recipe basket or the weekly basket. These settings and the shopping checklist
are saved in localStorage per postcode and supermarket, with validation when
restored. Lunch and dinner plans are independent. When the CSV snapshot changes,
pantry/checks persist but old manual prices and unit overrides are invalidated.
Storage failures leave the page usable and show that changes cannot be saved.

Use the recipe or weekly drawer to add missing ingredients to the checklist.
Owned ingredients are excluded and removed from an existing checklist. Repeated
adds merge by store/ingredient and keep the larger package count, preserving
completed checks unless the required package count increases. Purchasing checks
can be undone; completed rows remain visible separately and do not contribute
to the remaining shopping cost. Individual rows can be removed for a new trip.

Recipe cards use measured ingredient quantities from `01ontology`'s
`recipe-full` corpus. When a recipe weight or volume and a selling-unit size are
comparable, the basket calculates the sufficient package count and sums those
requirements across the week. Qualitative, piece-based, or missing units start
at one package and remain editable. Cooked rice (`밥`) is grouped with rice
(`쌀`) for purchasing. Removing the old portion prices also removes them from
recommendation ranking.

Run `node scripts/generate-meal-offers.mjs public/offers/supermarket_food_offers_2026-09-07.csv public/mohemeokji/meal-package-prices.js` to refresh the catalog, then
`node --test tests/mealShopping.test.mjs` from the repository root.

정적 snapshot을 갱신할 때는 같은 CSV·DB·registry로 빈 디렉터리 두 곳에 컴파일한 뒤 전체 바이트를 비교합니다. 첫 빌드는 아래 검증을 통과해야 하며, 브라우저 QA 전에는 `current.json`을 전환하지 않습니다.

```sh
node scripts/verify-meal-snapshot.mjs TWIN_A --twin TWIN_B --bootstrap
node --test tests/mealSnapshotE2E.test.mjs
npm test
npm run build
npm run typecheck
node scripts/sync-meal-pages.mjs --check
git diff --check
```

같은 주의 레시피나 설명만 교정할 때는 기존 current manifest를 compiler의 `--correction --previous-manifest RETAINED_MANIFEST.json`에 전달하고, verifier에는 `--correction --previous RETAINED_MANIFEST.json`을 사용합니다. 교정판은 이전 immutable tree를 새 출력 안에 보존하고 `previousSnapshot.mode`을 `correction`으로 기록합니다.

검증 보고서는 manifest 및 모든 artifact hash, CSV·DB discovery 계보 hash, 지점과 각 offer의 경계, coverage/recipe/detail 연결, 알 수 없는 공개 필드, symlink와 숨겨진 review queue, 0건 후보, 네 가지 모드 준비 상태, 자산 크기와 selected-store 요청 집합을 검사합니다. 첫 릴리스 compiler/verifier는 `--bootstrap`으로 app-asset/git rollback을 명시합니다. 새 주에는 compiler가 `--rollover --previous-manifest CURRENT_PUBLIC_DATA/snapshots/.../manifest.json`으로 이전 주 트리를 복사하고, verifier가 `--rollover --previous snapshots/.../manifest.json`으로 내부 pointer를 검사합니다. 같은 주 교정에는 `--correction`을 사용합니다. 외부 디렉터리나 현재 snapshot은 rollback 증거가 아닙니다. CUA로 1280×900, 390×844, 320×844 화면·콘솔·네트워크 증거를 남기지 못하면 배포 준비 완료로 간주하지 않습니다.

For a new weekly CSV, run the non-publishing preflight first:
`node scripts/prepare-meal-week.mjs INPUT.csv --week-start YYYY-MM-DD --output-dir NEW_DIRECTORY`.
Review the resulting audit before replacing published files. Invalid rows fail
before writing. Conditional offers are archived but excluded from automatic totals.
Current prices are filtered by each item's validity dates in Europe/Berlin.

The selected static recipe catalog is not a live search over the entire ontology.
Source timing metadata and estimated ready-to-eat times are identified separately.
Recommendations use `meal-recommendations.js` and editorial
`recommendationProfile` fields (named primary ingredients, family, cooking method,
and main/side/breakfast role). A current primary-ingredient offer is required for
visible menus and automatic meals; incidental garlic or carrot matches cannot
qualify an unrelated dish. Automatic weekly selection prefers at most two
of one family and avoids consecutive repeats when another family is available;
it relaxes that constraint only when the remaining pool cannot satisfy it.
Eligible sides and breakfast snacks remain in the manual library, outside automatic
meals. A short main-meal pool leaves days empty; snack-only stores show an explicit
no-main-meal state. Stores with the same offers can legitimately share menus.
`createMealRecipes(store)` creates the selected store's source archive. Saved plans
resolve against that archive, including dishes no longer discounted, which are
labelled as having no current primary-ingredient offer.

`먹었어요` records one source recipe per date and lunch/dinner slot for 14 days.
The browser-local history is shared across stores using source IDs; selecting
or planning a recipe alone does not record consumption. Today's record can be
cancelled in its recipe drawer. No earlier meals are inferred. Saved plans are
preserved; the auto-plan button applies the new recommendation policy.
Netto's `Hähnchen-Innenfilet` uses the distinct `닭안심` offer key. Breast recipes
do not qualify through tenderloin. The new tenderloin recipes use their actual
source cut. A recipe combining equal weights of pork and beef mince can use an
explicit 50/50 mixed offer; pure pork mince uses the separate `돼지다짐육` key.

After verifying the configured ontology database and tenant, selected source
recipes can be exported without DB writes using `scripts/export-meal-recipes.sql`
with psql's `recipe_ids` variable. The 13 additions were compared with the live
`recipe-full` export on 2026-09-08, including quantities and ordered source steps.
Nine further records were added after matching exact EDEKA/ALDI/REWE offer forms
such as pork tenderloin, pork neck, rib-eye, blueberries, apples, tomatoes,
peppers and processed cheese slices.

Weekly refreshes now make the offer-to-recipe lookup explicit:
`node scripts/find-store-recipe-candidates.mjs INPUT.csv --output REPORT.json --database VERIFIED_DATABASE --limit 5`.
The read-only report groups exact offer products and `recipe-full` candidates by
postcode/store. It is a review queue, not permission to publish candidates without
checking cut, preparation state, quantities and ordered source steps. Menu cards
show the Korean ingredient with the verbatim German product name, selling unit and
price. The weekly summary has an expandable directory of every linked offer name,
with German names marked `lang="de"`. When several stores really discount the same
ingredient, recipes can overlap; the lead recommendation favors
an eligible offer that is less common among the stores available in that postcode.

See the maintained [weekly skill](../../docs/skills/mohemeokji-weekly/SKILL.md) and
[2026-09-08 audit](../../docs/mohemeokji-audit-2026-09-08.md) for source requirements,
tested behavior, collection prompt and remaining feature limits.
