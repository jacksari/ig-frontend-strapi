import React from 'react';

const API_URL = 'http://localhost:1337'

const formatImageUrl = (url) => `${API_URL}${url}`

function Posts({post}) {
    //console.log(post)
    const { image:{url}, description, likes } = post
    return (
        <div className="post">
            <img className="post__image" src={formatImageUrl(url)}/>
            <h4>{description}</h4>
            <div>
                <span>Likes: {likes}</span>
            </div>
        </div>
    );
}

export default Posts;
