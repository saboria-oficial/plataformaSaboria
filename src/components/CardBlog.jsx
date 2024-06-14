import React from 'react'
import '../css/blog.css'


const CardBlog = (props) => {
 
  return (


      <div className="blog-item">
        <img src={props.image} />
        <h2>{props.title}</h2>
      </div>
 

  );
};
export default CardBlog;