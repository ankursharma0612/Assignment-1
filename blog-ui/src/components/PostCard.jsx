export default function PostCard({ post }) {
  const date = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="card" data-cat={post.category}>
      <img src={post.image} alt="" loading="lazy" />
      <div className="body">
        <span className="badge">{post.category}</span>
        <h2>{post.title}</h2>
        <p className="excerpt">{post.excerpt}</p>
        <footer>
          <span>{post.author}</span>
          <time dateTime={post.date}>{date}</time>
        </footer>
      </div>
    </article>
  );
}
