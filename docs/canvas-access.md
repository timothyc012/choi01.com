# 캔버스 로그인·저장 배포

`/canvas/`은 로그인하지 않으면 기존처럼 파일 저장만 가능한 게스트 보드다. 로그인한 사람만 D1에 자신의 보드를 저장한다.

## 접근 정책

두 경계가 같은 사람을 허용해야 한다.

1. Cloudflare Zero Trust에서 Google 로그인 방법을 추가하고, `choi01.com/api/login`용 Self-hosted Access 애플리케이션을 만든다.
2. 그 애플리케이션의 Allow 정책은 **Emails** 선택자로 허용할 Google 이메일 주소만 정확히 넣는다. 도메인 전체 허용 정책을 사용하지 않는다.
3. Pages Production 환경 변수에 아래 값을 넣고 재배포한다.

   - `ACCESS_TEAM_DOMAIN`: `<team>.cloudflareaccess.com`
   - `ACCESS_AUD`: Access 애플리케이션의 Audience (AUD) Tag
   - `ALLOWED_EMAILS`: 같은 이메일 주소를 쉼표로 구분한 목록

API는 Access JWT의 서명, issuer, audience를 검증한 뒤 `ALLOWED_EMAILS`와 정확히 일치하는 이메일만 허용한다. 이 변수가 비어 있으면 Access가 구성된 환경에서는 모두 거부한다. Gmail의 점, `+` 별칭, 도메인 표기는 합치지 않는다.

## D1 적용

`DB` 바인딩이 `choi01-canvas`를 가리키는지 확인한 뒤, Cloudflare에 로그인한 터미널에서 다음을 실행한다.

```bash
npx wrangler d1 migrations apply choi01-canvas --remote
```

마이그레이션은 사용자당 보드 하나를 보장한다. `0001`이 이미 적용된 환경에는 새 `0002`만 적용되며, 첫 로그인 경쟁은 `ON CONFLICT` 처리로 기존 보드를 다시 읽는다.

## 동작 확인

1. 허용된 Google 계정으로 `/canvas/`의 **Google로 로그인**을 누른다.
2. 빈 보드가 생성되거나, 해당 이메일의 기존 보드가 복원되는지 확인한다.
3. 도형을 만든 뒤 1.5초 안에 `저장됨` 상태가 되는지 확인한다.
4. 다른 브라우저에서 같은 보드를 수정한 뒤 첫 브라우저도 수정한다. 충돌 선택 화면이 나타나야 하며 자동 덮어쓰기는 일어나면 안 된다.
5. 허용 목록에 없는 계정은 `/api/board`에서 403을 받아 저장할 수 없어야 하며, 캔버스에는 해당 Google 계정에 접근 권한이 없다는 안내와 다른 계정 로그인 버튼이 보여야 한다.
