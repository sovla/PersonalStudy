import React, { Component } from "react";
import { fetchPost, deletePost } from "../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class PostsShow extends Component {
  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }
  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }

  helperFunction() {
    this.props.posts[this.props.match.params.id];
  }
  render() {
    const { post } = this.props;

    if (!post) {
      return <div>...Loading</div>;
    }
    return (
      <div>
        <Link to="/">
          <button className="btn btn-primary">Back To Index</button>
        </Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Button
        </button>
        <h3>{post.title}</h3>
        <h6>Categories:{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  console.log(ownProps, "ownProps");
  console.log(posts, "posts");
  return { post: posts[ownProps.match.params.id] };
}
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
