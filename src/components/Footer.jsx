import Icons from "./Icons.jsx";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-quote">"I create technology, but it's technology that makes me want to create."</p>
        <div className="stackscon">
        <p className="footer-stack">Hecho con 💜 React & CSS puro</p>
        <p className="footer-location">📍 Venezuela | GMT-4</p>

</div>
        <Icons />
  
        <p className="footer-copy">© {new Date().getFullYear()} Dixon Ramos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
