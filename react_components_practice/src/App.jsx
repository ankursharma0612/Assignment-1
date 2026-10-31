import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

const initialItems = [
  {
    id: 1,
    title: "Reusable UI",
    description: "Create interface elements once and use them throughout an application.",
    category: "Frontend",
    tag: "Components",
    icon: "◈",
  },
  {
    id: 2,
    title: "Props & Data",
    description: "Pass different values into the same component to make it flexible.",
    category: "Learning",
    tag: "React basics",
    icon: "⌘",
  },
  {
    id: 3,
    title: "State Updates",
    description: "Respond to user actions and keep the interface in sync with data.",
    category: "Frontend",
    tag: "useState",
    icon: "✳",
  },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [showForm, setShowForm] = useState(true);
  const [message, setMessage] = useState("Explore the components and try adding your own card.");

  function addItem(newItem) {
    setItems((currentItems) => [
      ...currentItems,
      { ...newItem, id: Date.now() },
    ]);
    setMessage("Your new card was added successfully.");
  }

  function removeItem(id) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
    setMessage("Card removed from the collection.");
  }

  function resetItems() {
    setItems(initialItems);
    setMessage("The original example cards have been restored.");
  }

  return (
    <div className="app-shell" id="home">
      <Header
        brand="Component Lab"
        links={[
          { label: "Components", href: "#components" },
          { label: "Try it", href: "#try-it" },
        ]}
      />

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow"><i></i> REACT COMPONENTS PRACTICE</span>
            <h1>Small pieces.<br /><em>Better</em> interfaces.</h1>
            <p>Five reusable React components, working together in one interactive mini project. Explore how props, state, and events bring a UI to life.</p>
            <div className="hero-actions">
              <Button onClick={() => document.getElementById("components").scrollIntoView({ behavior: "smooth" })}>
                Explore components <span>↓</span>
              </Button>
              <span className="hero-caption">01 — 05 / COMPONENTS</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract component illustration">
            <div className="art-grid"></div>
            <div className="floating-tile tile-one"><span>01</span><b>Header</b><small>Navigation</small></div>
            <div className="floating-tile tile-two"><span>02</span><b>Card</b><small>Reusable UI</small></div>
            <div className="floating-tile tile-three"><span>03</span><b>Button</b><small>Interaction</small></div>
            <div className="art-center">{"</>"}</div>
            <div className="art-caption">COMPOSE · REUSE · REPEAT</div>
          </div>
          <div className="hero-bottom"><span>BUILT WITH REACT</span><span>PROPS + STATE + EVENTS</span></div>
        </section>

        <section className="component-section" id="components">
          <div className="section-intro">
            <div>
              <span className="eyebrow">01 / DYNAMIC RENDERING</span>
              <h2>One pattern.<br /><em>Many possibilities.</em></h2>
            </div>
            <div className="section-description">
              <p>These cards are generated from an array of objects using JavaScript's <code>.map()</code>. Each card receives its own data through props.</p>
              <span className="live-count">{String(items.length).padStart(2, "0")} CARDS RENDERED</span>
            </div>
          </div>

          <div className="card-grid">
            {items.map((item) => (
              <Card key={item.id} item={item} onRemove={removeItem} />
            ))}
          </div>

          <div className="interaction-bar">
            <p aria-live="polite"><span className="live-dot"></span>{message}</p>
            <Button variant="outline" onClick={resetItems}>Reset examples ↺</Button>
          </div>
        </section>

        <section className="playground-section" id="try-it">
          <div className="playground-copy">
            <span className="eyebrow">02 / STATE & EVENT HANDLING</span>
            <h2>Make it<br /><em>interactive.</em></h2>
            <p>Use the form to create a new card. React state updates the list, and the UI re-renders automatically. You can also remove individual cards.</p>
            <div className="concept-list">
              <div><span>01</span><p><b>useState</b><small>Stores the changing card list and form values.</small></p></div>
              <div><span>02</span><p><b>Props</b><small>Passes card data and event handlers between components.</small></p></div>
              <div><span>03</span><p><b>Events</b><small>Handles form submission, clicks, and removal.</small></p></div>
            </div>
            <Button variant="text" onClick={() => setShowForm((visible) => !visible)}>
              {showForm ? "Hide form" : "Show form"} <span>↗</span>
            </Button>
          </div>
          <div className="playground-panel">
            {showForm ? (
              <Form onAdd={addItem} />
            ) : (
              <div className="form-hidden">
                <span className="hidden-icon">＋</span>
                <h3>Form hidden</h3>
                <p>Show the form to add another card to the collection.</p>
                <Button onClick={() => setShowForm(true)}>Show form</Button>
              </div>
            )}
          </div>
        </section>

        <section className="summary-section">
          <div><span className="eyebrow">03 / COMPONENT CHECKLIST</span><h2>Five components.<br /><em>One small app.</em></h2></div>
          <div className="checklist">
            {["Header — navigation using props", "Footer — reusable closing section", "Card — dynamic content using props", "Button — variants and click handlers", "Form — controlled inputs and state"].map((text, index) => (
              <div className="check-row" key={text}><span>0{index + 1}</span><p>{text}</p><b>✓</b></div>
            ))}
          </div>
        </section>
      </main>

      <Footer name="Component Lab" />
    </div>
  );
}

export default App;
