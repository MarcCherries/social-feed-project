import React, { useState } from 'react';
import "./CreatePost.css"

const CreatePost = (props) => {
    
    const [user, setUser] = useState ('Double-click to type your name...')
    const [comment, setComment] = useState ('Double-click to type your comment...')

    function handleSubmit(event){
        event.preventDefault();
        let clearUserField= () => { setUser('Double-click to type your name...')};
        let clearCommentField= () => {setComment('Double-click to type your comment...')};
        let newPost = {
            user: user,
            comment: comment,
        }
        if (!user || user==="Double-click to type your name..." || !comment || comment==="Double-click to type your name..."){
            alert("No input detected! Please try again!");
        }
    
        else {
        props.addPost(newPost);
        clearUserField();
        clearCommentField();
        }
        

    }
    return (   
        <div>
            <form className="create-box" onSubmit={handleSubmit}>
                <div className="name-input">
                <label className="name-label">Name</label>
                <input className="input-field"type="text" size="41" onDoubleClick={() => setUser("")} onChange={(event) => setUser(event.target.value)} value={user} ></input>
                </div>
                <div className="comment-container">
                <label className="label-text">Comment</label>
                <textarea type="text" className="comment-box2"  onDoubleClick={() => setComment("")} onChange={(event) => setComment(event.target.value)} value={comment} ></textarea>
                <button type="submit" class="button-one btn btn-info" >Post</button>
                </div>
            </form>
        </div>
      );
}
 
export default CreatePost ;