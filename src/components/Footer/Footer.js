import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="Footer__div--angled"></div>
      <p>Designed & built with 🍕 by Johnny Hall © {currentYear}</p>
    </footer>
  );
};
