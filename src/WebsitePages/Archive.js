import React, { useState, useEffect } from "react";
import "../CSS/Archive.css";
import { Link } from "react-router-dom";


function ArchiveList() {
    const [posts, setPosts] = useState([]);
    const BASE_URL = "https://book-of-ally-b3cb0c4823d8.herokuapp.com";

    useEffect(() => {
        const fetchData = async () => {
            const postUrl = `${BASE_URL}/`;
            const response = await fetch(postUrl);

            if (response.ok) {
                const data = await response.json();
                setPosts(data.posts);
            }
        };

        fetchData();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString(undefined, options);
    };
    return (
        <div>
            <h1 className="archive-title">ARCHIVES</h1>
            <div className="container">
                {posts.map((post) => (
                    <div className="post-container" key={post.slug}>
                        <Link to={`/blog/${post.slug}`}><h4 className="archive-post-title">{post.title}</h4></Link>
                        <p>{formatDate(post.created_on)}</p>
                        <p className="post-list-content">
                            {post.content.split(" ").slice(0, 200).join(" ")}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ArchiveList;
