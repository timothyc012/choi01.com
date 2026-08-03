# Manual QA: static homepage draft

Overall verdict: **PASS**

Scope: supplied desktop/mobile screenshots and the live page at `http://127.0.0.1:4173/`. No product files were edited. The live browser captures were taken after the current source timestamps and stored as JPEGs so their file signatures match their extensions.

## surfaceEvidence

| Scenario | Criterion reference | Surface | Exact invocation | Verdict | Artifact refs |
|---|---|---|---|---|---|
| QA-01 | Desktop hierarchy, overlap, readability | Supplied desktop screenshot + browser UI | `view_image qa/desktop.png`; browser `viewport.set({width:1440,height:900})`, `tab.goto("http://127.0.0.1:4173/")`, `tab.screenshot({fullPage:false})` | PASS | A1, A3 |
| QA-02 | Mobile stacking, no clipping, readable text | Supplied mobile screenshot + browser UI | `view_image qa/mobile.png`; browser `viewport.set({width:395,height:844})`, `tab.goto("http://127.0.0.1:4173/")`, `tab.screenshot({fullPage:false})` | PASS | A2, A4 |
| QA-03 | Preview assets are present and renderable | HTTP | `curl.exe -sS -i --max-time 5 http://127.0.0.1:4173/assets/{object-search-detail-evidence.svg,visual-authoring.svg,lineage.svg,workflow-timeline.svg}` | PASS | A5 |
| QA-04 | Usage tabs switch content correctly | Browser UI | At `395x844`, `tab.goto("http://127.0.0.1:4173/#usage")`, reload, click `getByRole("tab", {name:"BYOK UI", exact:true})`, then click `getByRole("tab", {name:"Local boundary", exact:true})`; assert selected tab and visible panel after each click | PASS | A6, A7, A8 |
| QA-05 | Tabs remain keyboard-operable | Browser UI | At `395x844`, reload `#usage`; press `ArrowRight` on MCP usage, `End` on BYOK UI, and `Home` on Local boundary; assert selected tab and roving `tabIndex` | PASS | A7, A9 |
| QA-06 | Section links land on readable targets | Browser UI | At `395x844`, click `View the map` and `How to use MCPs`; at `1440x900`, click `Projects`, `MCP usage`, and `Deploy`; inspect screenshots and heading positions relative to the sticky header | PASS | A10 |
| QA-07 | Live page serves successfully | HTTP | `curl.exe -sS -i --max-time 5 http://127.0.0.1:4173/` | PASS | A11 |

## adversarialCases

| Scenario | Criterion reference | Adversarial class | Expected behavior | Verdict | Artifact refs |
|---|---|---|---|---|---|
| ADV-01 | Mobile responsive layout | Horizontal overflow / edge clipping | At `395x844`, content stays within the viewport and hero copy/buttons are not cut off | PASS | A4, A7 |
| ADV-02 | Mobile readability | Long heading and mixed Korean/Latin text wrapping | Headings, body copy, and Korean example prompts remain readable with no tofu, unreadable contrast, or detached glyphs | PASS | A2, A4, A8 |
| ADV-03 | Hero preview rail | Missing or broken visual assets | All four previews display as intact cards and each referenced SVG responds successfully | PASS | A1, A2, A3, A5 |
| ADV-04 | Usage tabs | Stale or multiple visible panels | After each click/keypress, exactly one tab is selected and exactly one panel is visible | PASS | A6, A7, A9 |
| ADV-05 | Anchor navigation | Sticky-header overlap | Anchored section headings remain readable below the sticky header on desktop and mobile | PASS | A10 |
| ADV-06 | Desktop hierarchy | Uneven rail/card collapse | Hero, preview rail, project cards, usage panel, and route table retain a coherent visual order at desktop width | PASS | A1, A3 |

## artifactRefs

| ID | Kind | Description | Path |
|---|---|---|---|
| A1 | screenshot | Supplied desktop full-page PNG, 1440x3862 | `C:\Users\01\Desktop\01ontology\choi01-hub\qa\desktop.png` |
| A2 | screenshot | Supplied mobile full-page PNG, 790x13368 | `C:\Users\01\Desktop\01ontology\choi01-hub\qa\mobile.png` |
| A3 | screenshot | Fresh live desktop viewport capture, 1440x900 CSS viewport | `C:\Users\01\Desktop\01ontology\choi01-hub\qa\live\live-desktop-viewport.jpg` |
| A4 | screenshot | Fresh live mobile viewport capture, 395x844 CSS viewport | `C:\Users\01\Desktop\01ontology\choi01-hub\qa\live\live-mobile-viewport.jpg` |
| A5 | HTTP transcript | `curl -i` responses for homepage assets; all four SVGs returned `200 OK` | `C:\Users\01\Desktop\01ontology\choi01-hub\qa\live\http-assets-transcript.txt` |
| A6 | browser action log | Click transitions for MCP usage, BYOK UI, and Local boundary | `C:\Users\01\Desktop\01ontology\choi01-hub\qa\live\browser-action-log.json` |
| A7 | browser screenshot | Usage tab panel captures at mobile width | `C:\Users\01\Desktop\01ontology\choi01-hub\qa\live\tab-mcp-usage.jpg` |
| A8 | browser screenshot | Selected BYOK and Local panel captures at mobile width | `C:\Users\01\Desktop\01ontology\choi01-hub\qa\live\tab-byok-usage.jpg`; `C:\Users\01\Desktop\01ontology\choi01-hub\qa\live\tab-local-usage.jpg` |
| A9 | browser action log | ArrowRight, End, and Home tab navigation assertions | `C:\Users\01\Desktop\01ontology\choi01-hub\qa\live\keyboard-tab-log.json` |
| A10 | browser evidence | Desktop/mobile anchor-target screenshots plus heading/header geometry | `C:\Users\01\Desktop\01ontology\choi01-hub\qa\live\anchor-overlap-log.json` |
| A11 | HTTP transcript | `curl -i` response for the live homepage; `200 OK` | `C:\Users\01\Desktop\01ontology\choi01-hub\qa\live\http-homepage-transcript.txt` |

## Blocking issues

None observed. The homepage is suitable to show as a first UI draft based on the tested surfaces.
