#!/bin/bash

# Git이 한글 경로를 잘 처리할 수 있도록 환경 변수 설정
export LC_ALL=C.UTF-8
export LANG=C.UTF-8

# 디버깅 모드 활성화 여부 체크
DEBUG=false
for arg in "$@"; do
  if [[ "$arg" == "-d" || "$arg" == "--debug" ]]; then
    DEBUG=true
    break
  fi
done

# 디버깅 메시지 출력 함수
log_debug() {
  if [ "$DEBUG" = true ]; then
    echo -e "🔍 $1"
  fi
}

log_debug "Step 1: Check modified files"
git status --porcelain

log_debug "\nStep 2: Extract file paths (removing status prefixes)"
filtered_files=$(git status --porcelain | sed -E 's/^.{3}//' | tr -d '"' | iconv -f euc-kr -t utf-8)
log_debug "$filtered_files"

log_debug "\nStep 3: Extract top-level folders (problem numbers)"
problem_folders=$(echo "$filtered_files" | awk -F'/' '{print $2}' | tr -d '"' | iconv -f euc-kr -t utf-8)
log_debug "$problem_folders"

log_debug "\nStep 4: Filter only numeric problem numbers"
problem_number=$(echo "$problem_folders" | grep -oE '^[0-9]+' | sort -u | head -n 1)
log_debug "$problem_number"

# 문제 번호를 찾지 못한 경우 오류 처리
if [ -z "$problem_number" ]; then
  echo "❌ Error: No valid problem number folder found."
  exit 1
fi

log_debug "\n✅ Successfully detected problem number: $problem_number"

# Git add and commit
git add .
git commit -m "feat(baekjoon) : add $problem_number problem"

echo "🎉 Successfully committed changes for problem $problem_number."