import React, {useEffect, useState} from 'react';
import Posts from "../components/Posts";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetch('http://localhost:1337/posts')
            const data = await res.json()
            setPosts(data)
        }
        getPosts()
    },[]);


    return (
        <div className="home">
            {
                posts.map((post,index) => (
                    <Posts post={post} key={index}/>
                ))
            }
        </div>
    )
}

export default Home;
