import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../CSS/PostDetail.css"

function PostDetail() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();

  const BASE_URL = "https://book-of-ally-b3cb0c4823d8.herokuapp.com";


  useEffect(() => {
    const fetchPost = async () => {
      const postUrl = `${BASE_URL}/${slug}`;
      const response = await fetch(postUrl);

      if (response.ok) {
        const data = await response.json();
        setPost(data);
        console.log(data)
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };


  return (
    <div className="post-detail-container">
      <div className="post-content">
        <h1 className="post-title">{post.title}</h1>
        <h2 className="post-date">{formatDate(post.created_on)}</h2>
        <p>{post.content}</p>
        <img src={BASE_URL + post.image} width="600px" alt={`visual for the blog post titled "${post.title}"`} className="blog-post-image" />

      </div>
    </div>
  );
}

export default PostDetail;
