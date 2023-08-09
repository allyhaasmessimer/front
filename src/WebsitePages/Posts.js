import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/PostList.css";

function PostList() {
  const [posts, setPosts] = useState([]);
  const BASE_URL = 'https://book-of-ally-b3cb0c4823d8.herokuapp.com';

  useEffect(() => {
    const fetchData = async () => {
      const postUrl = `${BASE_URL}`;
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
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="container">
      <h1 className="blog-page-title">BLOG POSTS</h1>
    <div className="post-list">

      {posts.slice(0, 5).map((post) => (
        <div className="post-card" key={post.id}>
          <img src={`${BASE_URL}${post.image}`} alt="Post Image" />
          <h3>{post.title}</h3>
          <p className='post-list-content'>{post.content.split(' ').slice(0, 20).join(' ')}</p>
          <h4>{formatDate(post.created_on)}</h4>
          <div className="button-style">
          <Link to={`/blog/${post.slug}`}>
            <button>Read More</button>
          </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default PostList;
