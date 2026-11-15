#!/usr/bin/env bash
# Roam Depot packaging: generate the listing README only in the build checkout.
set -euo pipefail
cd -- "$(dirname -- "$0")"
cp -- marketplace/INTRO.en.md README.md
