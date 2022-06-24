// state는 어플리케이션 state가 아닌 리듀서가 권한을 가지고 있다.
// application state 의 경우 상시 공유되는 특징을 지니는데 이 state의 경우 액션을 반환받았을 경우 state가 바뀌기 때문에 application state가 아니다.
// state = null 은 시스템 초기에 아직 선택한 book 이 없을경우 state = undefined 을 이기에 null 값을 줘서 에러 방지
export default function (state = null, action) {
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
  }
  return state;
}
//do not | reducer only pure object
// state.title = book.title
// return state;
