#!/bin/bash

# 변경된 파일 중 최상위 폴더(문제 번호) 자동 추출
problem_number=$(git status --porcelain | sed -E 's/^.{3}//' | awk -F'/' '{print $2}' | grep -E '^[0-9]+$' | sort -u | head -n 1)

# 문제 번호를 찾지 못한 경우 오류 처리
if [ -z "$problem_number" ]; then
  echo "Error: No valid problem number folder found."
  exit 1
fi

# Git add and commit
git add .
git commit -m "feat(baekjoon) : add $problem_number problem"

echo "Successfully committed changes for problem $problem_number."