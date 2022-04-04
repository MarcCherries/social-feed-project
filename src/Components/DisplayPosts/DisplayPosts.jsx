import React, { useState } from 'react';



const DisplayPosts = (props) => {

    

    return ( 
        <div>
          {props.newPost.map((post) => {
              return (
                  <div>
                <h3>{post.user}</h3>
                <p>{post.comment}</p>
                <button type="submit"></button>
                </div>
              )
             
              
          }
          )}
        </div>
     );
}
 
export default DisplayPosts;