import React, { useState } from 'react';
import "./DisplayPosts.css"





const DisplayPosts = (props) => {

    

    return ( 
        <div>
            
          {props.newPost.map((post) => {
              return (
                  <div class="comment-box">
                <h3 class="user-name">{post.user}</h3>
                <p class="comment-body">{post.comment}</p>
                <div class="button-group">
                <a href="#"><img src={require('./images/icons8-thumbs-up-50.png')} alt="Thumbs up" width="25"/></a>
                <img src={require('./images/icons8-thumbs-down-50.png')} alt="Thumbs down" width="25"/>
                </div>
                
                </div>
              )
             
              
          }
          )}
        </div>
     );
}
 
export default DisplayPosts;