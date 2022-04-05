import React, { useState } from 'react';
import "./CreatePost.css"


const CreatePost = (props) => {
    
    const [user, setUser] = useState ('')
    const [comment, setComment] = useState ('')

   

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            user: user,
            comment: comment
        }
        props.addPost(newPost);
       
    }

    return (   
        <div>
            <form class="create-box" onSubmit={handleSubmit}>
                <div class="name-input">
                <label class="name-label">Name</label>
                <input size="41"value={user} onChange={(event) => setUser(event.target.value)}></input>
                </div>
                <div class="comment-container">
                <label class="label-text">Comment</label>
                <textarea class="comment-box2" value={comment} onChange={(event) => setComment(event.target.value)}></textarea>
                <button type="submit">Create</button>
                </div>
            </form>
        </div>
      );
}
 
export default CreatePost ;