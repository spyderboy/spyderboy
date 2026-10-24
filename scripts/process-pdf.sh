#!/bin/sh
# Prints /process to public/spyderboy-dev-process.pdf with headless Chrome. Needs the site running
# (npm run dev, or npm start after a build); pass another URL to print from somewhere else.
set -e
URL="${1:-http://localhost:3000/process}"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
cd "$(dirname "$0")/.."
"$CHROME" --headless=new --no-pdf-header-footer --print-to-pdf=public/spyderboy-dev-process.pdf "$URL" 2>/dev/null
echo "wrote public/spyderboy-dev-process.pdf from $URL"
