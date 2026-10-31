import React from "react";

function Footer({ name = "Component Lab", year = new Date().getFullYear() }) {
  return (
    <footer className="footer">
      <span>© {year} {name}</span>
      <span>Built with React components <b>✳</b></span>
    </footer>
  );
}

export default Footer;
