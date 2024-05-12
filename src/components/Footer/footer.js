import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {currentYear} &#169; Emmanuel Gligbe.
    </footer>
  );
};

export default Footer;
