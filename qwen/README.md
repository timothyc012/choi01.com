# DoGemeinde (qwen build)

Meridian OS 스타일의 회계·일정·현금출납 대시보드. `dogemeinde.choi01.com` 서브도메인 배포용.

비교 대상인 `../dogemeinde/`(antigravity 빌드)와의 차이: 이 버전은 **외부 서비스 없이 즉시 동작**하고,
나중에 Supabase 환경변수만 추가하면 클라우드 동기화로 전환되는 저장소 어댑터 구조입니다.

## 기능

| 탭 | 내용 |
| --- | --- |
| 대시보드 | 이번 달 지출/수입, 예정 일정, 최근 메모, 월마감 진행률 |
| 현금 출납부 | 현금 지출·수입 기록 (Konto 연결, Beleg 번호, 월별 합계) |
| 일정 | 월간 달력 + 시간/메모 포함 일정 관리 |
| 회계 메모 | 태그·검색 지원 자유 메모 |
| DATEV-FIBU | 기장(복식 분개 Soll/Haben), 월마감 체크리스트, Kontenplan 관리, DATEV Buchungsstapel CSV 내보내기, JSON 백업 |

## 저장 방식 (중요)

- **기본값: 브라우저 localStorage** — 가입/설정/비용 없음. `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
  환경변수가 없으면 자동으로 로컬 모드.
- **Supabase 전환**: `.env.example`을 `.env`로 복사하고 두 값을 채우면 자동으로 Supabase 동기화 모드.
  테이블은 하나만 필요합니다:

```sql
create table dogemeinde_state (
  id int primary key,
  data jsonb not null,
  updated_at timestamptz default now()
);
alter table dogemeinde_state enable row level security;
```

- 로컬 모드에서는 **DATEV-FIBU 탭 → JSON 백업 내보내기**를 정기적으로 실행하세요.
  브라우저 데이터를 지우면 기록도 사라집니다.

## DATEV CSV 내보내기

현금 출납부(또는 DATEV-FIBU 탭)에서 월 단위로 `datev-buchungsstapel-YYYY-MM.csv`를 생성합니다.
DATEV의 Buchungsstapel 형식(19개 컬럼, 세미콜론 구분, Kasse=1000 반대계정)을 따릅니다.

- **현금 출납부 기록**: 지출은 `Soll=비용계정 / Haben=1000`, 수입은 `Soll=1000 / Haben=수익계정`으로 자동 분개
- **DATEV-FIBU 기장 기록**: 입력한 Soll/Haben 그대로 반영

두 소스가 내보내기 시 자동으로 합쳐집니다.

> 실제 기장 반영 전 세무사/DATEV 컨설턴트와 형식을 한 번 확인하세요. 회계 책임은 사용자에게 있습니다.

## GnuCash로 가져오기

DATEV-FIBU 탭의 **GnuCash CSV** 버튼은 같은 달 출납부+기장 분개를 `gnucash-buchungen-YYYY-MM.csv`로
내보냅니다. 분개 하나는 연속 두 줄(Soll → Haben)로 기록되어, Multi-split import 시 균형 잡힌
복식부기 트랜잭션이 됩니다.

GnuCash에서 `File → Import → CSV`:

1. 구분자 **세미콜론**, 인코딩 UTF-8, 날짜 형식 `DD.MM.YYYY`, 통화 형식 독일식(쉼표 소수점)
2. **Multi-split 체크** — 연속 두 줄이 하나의 트랜잭션으로 읽힙니다
3. 컬럼 매핑: Date=`Datum`, Number=`Beleg`, Description=`Beschreibung`, Account=`Konto`, Debit=`Soll`, Credit=`Haben`
4. 계정 매핑 단계에서 SKR 코드(1000, 4930, 8400 …)를 자신의 GnuCash 계정에 한 번만 연결
5. 설정을 `DATEV-Import` 같은 이름으로 저장하면 다음 달부터 그대로 재사용

## 개발

```bash
npm install
npm run dev        # 로컬 개발 서버
npm run build      # 타입체크 + 정적 빌드 (dist/)
npm run typecheck
```

## 배포 (둘 다 무료)

### A. Vercel (원안)

1. Vercel → Add New → Project → `choi01.com` GitHub 레포 import
2. 설정: Root Directory `qwen`, Build `npm run build`, Output `dist`
3. (Supabase 사용 시) Environment Variables에 `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` 추가
4. Settings → Domains → `dogemeinde.choi01.com` 추가
5. Cloudflare DNS(choi01.com 존)에 레코드 추가:
   - Type `CNAME`, Name `dogemeinde`, Target `cname.vercel-dns.com`
6. Vercel이 SSL 인증서를 자동 발급 (보통 수 분 내). 무료 Hobby 플랜에서 커스텀 도메인 + HTTPS 지원.

### B. Cloudflare Pages (대안 — 도메인이 이미 Cloudflare에 있다면 가장 간단)

1. Cloudflare 대시보드 → Workers & Pages → Create → Pages → Git 연결
2. Root directory `qwen`, Build command `npm run build`, Output `dist`
3. Custom domains → `dogemeinde.choi01.com` 선택 (DNS가 같은 계정이라 자동 처리)

정적 빌드라 두 플랫폼 어디서든 동일하게 동작합니다.
