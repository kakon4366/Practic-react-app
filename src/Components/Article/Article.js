import React from 'react';
import './Article.css'

const titleStyle = {
    fontSize: '24px',
    color: 'blue',
    textAlign: 'left' 
}

const Article = (props) => {
    return (
        <div>
            <article className='blog-article' style={{}}>
                <h2 style={titleStyle}>This is title {props.articleCount} here!</h2>
                <p style={{color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rerum incidunt maxime nesciunt inventore ut, enim deleniti, alias numquam, nobis in! Adipisci consequuntur, aliquid earum explicabo dolorum impedit tempore, quas molestiae iure, officiis quibusdam porro. Nihil quam pariatur aut eius debitis eum facere dolore ratione, voluptatum fugit dolores repellat. Velit!</p>
                <button className='btn btn-secondary'>Show Details</button>
            </article>
        </div>
    );
};

export default Article;