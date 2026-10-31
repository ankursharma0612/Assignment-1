import React, { useState } from "react";
import Button from "./Button";

function Form({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Frontend");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError("Please enter both a title and a description.");
      return;
    }

    onAdd({
      title: title.trim(),
      description: description.trim(),
      category,
      tag: "Just added",
      icon: category === "Frontend" ? "◈" : category === "Backend" ? "⌘" : "✳",
    });

    setTitle("");
    setDescription("");
    setCategory("Frontend");
    setError("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <div>
          <span className="eyebrow">TRY IT YOURSELF</span>
          <h3>Add a new card</h3>
        </div>
        <span className="form-spark">✳</span>
      </div>

      <label htmlFor="card-title">Card title</label>
      <input
        id="card-title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="e.g. API Integration"
        maxLength={40}
      />

      <label htmlFor="card-description">Description</label>
      <textarea
        id="card-description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="What does this card represent?"
        rows="3"
        maxLength={120}
      />

      <label htmlFor="card-category">Category</label>
      <select id="card-category" value={category} onChange={(event) => setCategory(event.target.value)}>
        <option>Frontend</option>
        <option>Backend</option>
        <option>Learning</option>
      </select>

      {error && <p className="form-error" role="alert">{error}</p>}
      <Button type="submit">Add card <span>↗</span></Button>
    </form>
  );
}

export default Form;
