import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return _.map(this.props.posts, (post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

// connect 기존의 방식에선 mapTo Props인가 썻는데 이번엔 안쓰고 바로 넘기는 이유가 뭘까?
// ActionBindCreate??? 그거 썻엇는데 차이점을 알아봐야겠당

function mapStateToProps(state) {
  return { posts: state.posts };
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
