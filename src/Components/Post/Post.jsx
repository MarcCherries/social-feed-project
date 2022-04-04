import React, { useState, useEffect } from 'react';


const Post = (props) => {

    const [posts, setPosts] = useState([{name:"Chris", comment:"Hey"}])

    return ( 
        <div>
        <h3>{posts.name}</h3>
        <p>{posts.comment}</p>
        <button type="submit"></button>
        </div>
     )
}
 
export default Post;