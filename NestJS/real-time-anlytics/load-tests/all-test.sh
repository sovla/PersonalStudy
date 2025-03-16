#!/bin/bash

# 1. 로그를 저장할 기본 디렉토리
LOG_DIR="load-tests/log"

# 2. 오늘 날짜로 폴더를 생성 (예: 20250316)
DATE_FOLDER=$(date +'%Y%m%d')
TODAY_LOG_DIR="${LOG_DIR}/${DATE_FOLDER}"

# 3. 오늘 날짜 폴더가 없으면 생성
mkdir -p "$TODAY_LOG_DIR"

# 4. config 파일들이 있는 디렉토리 경로
CONFIG_DIR="load-tests/config"

# 5. config 폴더 안의 모든 .yml 또는 .config.yml 파일을 순회
for CONFIG_FILE in "$CONFIG_DIR"/*.yml
do
  # 예: create.config.yml -> create.config (확장자 제외) 
  # 또는 필요에 따라 .config.yml 전체를 제거하고 싶다면 basename 옵션 수정
  CONFIG_BASENAME=$(basename "$CONFIG_FILE" .yml)
  
  # 결과 파일 이름 (json / html)
  OUTPUT_FILE="${TODAY_LOG_DIR}/${CONFIG_BASENAME}-result.json"
  REPORT_FILE="${TODAY_LOG_DIR}/${CONFIG_BASENAME}-report.html"

  echo "=================================================="
  echo "[INFO] Running artillery test with: $CONFIG_FILE"
  echo "[INFO] Output JSON: $OUTPUT_FILE"
  echo "[INFO] Report HTML: $REPORT_FILE"
  echo "=================================================="

  # 6. Artillery 테스트 실행 & 결과 저장
  artillery run "$CONFIG_FILE" --output "$OUTPUT_FILE"

  # 7. 결과 보고서(HTML) 생성
  artillery report "$OUTPUT_FILE" --output "$REPORT_FILE"
  
  echo "[INFO] Test for $CONFIG_FILE completed."
  echo
done

echo "[INFO] All tests finished. Results are in $TODAY_LOG_DIR"