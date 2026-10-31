import PostCard from "./PostCard";

export default function PostList({ posts, search, onReset }) {
  if (posts.length === 0) {
    const term = search.trim();
    return (
      <div className="empty">
        <p>{term ? `No posts match “${term}”.` : "No posts in this category yet."}</p>
        <button className="reset" onClick={onReset}>Clear search and filters</button>
      </div>
    );
  }

  return (
    <div className="grid">
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}
