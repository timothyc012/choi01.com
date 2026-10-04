# 모해먹지 레시피 원문 조회

주간 CSV 후보 탐색은 현재 `recipe-full`이 있는 개인 DB를 명시해서 실행한다.
2026-10-04 운영 확인 기준으로 DB 이름은 `onto_personal`이다. 삭제된 통합
DB `01ontology`나 회사 DB `onto_company`를 레시피 원본으로 선택하지 않는다.

`scripts/find-store-recipe-candidates.mjs`는 CSV의 exact ingredient identity로
후보를 찾고, 현재 DB의 재료량·인분·원문 조리 단계를 읽는다. 원문 조회만으로
레시피를 승인하거나 웹·MCP에 게시하지 않는다. 출처 해시, 조리 중 누락된 재료,
자체 요리 후기, 독일에서의 구입 가능성은 기존 승인 절차에서 따로 검증한다.

## 개인 SSH 설정

저장소 밖의 개인 JSON 파일에 연결 정보를 둔다. 비밀번호, 접속 URI와 토큰은
이 파일이나 저장소에 넣지 않는다. 기존 SSH 키와 호스트 신뢰 설정을 사용한다.

```json
{
  "host": "example.invalid",
  "sshUser": "meal-reader",
  "container": "example-personal-postgres",
  "database": "onto_personal",
  "role": "meal_source_ro"
}
```

```sh
export MOHEMEOKJI_RECIPE_SOURCE_CONFIG=/absolute/private/meal-source.json
node scripts/find-store-recipe-candidates.mjs public/offers/WEEK.csv \
  --output /absolute/private/candidate-report.json \
  --database onto_personal --tenant recipe-full --limit 500 --total-limit 5000
```

실제 호스트·컨테이너·역할은 운영자가 확인한 값으로 바꾼다. 설정의 database와
명령의 `--database`가 다르면 접속 전에 실패한다. 보고서에는 DB 이름만 남기며
호스트나 역할을 공개 스냅샷으로 내보내지 않는다. 설정 환경 변수가 없으면
로컬 `psql`을 사용하므로 로컬 연결 설정과 실제 DB를 별도로 확인해야 한다.

## 조회 범위와 검증

허용 SQL은 `export-meal-recipes.sql`, `find-store-recipe-candidates.sql`,
`export-store-recipe-candidates.sql` 세 개다. Python과 JS가 경로와 파일 SHA256을
확인한다. SQL을 수정할 때 실제 읽기 전용 검증 후 두 어댑터의 고정 해시도 함께
갱신해야 한다. 다른 파일이나 임의 SQL은 받지 않는다.

각 SQL은 `BEGIN READ ONLY`로 시작하고, `fact.tenant_id`와
`superseded_by IS NULL`로 현재 관계를 읽는다. 접속에도
`default_transaction_read_only=on`을 설정한다. 데이터 추가·변경·폐기 또는
스키마 생성 기능은 없다.

후보 메타데이터는 identity 두 개씩 순서대로 조회한다. identity당 최대500개,
한 쿼리 출력은 최대5,000개다. 여러 identity의 메타데이터를 합친 뒤 기존 탐색기가
고유 원문 후보를 최대5,000개로 고른다. 원문 내보내기는 최대5,000개의 고유 숫자
ID만 받는다. DB·SSH 조회는60초 안에 종료하며, 실패하거나 조회량을 초과하면
결과를 조용히 잘라 쓰지 않고 오류를 보고한다.

2026-10-04에는 실제 개인 DB에서 닭가슴살·토마토 각250개 후보, 고유496개 원문,
승인 레시피96개의 원문 해시 일치와 다른 테넌트 조회0건을 확인했다. 이는 당시
읽기 검증 기록이며 다음 주 조회나 신규 레시피 승인 성공을 보장하지 않는다.

영양 계산은 입력 재료의 계량과 정확한 식품 기록이 모두 연결되었는지 판단한다.
레몬25g을 레몬즙25g으로 바꾸거나 종류가 없는 식용유를 올리브오일로 치환하지
않는다. 조리 중 언급된 미계량 재료, 튀김유 흡수량, 뼈·껍질이 포함된 중량과
준비 상태가 불명확하면 완전한 영양 근거로 표시하지 않는다. 계산된 입력 재료
합계는 조리 후 실제 섭취 영양이나 모든 식사 목표 충족을 뜻하지 않는다.
