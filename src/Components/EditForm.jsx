// EditForm.js

import React, { useState } from "react";

const EditForm = ({ quote, updateCreatedQuotes }) => {
  const URL = import.meta.env.VITE_BASE_API_URL;

  const [updatedQuote, setUpdatedQuote] = useState({
    author: quote.author,
    content: quote.content,
    category: quote.category,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7yZTQ5VqaJcVtWqmZtZ4A_M64XSf35wiwOvo8zmulMXjM45teJIMjRYXTwbEjlcKrnBg&usqp=CAU",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedQuote),
    };

    fetch(`${URL}quotes/${quote.id}`, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update quote");
        }
        return response.json();
      })
      .then((data) => {
        // Handle success if needed
        console.log("Quote updated successfully:", data);
        // Call the updateCreatedQuotes function passed as prop
        updateCreatedQuotes(data);
      })
      .catch((error) => {
        // Handle error if needed
        console.error("Error updating quote:", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedQuote({
      ...updatedQuote,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1">
          <label htmlFor="author">Author</label>
          <textarea
            id="author"
            name="author"
            cols="30"
            rows="auto"
            value={updatedQuote.author}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-1">
          <label htmlFor="user-quote">Content</label>
          <textarea
            id="user-quote"
            name="content"
            cols="30"
            rows="auto"
            value={updatedQuote.content}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-1">
          <label htmlFor="select">Category:</label>
          <select
            id="select"
            name="category"
            value={updatedQuote.category}
            onChange={handleInputChange}
            required
            className="rounded-full"
          >
            <option value="">--Please Select--</option>
            <option value="Forgiveness">Forgiveness</option>
            <option value="growth">Growth</option>
            <option value="Love">Love</option>
            <option value="Motivational">Motivational</option>
            <option value="Nature">Nature</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-200 focus:outline-none focus:ring mt-4"
          >
            Submit Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
