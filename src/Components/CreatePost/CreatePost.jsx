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
            <form className="create-box" onSubmit={handleSubmit}>
                <div className="name-input">
                <label className="name-label">Name</label>
                <input type="text" size="41" onChange={(event) => setUser(event.target.value)} value={user} ></input>
                </div>
                <div className="comment-container">
                <label className="label-text">Comment</label>
                <textarea type="text" class="comment-box2" onChange={(event) => setComment(event.target.value)} value={comment} ></textarea>
                <button type="submit">Create</button>
                </div>
            </form>
        </div>
      );
}
 
export default CreatePost ;