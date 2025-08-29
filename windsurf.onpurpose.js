#!/bin/bash
# rename-and-push.sh
# 🔹 Script to rename windsurf.onpurpose.js → 2.js and push commit

OLD_FILE="windsurf.onpurpose.js"
NEW_FILE="2.js"

# Check if old file exists
if [ -f "$OLD_FILE" ]; then
  echo "🔄 Renaming $OLD_FILE to $NEW_FILE..."
  git mv "$OLD_FILE" "$NEW_FILE"
else
  echo "❌ File $OLD_FILE not found!"
  exit 1
fi

echo "📦 Staging changes..."
git add "$NEW_FILE"

echo "📝 Committing changes..."
git commit -m "♻️ Rename: windsurf.onpurpose.js → 2.js"

echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Rename complete! Repo updated."
