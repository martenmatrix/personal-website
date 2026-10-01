#!/usr/bin/env bash
set -euo pipefail

: "${FIREBASE_PROJECT_ID:?FIREBASE_PROJECT_ID is required}"

# The default Hosting site uses the project ID as its site ID.
sites_file=$(mktemp)
trap 'rm -f "$sites_file"' EXIT

firebase hosting:sites:list \
  --project "$FIREBASE_PROJECT_ID" --non-interactive --json > "$sites_file"

# Fail on unexpected responses instead of treating them as a missing site.
jq -e '.status == "success" and (.result.sites | type == "array")' \
  "$sites_file" > /dev/null

if jq -e --arg site_id "$FIREBASE_PROJECT_ID" \
  '.result.sites | any(.name | split("/")[-1] == $site_id)' \
  "$sites_file" > /dev/null; then
  echo "Firebase Hosting site already exists: $FIREBASE_PROJECT_ID"
else
  firebase hosting:sites:create "$FIREBASE_PROJECT_ID" \
    --project "$FIREBASE_PROJECT_ID" --non-interactive
fi
