#!/usr/bin/env bash
grunt mustache_html
grunt sass
grunt autoprefixer
grunt babel

git config user.name "Circle CI"
git config user.email "yuchen@techretreat.ca"

hash="Deploy commit $(git rev-parse HEAD)"
echo "Deploying $(git rev-parse HEAD) to master"
git add .
git commit -m "$hash"
git push --force --quiet source:master > /dev/null 2>&1