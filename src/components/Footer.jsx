import React from 'react'

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-myTheme py-2 pr-2 text-right text-white">
      Designed & built with 🍕 by Johnny Hall © {currentYear}
    </footer>
  );
}

export default Footer;
