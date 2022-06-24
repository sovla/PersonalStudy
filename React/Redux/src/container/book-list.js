import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
//액션
import { bindActionCreators } from "redux";
//액션생성자

class BookList extends Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  renderList() {
    console.log(this.props.selectBook);
    console.log(selectBook);
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}
function mapStateToProps(state) {
  return {
    books: state.books,
  };
}
//이 함수로 반환하는 것이 북리스트 컨테이너의 props로 연결될 것입니다.
//selectBook이 호출될때마다 결과는 리듀서로 전달되어야 합니다.
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//connect
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
