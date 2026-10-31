export default function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="filters" role="group" aria-label="Filter by category">
      {categories.map((c) => (
        <button
          key={c}
          data-cat={c}
          className={`chip${c === active ? " active" : ""}`}
          aria-pressed={c === active}
          onClick={() => onSelect(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
