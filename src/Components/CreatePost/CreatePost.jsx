import React, { useState } from 'react';
import "./CreatePost.css"

const CreatePost = (props) => {
    
    const [user, setUser] = useState ('Type your name here....')
    const [comment, setComment] = useState ('Type your comment here...')

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            user: user,
            comment: comment,
        }
        props.addPost(newPost);   
    }
    return (   
        <div>
            <form className="create-box" onSubmit={handleSubmit}>
                <div className="name-input">
                <label className="name-label">Name</label>
                <input className="input-field"type="text" size="41" onClick={() => setUser("")} onChange={(event) => setUser(event.target.value)} value={user} ></input>
                </div>
                <div className="comment-container">
                <label className="label-text">Comment</label>
                <textarea type="text" className="comment-box2"  onClick={() => setComment("")} onChange={(event) => setComment(event.target.value)} value={comment} ></textarea>
                <button type="submit" class="button-one btn btn-info" >Post</button>
                </div>
            </form>
        </div>
      );
}
 
export default CreatePost ;