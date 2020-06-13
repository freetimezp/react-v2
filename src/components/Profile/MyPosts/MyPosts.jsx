import React from 'react';
import {reduxForm, Field} from 'redux-form';

import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

  let postsData = props.postsData;

  let postsElements = postsData
      .map ( (post) => <Post message={post.message} key={post.id} likes={post.likes} dislikes={post.dislikes} />
  );

  let newPostElement = React.createRef();

  let addNewPost = (values) => {
    props.addNewPost(values.newPostText);
  }

	return (
      <div>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={addNewPost} />
        <div className={classes.posts}>
          { postsElements }
        </div>
      </div>
    );
}

const AddNewPostForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={"textarea"} name={"newPostText"} />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    )
}

const AddNewPostFormRedux = reduxForm({
  form: 'profileAddNewPostForm'
})(AddNewPostForm);


export default MyPosts;