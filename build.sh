#!/usr/bin/env bash
# Roam Depot packaging: select the marketplace introduction in the build checkout.
set -euo pipefail
cd -- "$(dirname -- "$0")"
cp -- docs/INTRO.en.md README.md
