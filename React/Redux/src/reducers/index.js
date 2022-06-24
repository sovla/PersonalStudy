import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

const rootReducer = combineReducers({
  //스테이트를 매핑하는 메소드
  books: BooksReducer,
  activeBook: ActiveBook,
});

export default rootReducer;

// 물류 관리 쪽
