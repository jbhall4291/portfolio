import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-myTheme py-2 text-center text-white sm:pr-2 sm:text-right md:px-6">
      Designed & built with 🍕 by Johnny Hall © {currentYear}
    </footer>
  );
}

export default Footer;
