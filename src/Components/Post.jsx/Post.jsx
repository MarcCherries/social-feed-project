import React, { useState, useEffect } from 'react';


const Post = (props) => {

   

    return ( 
        <div>
        <h3>{props.posts.name}</h3>
        <p>{props.posts.comment}</p>
        <button type="submit"></button>
        </div>
     )
}
 
export default Post;