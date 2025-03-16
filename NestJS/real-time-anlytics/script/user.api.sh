#!/bin/bash

BASE_URL="http://localhost:3000/users"

# 유저 생성 (POST 요청)
create_user() {
  curl -s -X POST "$BASE_URL" -H "Content-Type: application/json" -d "{\"name\": \"$1\"}" | jq
}

# 모든 유저 가져오기 (GET 요청)
get_users() {
  curl -s -X GET "$BASE_URL" | jq
}

# 실행
case "$1" in
  create)
    create_user "$2"
    ;;
  get)
    get_users
    ;;
  *)
    echo "Usage: $0 {create <name> | get}"
    exit 1
    ;;
esac
