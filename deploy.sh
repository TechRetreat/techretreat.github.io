#!/usr/bin/env bash
grunt mustache_html
grunt sass
grunt autoprefixer
grunt babel
hash="Deploy commit $(git rev-parse HEAD)"
echo "Deploying $(git rev-parse HEAD) to master"
git add .
git commit -m "$hash"
git checkout 
git push  --force --quiet source:master > /dev/null 2>&1