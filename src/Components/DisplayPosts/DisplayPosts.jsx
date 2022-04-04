import React, { useState } from 'react';
import "./DisplayPosts.css"




const DisplayPosts = (props) => {

    

    return ( 
        <div>
          {props.newPost.map((post) => {
              return (
                  <div className="comment-box">
                <h3 className="user-name">{post.user}</h3>
                <p className="comment-body">{post.comment}</p>
                <button className="like-btn" type="button"></button>
                <button className="dislike-btn" type="button"></button>

                </div>
              )
             
              
          }
          )}
        </div>
     );
}
 
export default DisplayPosts;