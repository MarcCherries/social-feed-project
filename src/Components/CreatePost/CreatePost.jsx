import React, { useState } from 'react';



const CreatePost = (props) => {
    
    const [user, setUser] = useState ('')
    const [comment, setComment] = useState ('')

   

    function handleSubmit(event){
        event.preventDefault();
        let newPost = {
            user: user,
            comment: comment
        }
        props.addPost(newPost)
    }

    return (   
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input value={user} onChange={(event) => setUser(event.target.value)}></input>
                <label>Comment</label>
                <input value={comment} onChange={(event) => setComment(event.target.value)}></input>
                <button type="submit">Create</button>
            </form>
        </div>
      );
}
 
export default CreatePost ;