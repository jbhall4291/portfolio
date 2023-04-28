import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="Footer__div--angled"></div>
      <p className="Footer__p">
        Designed & built with 🍕 by Johnny Hall © {currentYear}
      </p>
    </>
  );
};
