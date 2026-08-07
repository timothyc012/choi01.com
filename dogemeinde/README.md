# DoGemeinde Dashboard

Meridian OS 스타일을 차용한 회계/일정/현금출납 대시보드입니다.

## 기능
- **CashBook (현금 출납부)**: 현금 지출 내역 기록 (DATEV-FIBU 계정 연결)
- **Calendar (일정 관리)**: 주요 일정 기록
- **Memo (회계 메모)**: 자유로운 메모 및 태그 관리
- **DATEV-FIBU**: 월마감 워크플로우 체크리스트 (BWA, OPOS 등)

## 기술 스택
- React 19 + TypeScript + Vite
- Supabase (PostgreSQL Database & Authentication)
- Cloudflare Pages (Hosting)

## 설정 가이드 (Supabase)

1. Supabase 프로젝트를 생성합니다.
2. **Authentication** > **Providers** 에서 Email 로그인을 활성화합니다.
3. 다음 SQL을 SQL Editor에서 실행하여 테이블을 생성합니다:

```sql
create table cashbook_entries (
  id bigint primary key generated always as identity,
  date date not null,
  konto_code text not null,
  description text not null,
  amount numeric not null,
  created_at timestamp with time zone default now()
);

create table events (
  id bigint primary key generated always as identity,
  title text not null,
  event_date date not null,
  details text,
  created_at timestamp with time zone default now()
);

create table memos (
  id bigint primary key generated always as identity,
  content text not null,
  tags text,
  created_at timestamp with time zone default now()
);

-- RLS (Row Level Security) 설정 (원하는 경우)
-- 관리자 로그인 시에만 접근 가능하게 설정할 수 있습니다.
```

4. 루트 폴더의 `.env.example`을 복사하여 `.env`를 만들고 키를 채웁니다.

```bash
VITE_SUPABASE_URL="https://your-project.supabase.co"
VITE_SUPABASE_ANON_KEY="your-anon-key"
```

## 로컬 개발

```bash
npm install
npm run dev
```

## Cloudflare Pages 배포 방법

1. 코드를 GitHub 리포지토리(`choi01.com`)에 푸시합니다.
2. Cloudflare 대시보드 > **Workers & Pages** > **Create application** > **Pages**
3. `choi01.com` 레포지토리 연결
4. 빌드 설정:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
   - **Root directory**: `dogemeinde`
5. Environment variables (환경변수) 설정에 Supabase 변수 추가
6. Custom domains에서 `dogemeinde.choi01.com` 추가
