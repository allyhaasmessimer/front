import React, { useState } from "react";
import "../CSS/Unsubscribe.css";

function UnsubscribeForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://book-of-ally-b3cb0c4823d8.herokuapp.com/unsubscribe/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email }),
      });

      if (response.ok) {
        setMessage("UNSUBSCRIBED 🗸");
      } else {
        setMessage("FAILED TO UNSUBSCRIBE. VERIFY THAT EMAIL IS CORRECT.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

    setEmail("");
  };

  return (
    <form className="unsubscribe-form" onSubmit={handleSubmit}>
      <h1 className="unsubscribe-title">Unsubscribe</h1>
      <div class="centered-container">
      <input
        className="unsubscribe-input"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="unsubscribe-button" type="submit">
        Unsubscribe
      </button>
      {message && <p className="unsubscribe-message">{message}</p>}
      </div>
    </form>
  );
}

export default UnsubscribeForm;
