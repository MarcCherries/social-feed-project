import React, { useState } from 'react';
import "./DisplayPosts.css"
import CustomButton from '../CustomButton/CustomButton';





const DisplayPosts = (props) => {

    

    return ( 
        <div>
            
          {props.newPost.map((post) => {
              return (
                  <div className="comment-box">
                <h3 className="user-name">{post.user}</h3>
                <p className="comment-body">{post.comment}</p>
                <div className="button-group">
              
                </div>
                <CustomButton />
                </div>
              )
             
              
          }
          )}
        </div>
     );
}
 
export default DisplayPosts;


/*
<a href="#"><img src={require('./images/icons8-thumbs-up-50.png')} alt="Thumbs up" width="25"/></a>
<img src={require('./images/icons8-thumbs-down-50.png')} alt="Thumbs down" width="25"/>

*/