# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary user is a Korean-speaking household cook and shopper in Germany who plans meals from nearby supermarket offers and uses the shopping list in the store. Planning happens on desktop or mobile; shopping is primarily a one-handed mobile task.

## Product Purpose

모해먹지 turns verified weekly offers from a selected postcode, store, and branch into source-linked meal choices, an editable lunch/dinner plan, and a checklist containing only ingredients the household still needs. Success means the user can understand why a meal qualifies, choose it according to their current goal, and buy the required packages without mistaking partial prices or estimates for complete facts.

## Positioning

The product connects exact German offer products and selling units to `01ontology`'s `recipe-full` source recipes. It keeps the German product name, store/branch/week, recipe provenance, ingredient identity, and whole-package shopping cost visible from recommendation through purchase.

## Operating Context

- Aside collects the following week's supermarket CSV and coverage data on Sunday in Europe/Berlin.
- The build process validates offers, queries `recipe-full`, reviews source fidelity, and publishes immutable store-specific weekly snapshots.
- Users select a postcode and store, choose a recommendation goal, plan up to seven lunches and seven dinners, mark pantry items, and shop from the derived checklist.
- The deployed site is static. It does not query the recipe database or live shelf prices in the browser.

## Capabilities and Constraints

- Recommendation modes are `균형`, `가성비`, `영양`, and `다이어트`; one mode is active at a time.
- Visible and automatic recipes require an exact, currently valid primary-ingredient offer for the selected store. Cut, species, processing state, form, and composition constraints remain distinct.
- Incomplete prices and nutrition facts remain incomplete. Unknown values never become zero, estimated savings, or precise health claims.
- Basket totals mean the cash needed to buy whole packages after pantry exclusions. They are not consumed-ingredient cost.
- Source recipe IDs, title, author, URL, ingredient quantity labels, step order, and provenance must be preserved. Public cooking instructions are reviewed Korean paraphrases; source images and raw source text are not republished.
- Manual meal choices, manual empty slots, pantry state, and checklist completion survive weekly updates. Automatically suggested slots may refresh with a new snapshot or recommendation mode.
- German offer names are displayed with `lang="de"`; the surrounding interface is Korean.

## Brand Commitments

The product name is `모해먹지` within Choi01. The voice is direct and practical. It explains missing evidence plainly and does not claim that a partial subtotal, estimated nutrition profile, or static weekly offer is a live or complete fact.

## Evidence on Hand

- `public/offers/supermarket_food_offers_2026-09-07.csv`: 829-row weekly snapshot covering 5 postcodes and 11 postcode/store combinations.
- Local PostgreSQL database `01ontology`, tenant `recipe-full`: 72,569 source recipes, each linked to a source URL at the last verified count.
- `public/mohemeokji/ontology-recipe-details.js`: current 52-recipe reviewed fallback archive.
- `docs/mohemeokji-audit-2026-09-08.md`: offer, recipe, persistence, and browser verification history.
- No testimonials, live inventory, complete normal-price catalogue, or clinically accurate nutrition dataset is available and none may be invented.

## Product Principles

1. Every recommendation must show the offer and source evidence that made it eligible.
2. Exact identity beats a larger but misleading menu count.
3. Broad choice comes from build-time database discovery, while the browser receives a small reviewed store snapshot.
4. User goals change ranking, never factual eligibility or provenance.
5. Planning and shopping are distinct operating contexts sharing one saved household state.

## Accessibility & Inclusion

Target WCAG 2.2 AA. Every drag interaction has a keyboard and button alternative, primary touch targets are at least 44×44px on mobile, dynamic result/save/checklist changes are announced, dialogs restore focus, reduced-motion preferences are respected, and long German product names reflow at 320px without hiding price or evidence status.
