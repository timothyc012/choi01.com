import asyncio
import json
import logging
import os
import shutil
import subprocess
import sys
from pathlib import Path

# Windows 콘솔 UTF-8 인코딩 설정
if sys.stdout and hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if sys.stderr and hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

from telegram import Update
from telegram.ext import (
    ApplicationBuilder,
    CommandHandler,
    ContextTypes,
    MessageHandler,
    filters,
)

# 로깅 설정
logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO,
)
logger = logging.getLogger("TelegramAgyBridge")

CONFIG_PATH = Path(__file__).parent / "config.json"

def load_config():
    if not CONFIG_PATH.exists():
        raise FileNotFoundError(f"Config file not found at {CONFIG_PATH}")
    with open(CONFIG_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

def save_config(config_data):
    with open(CONFIG_PATH, "w", encoding="utf-8") as f:
        json.dump(config_data, f, indent=2, ensure_ascii=False)

config = load_config()
BOT_TOKEN = config.get("bot_token")
ALLOWED_USER_IDS = set(config.get("allowed_user_ids", []))
CURRENT_WORKSPACE = config.get("default_workspace", os.getcwd())
CURRENT_MODEL = config.get("model", "gemini-3.8-flash-high")
CURRENT_EFFORT = config.get("effort", "high")
SESSION_ACTIVE = False
SESSION_STATS = {
    "total_input_tokens": 0,
    "total_output_tokens": 0,
    "total_thinking_tokens": 0,
    "total_cache_tokens": 0,
    "total_tokens": 0,
    "total_duration": 0.0,
    "turns": 0,
}

AGY_BIN = shutil.which("agy") or r"C:\Users\01\AppData\Local\agy\bin\agy.exe"

AVAILABLE_MODELS = [
    ("gemini-3.8-flash-high", "Gemini 3.8 Flash (High) - 기본 추천"),
    ("gemini-3.8-flash-medium", "Gemini 3.8 Flash (Medium)"),
    ("gemini-3.1-pro-high", "Gemini 3.1 Pro (High) - 고난도 추론"),
    ("claude-sonnet-4-6", "Claude Sonnet 4.6 (Thinking)"),
    ("claude-opus-4-6-thinking", "Claude Opus 4.6 (Thinking)"),
    ("gemini-3.7-flash-high", "Gemini 3.7 Flash (High)"),
]

def is_authorized(user_id: int) -> bool:
    global ALLOWED_USER_IDS
    if not ALLOWED_USER_IDS:
        ALLOWED_USER_IDS.add(user_id)
        config["allowed_user_ids"] = list(ALLOWED_USER_IDS)
        save_config(config)
        logger.info(f"등록된 관리자 사용자 ID: {user_id}")
        return True
    return user_id in ALLOWED_USER_IDS

def execute_agy(prompt: str, continue_session: bool, cwd: str) -> tuple[str, dict | None]:
    global SESSION_STATS
    cmd = [AGY_BIN, "-p", prompt, "--dangerously-skip-permissions", "--output-format", "json"]
    if CURRENT_MODEL:
        cmd.extend(["--model", CURRENT_MODEL])
    if CURRENT_EFFORT:
        cmd.extend(["--effort", CURRENT_EFFORT])
    if continue_session:
        cmd.append("-c")

    logger.info(f"Executing agy in {cwd} [Model: {CURRENT_MODEL}, Effort: {CURRENT_EFFORT}]: {prompt[:40]}...")
    try:
        proc = subprocess.run(
            cmd,
            cwd=cwd,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            timeout=600,
        )
        stdout = proc.stdout.strip() if proc.stdout else ""
        stderr = proc.stderr.strip() if proc.stderr else ""

        if stdout:
            # JSON 파싱 시도
            try:
                data = json.loads(stdout)
                response_text = data.get("response", "").strip()
                usage = data.get("usage", {})
                duration = data.get("duration_seconds", 0.0)
                
                # 누적 통계 업데이트
                if usage:
                    SESSION_STATS["total_input_tokens"] += usage.get("input_tokens", 0)
                    SESSION_STATS["total_output_tokens"] += usage.get("output_tokens", 0)
                    SESSION_STATS["total_thinking_tokens"] += usage.get("thinking_tokens", 0)
                    SESSION_STATS["total_cache_tokens"] += usage.get("cache_read_tokens", 0)
                    SESSION_STATS["total_tokens"] += usage.get("total_tokens", 0)
                    SESSION_STATS["total_duration"] += duration
                    SESSION_STATS["turns"] += 1
                
                usage["duration_seconds"] = duration
                return (response_text or "✅ 작업 완료", usage)
            except json.JSONDecodeError:
                return (stdout, None)
        elif stderr:
            return (f"[Stderr 출력]:\n{stderr}", None)
        else:
            return ("✅ 작업 완료 (반환된 텍스트 출력이 없습니다).", None)
    except subprocess.TimeoutExpired:
        return ("⚠️ 작업 시간 초과 (10분이 경과하여 중단되었습니다).", None)
    except Exception as e:
        logger.exception("실행 중 예외 발생")
        return (f"⚠️ 실행 실패: {str(e)}", None)

async def cmd_start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = update.effective_user.id
    if not is_authorized(user_id):
        await update.message.reply_text("⛔ 접근 권한이 없습니다.")
        return

    msg = (
        "🤖 **Antigravity CLI (agy) 원격 제어 봇**\n\n"
        f"• **현재 워크스페이스:** `{CURRENT_WORKSPACE}`\n"
        f"• **현재 모델:** `{CURRENT_MODEL}`\n"
        f"• **생각 강도(Effort):** `{CURRENT_EFFORT.upper()}`\n"
        f"• **세션 상태:** {'대화 맥락 유지 중 (-c)' if SESSION_ACTIVE else '새 세션 대기'}\n\n"
        "**명령어 안내:**\n"
        "• 일반 텍스트 입력: 에이전트에게 바로 작업 지시\n"
        "• `/model [이름]`: 모델 확인 및 변경\n"
        "• `/effort [low/medium/high]`: 생각 강도 변경\n"
        "• `/skills`: 설치된 스킬 목록 확인\n"
        "• `/cwd <경로>`: 작업 폴더 변경 (`/cwd ..` 상위 이동)\n"
        "• `/new`: 대화 맥락 초기화 (새 세션)\n"
        "• `/status`: 전체 상태 확인\n"
        "• `/sh <명령어>`: 내 PC 셸 직접 초고속 실행"
    )
    await update.message.reply_text(msg, parse_mode="Markdown")

async def cmd_status(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not is_authorized(update.effective_user.id):
        return
    msg = (
        f"📁 **현재 워크스페이스:** `{CURRENT_WORKSPACE}`\n"
        f"🧠 **현재 모델:** `{CURRENT_MODEL}`\n"
        f"🔥 **생각 강도(Effort):** `{CURRENT_EFFORT.upper()}`\n"
        f"🔗 **세션 유지:** {'활성화 (-c 전달됨)' if SESSION_ACTIVE else '비활성화 (새 세션)'}\n"
        f"⚙️ **agy 실행 경로:** `{AGY_BIN}`"
    )
    await update.message.reply_text(msg, parse_mode="Markdown")

async def cmd_model(update: Update, context: ContextTypes.DEFAULT_TYPE):
    global CURRENT_MODEL
    if not is_authorized(update.effective_user.id):
        return
    if not context.args:
        models_text = "\n".join([f"• `{m[0]}`: {m[1]}" for m in AVAILABLE_MODELS])
        await update.message.reply_text(
            f"🧠 **현재 모델:** `{CURRENT_MODEL}`\n\n"
            f"**사용 가능한 주요 모델:**\n{models_text}\n\n"
            f"변경 방법: `/model gemini-3.8-flash-high`",
            parse_mode="Markdown",
        )
        return
    new_model = context.args[0].strip()
    CURRENT_MODEL = new_model
    config["model"] = CURRENT_MODEL
    save_config(config)
    await update.message.reply_text(f"✅ 모델이 `{CURRENT_MODEL}`(으)로 변경되었습니다.", parse_mode="Markdown")

async def cmd_effort(update: Update, context: ContextTypes.DEFAULT_TYPE):
    global CURRENT_EFFORT
    if not is_authorized(update.effective_user.id):
        return
    if not context.args:
        await update.message.reply_text(
            f"🔥 **현재 생각 강도:** `{CURRENT_EFFORT}`\n\n"
            f"설정 가능 옵션:\n• `/effort high` (깊은 생각, 복잡한 코딩)\n• `/effort medium` (균형)\n• `/effort low` (빠른 응답)",
            parse_mode="Markdown",
        )
        return
    effort = context.args[0].strip().lower()
    if effort in ["low", "medium", "high"]:
        CURRENT_EFFORT = effort
        config["effort"] = CURRENT_EFFORT
        save_config(config)
        await update.message.reply_text(f"✅ 생각 강도가 `{CURRENT_EFFORT.upper()}`로 변경되었습니다.", parse_mode="Markdown")
    else:
        await update.message.reply_text("❌ 유효한 값은 `low`, `medium`, `high` 중 하나입니다.", parse_mode="Markdown")

async def cmd_skills(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not is_authorized(update.effective_user.id):
        return
    skills_info = (
        "🛠️ **설치 및 활성화된 Antigravity 스킬 목록:**\n\n"
        "1. **`humanizer`** (글로벌)\n"
        "   - AI 티가 나지 않도록 자연스러운 문체로 리라이팅\n"
        "2. **`react-doctor`** (워크스페이스)\n"
        "   - React 프로젝트 린트, 접근성, 번들 크기, 아키텍처 진단 (`/doctor`)\n"
        "3. **`antigravity-guide`** (시스템 내장)\n"
        "   - Antigravity CLI, IDE, SDK 기능 가이드\n"
        "4. **`agy-customizations`** (시스템 내장)\n"
        "   - 스킬, 룰, 플러그인, MCP 제작 가이드\n"
        "5. **`permissioned-github`** (시스템 내장)\n"
        "   - GitHub PR, 이슈 관리\n\n"
        "💡 *작업 지시 시 에이전트가 필요에 따라 해당 스킬들을 자동으로 참조하여 실행합니다.*"
    )
    await update.message.reply_text(skills_info, parse_mode="Markdown")

async def cmd_new(update: Update, context: ContextTypes.DEFAULT_TYPE):
    global SESSION_ACTIVE
    if not is_authorized(update.effective_user.id):
        return
    SESSION_ACTIVE = False
    await update.message.reply_text("🔄 대화 세션이 초기화되었습니다. 다음 명령부터 새로운 세션으로 시작합니다.")

async def cmd_cwd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    global CURRENT_WORKSPACE
    if not is_authorized(update.effective_user.id):
        return
    if not context.args:
        parent = os.path.dirname(CURRENT_WORKSPACE)
        await update.message.reply_text(
            f"📁 현재 워크스페이스: `{CURRENT_WORKSPACE}`\n\n"
            f"• 상위 폴더로 이동하려면: `/cwd ..`\n"
            f"• 또는 직접 경로 입력: `/cwd {parent}`",
            parse_mode="Markdown",
        )
        return
    raw_path = " ".join(context.args).strip('"').strip("'")
    if not os.path.isabs(raw_path):
        target_path = os.path.abspath(os.path.join(CURRENT_WORKSPACE, raw_path))
    else:
        target_path = os.path.abspath(raw_path)

    if os.path.exists(target_path) and os.path.isdir(target_path):
        CURRENT_WORKSPACE = target_path
        config["default_workspace"] = CURRENT_WORKSPACE
        save_config(config)
        await update.message.reply_text(
            f"✅ 워크스페이스가 변경되었습니다:\n`{CURRENT_WORKSPACE}`",
            parse_mode="Markdown",
        )
    else:
        await update.message.reply_text(
            f"❌ 폴더를 찾을 수 없습니다:\n`{target_path}`",
            parse_mode="Markdown",
        )

async def cmd_tokens(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not is_authorized(update.effective_user.id):
        return
    msg = (
        f"📊 **현재 세션 누적 토큰 사용량**\n\n"
        f"• **대화 턴 수:** `{SESSION_STATS['turns']}`회\n"
        f"• **총 입력 토큰:** `{SESSION_STATS['total_input_tokens']:,}`\n"
        f"• **총 출력 토큰:** `{SESSION_STATS['total_output_tokens']:,}` (추론 생각: `{SESSION_STATS['total_thinking_tokens']:,}`)\n"
        f"• **프롬프트 캐시:** `{SESSION_STATS['total_cache_tokens']:,}`\n"
        f"• **합계 토큰:** `{SESSION_STATS['total_tokens']:,}`\n"
        f"• **총 작업 소요 시간:** `{SESSION_STATS['total_duration']:.1f}초`"
    )
    await update.message.reply_text(msg, parse_mode="Markdown")

async def cmd_sh(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not is_authorized(update.effective_user.id):
        return
    if not context.args:
        await update.message.reply_text("사용법: `/sh git status`", parse_mode="Markdown")
        return
    raw_cmd = " ".join(context.args)
    try:
        proc = subprocess.run(
            raw_cmd,
            shell=True,
            cwd=CURRENT_WORKSPACE,
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="replace",
            timeout=60,
        )
        out = (proc.stdout + "\n" + proc.stderr).strip() or "(출력 없음)"
        for i in range(0, len(out), 3800):
            await update.message.reply_text(f"```\n{out[i:i+3800]}\n```", parse_mode="Markdown")
    except Exception as e:
        await update.message.reply_text(f"⚠️ 실행 실패: {e}")

async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    global SESSION_ACTIVE
    user_id = update.effective_user.id
    if not is_authorized(user_id):
        await update.message.reply_text("⛔ 접근 권한이 없습니다.")
        return

    prompt = update.message.text
    if not prompt or prompt.startswith("/"):
        return

    status_msg = await update.message.reply_text(
        f"⏳ Antigravity ({CURRENT_MODEL} | {CURRENT_EFFORT.upper()}) 작업 중...\n(잠시만 기다려주세요)"
    )

    loop = asyncio.get_running_loop()
    result_text, usage = await loop.run_in_executor(
        None, execute_agy, prompt, SESSION_ACTIVE, CURRENT_WORKSPACE
    )
    SESSION_ACTIVE = True

    try:
        await status_msg.delete()
    except Exception:
        pass

    # 하단 토큰 푸터 추가
    footer = ""
    if usage:
        in_t = usage.get("input_tokens", 0)
        out_t = usage.get("output_tokens", 0)
        think_t = usage.get("thinking_tokens", 0)
        cache_t = usage.get("cache_read_tokens", 0)
        total_t = usage.get("total_tokens", 0)
        dur = usage.get("duration_seconds", 0.0)
        footer = f"\n\n━━━━━━━━━━━━━━━\n📊 *[{dur:.1f}s]* In: `{in_t:,}` | Out: `{out_t:,}` (Think: `{think_t:,}`) | Total: `{total_t:,}`"

    full_output = result_text + footer
    chunk_size = 3800
    for i in range(0, len(full_output), chunk_size):
        chunk = full_output[i : i + chunk_size]
        try:
            await update.message.reply_text(chunk, parse_mode="Markdown")
        except Exception:
            await update.message.reply_text(chunk, parse_mode=None)

def main():
    if not BOT_TOKEN:
        print("❌ config.json에 유효한 bot_token이 필요합니다.")
        return

    print(f"🚀 Antigravity 텔레그램 브릿지 시작!")
    print(f"📁 기본 워크스페이스: {CURRENT_WORKSPACE}")
    print(f"🧠 모델: {CURRENT_MODEL} (생각 강도: {CURRENT_EFFORT})")
    print(f"🤖 agy 바이너리: {AGY_BIN}")
    if ALLOWED_USER_IDS:
        print(f"🔒 허용된 사용자 ID: {list(ALLOWED_USER_IDS)}")

    app = ApplicationBuilder().token(BOT_TOKEN).build()
    app.add_handler(CommandHandler("start", cmd_start))
    app.add_handler(CommandHandler("help", cmd_start))
    app.add_handler(CommandHandler("new", cmd_new))
    app.add_handler(CommandHandler("status", cmd_status))
    app.add_handler(CommandHandler("cwd", cmd_cwd))
    app.add_handler(CommandHandler("sh", cmd_sh))
    app.add_handler(CommandHandler("model", cmd_model))
    app.add_handler(CommandHandler("effort", cmd_effort))
    app.add_handler(CommandHandler("skills", cmd_skills))
    app.add_handler(CommandHandler("tokens", cmd_tokens))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

    app.run_polling()

if __name__ == "__main__":
    main()
