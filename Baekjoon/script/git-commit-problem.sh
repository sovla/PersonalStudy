#!/bin/bash

# Git이 한글 경로를 잘 처리할 수 있도록 환경 변수 설정
export LC_ALL=C.UTF-8
export LANG=C.UTF-8

echo "🔍 Step 1: Check modified files"
git status --porcelain

echo -e "\n🔍 Step 2: Extract file paths (removing status prefixes)"
filtered_files=$(git status --porcelain | sed -E 's/^.{3}//' | tr -d '"' | iconv -f euc-kr -t utf-8)
echo "$filtered_files"

echo -e "\n🔍 Step 3: Extract top-level folders (problem numbers)"
problem_folders=$(echo "$filtered_files" | awk -F'/' '{print $2}' | tr -d '"' | iconv -f euc-kr -t utf-8)
echo "$problem_folders"

echo -e "\n🔍 Step 4: Filter only numeric problem numbers"
problem_number=$(echo "$problem_folders" | grep -oE '^[0-9]+' | sort -u | head -n 1)
echo "$problem_number"

# 문제 번호를 찾지 못한 경우 오류 처리
if [ -z "$problem_number" ]; then
  echo "❌ Error: No valid problem number folder found."
  exit 1
fi

echo -e "\n✅ Successfully detected problem number: $problem_number"

# Git add and commit
git add .
git commit -m "feat(baekjoon) : add $problem_number problem"

echo "🎉 Successfully committed changes for problem $problem_number."