import React from 'react';
import './Blog.css'

const Blog = (props) => {
    return (
        <div className='blog'>
            <h1>{props.heading}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt nemo incidunt ex nisi impedit!</p>
            <h4>Author: {props.author}</h4>
        </div>
    );
};

export default Blog;