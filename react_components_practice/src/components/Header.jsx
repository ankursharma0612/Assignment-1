import React from "react";

function Header({ brand = "Component Lab", links = [] }) {
  return (
    <header className="header">
      <a className="brand" href="#home" aria-label={`${brand} home`}>
        <span className="brand-mark">C</span>
        {brand}<span className="brand-period">.</span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        {links.map((link) => (
          <a href={link.href} key={link.href}>{link.label}</a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
