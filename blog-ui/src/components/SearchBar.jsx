export default function SearchBar({ value, onChange }) {
  return (
    <div className="search">
      <label htmlFor="search" className="sr-only">Search posts</label>
      <input
        id="search"
        type="search"
        placeholder="Search by title or excerpt"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
