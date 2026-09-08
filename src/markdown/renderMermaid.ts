/**
 * Draws ```mermaid fences in the preview.
 *
 * Mermaid is ~600kB, an order of magnitude larger than the rest of this page,
 * so it is imported on first use only: a document without a diagram never pays
 * for it. Rendering runs at `securityLevel: 'strict'`, which makes Mermaid
 * sanitise its own SVG and refuse click-handler directives — the diagram source
 * is user text like everything else here.
 */

type MermaidApi = typeof import('mermaid').default;

export type MermaidResult =
  | { readonly status: 'ready'; readonly svg: string }
  | { readonly status: 'error'; readonly message: string };

let apiPromise: Promise<MermaidApi> | null = null;
let configuredTheme: 'light' | 'dark' | null = null;
let renderCounter = 0;

function loadMermaid(): Promise<MermaidApi> {
  apiPromise ??= import('mermaid')
    .then(module => module.default)
    .catch(cause => {
      // Drop the rejected promise, or one failed chunk load would leave every
      // later diagram permanently broken with no way to retry.
      apiPromise = null;
      throw cause;
    });
  return apiPromise;
}

function configure(mermaid: MermaidApi, theme: 'light' | 'dark'): void {
  if (configuredTheme === theme) return;
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: theme === 'dark' ? 'dark' : 'default',
    fontFamily: 'Aptos, "Segoe UI", "Helvetica Neue", system-ui, sans-serif',
  });
  configuredTheme = theme;
}

export async function renderMermaid(source: string, theme: 'light' | 'dark'): Promise<MermaidResult> {
  const trimmed = source.trim();
  if (!trimmed) return { status: 'error', message: '다이어그램 내용이 비어 있습니다.' };

  try {
    const mermaid = await loadMermaid();
    configure(mermaid, theme);
    // A fresh id per attempt: Mermaid parks scratch nodes under this id while
    // measuring, and reusing one across re-renders makes it collide with itself.
    renderCounter += 1;
    const { svg } = await mermaid.render(`choi-md-diagram-${renderCounter}`, trimmed);
    return { status: 'ready', svg };
  } catch (cause) {
    return {
      status: 'error',
      message: cause instanceof Error ? cause.message : 'Mermaid가 이 다이어그램을 해석하지 못했습니다.',
    };
  }
}
