import React, { useState} from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NavBar from './Components/NavBar/NavBar';


function App() {

  const [posts, setPosts] = useState ([{user:"Will Smith", comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}]);

  function addNewPost(post){
    let tempPosts = [post, ...posts];
    
    setPosts(tempPosts)
  }

  return (
    <div>
    <NavBar  />
    <CreatePost addPost={addNewPost} posts={posts}/>
    <DisplayPosts newPost={posts} />
   

     
    </div>
  );
}

export default App;
