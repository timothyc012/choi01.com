# Weekly supermarket offer collector

This directory is the source-side home for the weekly official offer collection used by choi01.com.

## Scope

- Sources: official REWE, EDEKA, Lidl, Netto, ALDI, Kaufland and public METRO pages only.
- Areas: 40468, 40474, 52062 and 44369.
- Data: food, beverages and alcohol only. Non-food, household, hygiene and online-only items are excluded.
- CSV contract: 13 columns matching public/offers/supermarket_food_offers_YYYY-MM-DD.csv.
- Every row must retain the official source URL, branch, validity period and collection timestamp.

## Publication rule

1. Collect and validate the dated CSV in a staging location.
2. Reject malformed rows, duplicates, unclear prices or out-of-period offers.
3. Copy the verified CSV to public/offers/ so the static site can consume it.
4. Run the repository weekly preflight and tests before publishing a new snapshot.

The CSV is intentionally not committed here: public/offers/ is the canonical site-facing location. This folder documents and contains the collection source and handoff contract.
