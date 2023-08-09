import React, { useState } from "react";
import "../CSS/Subscribe.css";

function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://book-of-ally-b3cb0c4823d8.herokuapp.com/subscribe/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email }),
      });

      if (response.ok) {
        setMessage("subscribed 🗸");
      } else {
        setMessage("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

    setEmail("");
  };

  return (
    <form className="subscribe-form" onSubmit={handleSubmit}>
    <h1 className="subscribe-title">Subscribe to Blog Updates</h1>
    <input
      className="subscribe-input"
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <button className="subscribe-button" type="submit">
      Subscribe
    </button>
    {message && <p className="subscribe-message">{message}</p>}
  </form>
  );
}

export default SubscribeForm;
