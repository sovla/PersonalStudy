import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  renderField(field) {
    const {
      meta: { touched, error },
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""} `;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input //onChange={field.input.onChange}
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ""}
          {/* {field.meta.pristine ? field.meta.error : ""} */}
          {/* {field.meta.invalid ? field.meta.error : ""} */}
        </div>
      </div>
    );
  }
  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
      console.log(this.props.history);
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        ></Field>
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        ></Field>
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        ></Field>
        <button type="submit" className="btn btn-primary ">
          Save
        </button>
        <Link to="/" className="btn btn-danger  ">
          Close
        </Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter a categories!";
  }
  if (!values.content) {
    errors.content = "Enter a content!";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm",
})(connect(null, { createPost })(PostsNew));
