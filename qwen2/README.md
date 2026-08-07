# DoGemeinde (qwen2 build)

Meridian OS 스타일의 회계·일정·현금출납 대시보드. `dogemeinde.choi01.com` 서브도메인 배포용.
`qwen/` 빌드의 후속 버전 — 외부 서비스 없이 즉시 동작하고, 나중에 Supabase 환경변수만 추가하면
클라우드 동기화로 전환되는 저장소 어댑터 구조.

## 기능

| 탭 | 내용 |
| --- | --- |
| 대시보드 | 이번 달 지출/수입, 예정 일정, 최근 메모, 월마감 진행률 |
| 현금 출납부 | 현금 지출·수입 기록 (Konto 연결, Beleg 번호, 월별 합계) |
| 일정 | 월간 달력 + 시간/메모 포함 일정 관리 |
| 회계 메모 | 태그·검색 지원 자유 메모 |
| DATEV-FIBU | **기장(복식 분개 Soll/Haben)**, 월마감 체크리스트, Kontenplan 관리, DATEV Buchungsstapel CSV 내보내기, JSON 백업 |

## 저장 방식

- **기본값: 브라우저 localStorage** — 가입/설정/비용 없음. `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
  환경변수가 없으면 자동으로 로컬 모드.
- **Supabase 전환**: `.env.example`을 `.env`로 복사하고 두 값을 채우면 자동으로 Supabase 동기화 모드.
  테이블은 하나만 필요:

```sql
create table dogemeinde_state (
  id int primary key,
  data jsonb not null,
  updated_at timestamptz default now()
);
alter table dogemeinde_state enable row level security;
```

- 로컬 모드에서는 **DATEV-FIBU 탭 → JSON 백업 내보내기**를 정기적으로 실행하세요.

## DATEV CSV 내보내기

월 단위로 `datev-buchungsstapel-YYYY-MM.csv`를 생성합니다. DATEV Buchungsstapel 형식
(19개 컬럼, 세미콜론 구분)을 따르며 두 소스를 자동 합산합니다:

- **현금 출납부**: 지출은 `Soll=비용계정 / Haben=1000(Kasse)`, 수입은 `Soll=1000 / Haben=수익계정`
- **DATEV-FIBU 기장**: 입력한 Soll/Haben 그대로 반영

> 실제 기장 반영 전 세무사/DATEV 컨설턴트와 형식을 한 번 확인하세요.

## 개발

```bash
npm install
npm run dev        # http://localhost:5175
npm run build      # 타입체크 + 정적 빌드 (dist/)
npm run typecheck
```

## 배포 (둘 다 무료)

### A. Cloudflare Pages (추천 — 도메인이 이미 Cloudflare에 있음)

1. Cloudflare 대시보드 → Workers & Pages → Create → Pages → Git 연결
2. Root directory `qwen2`, Build command `npm run build`, Output `dist`
3. Custom domains → `dogemeinde.choi01.com` 선택

### B. Vercel

1. Vercel → Add New → Project → `choi01.com` 레포 import
2. Root Directory `qwen2`, Build `npm run build`, Output `dist`
3. Settings → Domains → `dogemeinde.choi01.com` 추가
4. Cloudflare DNS에 `CNAME dogemeinde → cname.vercel-dns.com` 추가
