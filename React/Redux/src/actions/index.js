export function selectBook(book) {
  return {
    type: "BOOK_SELECTED",
    payload: book,
  };
}

//selectBook 액션 생성자고 액션 반환이 필요하다 타입 프로퍼티 오브젝트이다.
//type 대문자 _ 로 구성
