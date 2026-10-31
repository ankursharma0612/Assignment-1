import { useMemo, useState } from "react";
import posts from "./data/posts.json";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import PostList from "./components/PostList";

const categories = ["All", ...new Set(posts.map((p) => p.category))];
const label = (n) => `${n} ${n === 1 ? "post" : "posts"}`;

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return posts.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        `${p.title} ${p.excerpt}`.toLowerCase().includes(query)
    );
  }, [search, category]);

  const reset = () => {
    setSearch("");
    setCategory("All");
  };

  return (
    <>
      <Header />
      <main className="page">
        <div className="toolbar">
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter categories={categories} active={category} onSelect={setCategory} />
        </div>
        <p className="count" aria-live="polite">
          {filtered.length === posts.length
            ? label(posts.length)
            : `${filtered.length} of ${label(posts.length)}`}
        </p>
        <PostList posts={filtered} search={search} onReset={reset} />
      </main>
    </>
  );
}
