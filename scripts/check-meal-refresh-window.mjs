import { appendFileSync } from 'node:fs';

export function shouldRunMealRefresh(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Berlin',
    weekday: 'short',
    hour: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return values.weekday === 'Mon' && values.hour === '06';
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const shouldRun = shouldRunMealRefresh() || process.env.GITHUB_EVENT_NAME === 'workflow_dispatch';
  const output = `run=${shouldRun ? 'true' : 'false'}\n`;
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, output, 'utf8');
  else process.stdout.write(output);
}
