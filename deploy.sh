#!/usr/bin/env bash
grunt build

git config user.name "Circle CI"
git config user.email "yuchen@techretreat.ca"

hash="Deploy commit $(git rev-parse HEAD)"
echo "Deploying $(git rev-parse HEAD) to master"
rm .gitignore # We want all compiled assets! ALL OF THEM
git add .
git commit -m "$hash"
git push --force --quiet "https://github.com/TechRetreat/techretreat.github.io.git" source:master > /dev/null 2>&1
echo "Deployed! Going to sleep..."
