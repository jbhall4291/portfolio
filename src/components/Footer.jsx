const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-myTheme text-right py-2 pr-2">
      Designed & built with 🍕 by Johnny Hall © {currentYear}
    </footer>
  );
}

export default Footer;
