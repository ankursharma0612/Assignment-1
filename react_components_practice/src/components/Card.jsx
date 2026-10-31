import React from "react";

function Card({ item, onRemove }) {
  return (
    <article className="card">
      <div className="card-top">
        <span className="card-category">{item.category}</span>
        <span className="card-number">{String(item.id).padStart(2, "0")}</span>
      </div>
      <div className="card-icon" aria-hidden="true">{item.icon}</div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="card-bottom">
        <span className="card-tag">{item.tag}</span>
        {onRemove && (
          <button className="remove-button" onClick={() => onRemove(item.id)} aria-label={`Remove ${item.title}`}>
            Remove ×
          </button>
        )}
      </div>
    </article>
  );
}

export default Card;
