import Icons from "./Icons.jsx";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-quote">"Creo tecnologia, pero ella es la que me hace querer crearla"</p>
        <p className="footer-location">📍 Venezuela | GMT-4</p>
        <p className="footer-stack">Hecho con 💜 React & CSS puro</p>

        <div className="footer-links">
          <a href="mailto:dixonramos282005@hotmail.com">Contacto</a>
        </div>
        <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑ Volver arriba
        </button>


        <Icons />
  
        <p className="footer-copy">© {new Date().getFullYear()} Dixon Ramos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
