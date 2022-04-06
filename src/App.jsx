import React, { useState} from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [posts, setPosts] = useState ([{user:"Will Smith", comment:"In West Philiadelphia, born and raised, on the playgrounds is where I spent most of my days.  Chillin out, maxin, relaxin, all shootin some bball outside the school.  When a couple of guys who were up to no good, started making trouble in my neighborhood."}]);

  function addNewPost(post){
      let tempPosts = [post, ...posts];
      setPosts(tempPosts);
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
