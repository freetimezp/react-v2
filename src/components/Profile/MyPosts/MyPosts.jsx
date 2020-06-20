import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, maxLengthCreator} from './../../../utils/validators/validators.js';
import {Textarea} from './../../common/FormsControls/FormsControls.jsx'; 

import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = React.memo( (props) => {

  console.log("render");

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
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field 
            component={Textarea} 
            name={"newPostText"}
            validate={[required, maxLength10]}
            placeholder={"Post message"} />
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