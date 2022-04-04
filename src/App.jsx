import React, { useState, useEffect } from 'react';
import Post from './Components/Post/Post';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';

function App() {

  const [posts, setPosts] = useState ([{user: "Chris", comment:'heyyyyyyyy'}]);

  function addNewPost(post){
    let tempPosts = [post, ...posts];
    
    setPosts(tempPosts)
  }

  return (
    <div>
     
    <CreatePost addPost={addNewPost} posts={posts}/>
    <DisplayPosts newPost={posts} />
   

     
    </div>
  );
}

export default App;
