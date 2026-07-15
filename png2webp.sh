#!/bin/bash

QUALITY=80

move_to_trash() {
  local file_path="$1"
  local base_name trash_path

  base_name=$(basename "$file_path")
  trash_path="$HOME/.Trash/$base_name"

  if [[ -e "$trash_path" ]]; then
    trash_path="$HOME/.Trash/${base_name%.*}_$(date +%Y%m%d%H%M%S).${base_name##*.}"
  fi

  mv "$file_path" "$trash_path"
}

process_png() {
  local file_path="$1"

  if [[ ! -f "$file_path" ]]; then
    return
  fi

  local ext lower_ext
  ext="${file_path##*.}"
  lower_ext=$(printf '%s' "$ext" | tr '[:upper:]' '[:lower:]')
  if [[ "$lower_ext" != "png" ]]; then
    return
  fi

  local file_name target_webp
  file_name=$(basename "$file_path")
  target_webp="${file_path%.*}.webp"

  if cwebp -q "$QUALITY" "$file_path" -o "$target_webp"; then
    if move_to_trash "$file_path"; then
      echo "✅ 성공: $file_name -> $(basename "$target_webp") (원본 PNG 휴지통 이동 완료)"
    else
      echo "⚠️  변환 성공: $file_name -> $(basename "$target_webp") (원본 PNG 휴지통 이동 실패)"
    fi
  else
    echo "❌ 실패: $file_name 변환 중 오류 발생"
  fi
}

process_path() {
  local input_path="$1"

  # 드래그 입력에서 붙는 따옴표 제거
  input_path="${input_path%\"}"
  input_path="${input_path#\"}"

  if [[ -f "$input_path" ]]; then
    process_png "$input_path"
    return
  fi

  if [[ -d "$input_path" ]]; then
    find "$input_path" -type f \( -iname "*.png" \) | while IFS= read -r png_file; do
      process_png "$png_file"
    done
    return
  fi

  if [[ -n "$input_path" ]]; then
    echo "⚠️  스킵: '$input_path'는 유효한 파일/디렉토리가 아닙니다."
  fi
}

INPUT_ITEMS=()

if [[ "$#" -gt 0 ]]; then
  INPUT_ITEMS=("$@")
else
  echo "📸 변환할 PNG 파일 또는 디렉토리를 터미널로 드래그한 후 Enter를 누르세요:"
  read -r INPUT_PATHS

  if [[ -z "$INPUT_PATHS" ]]; then
    echo "⚠️  입력된 경로가 없습니다."
    exit 1
  fi

  # 드래그 입력 문자열을 셸 인자 목록으로 분리
  eval "set -- $INPUT_PATHS"
  INPUT_ITEMS=("$@")
fi

for ITEM in "${INPUT_ITEMS[@]}"; do
  process_path "$ITEM"
done

echo "---"
echo "🏁 모든 작업이 완료되었습니다!"
