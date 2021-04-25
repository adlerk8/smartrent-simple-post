import React, { useState } from 'react';
import Header from "./components/Header/Header";
import CreatePost from "./components/CreatePost/CreatePost";
import Post from "./components/Post/Post";
import "./App.css";

const App = () => {
  const [postList, setPostList] = useState([]);

  const onSubmit = (content) => {
    const newPost = [...postList, content];
    setPostList(newPost);
  }

  const newPost = postList.map((post, index) => {
      return (
        <Post post={post} key={index}></Post>
      )
    })

  return (
    <div className="App">
      <Header/>
      <CreatePost onSubmit={onSubmit} className="CreatePostDiv"/>
      <div>
        <ol>{newPost}</ol>
      </div>
    </div>
  );
};

export default App;
