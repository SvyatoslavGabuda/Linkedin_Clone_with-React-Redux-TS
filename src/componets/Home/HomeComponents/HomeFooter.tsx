import { Link } from "react-router-dom";

export const HomeFooter = () => (
  <div className="HomeRightFooter">
    <div>
      <Link className="footer-link" to="/">
        Informazioni
      </Link>
      <Link className="footer-link" to="/">
        Accessibilità
      </Link>
    </div>
    <div>
      <Link className="footer-link" to="/">
        Centro assistenza
      </Link>
      <Link className="footer-link" to="/">
        Privacy e condizioni
      </Link>
    </div>
    <div>
      <Link className="footer-link" to="/">
        Opzioni per gli annunci pubblicitari
      </Link>
    </div>
    <div>
      <Link className="footer-link" to="/">
        Pubblicità
      </Link>
      <Link className="footer-link" to="/">
        Servizi alle aziende
      </Link>
    </div>
    <div>
      <Link className="footer-link" to="/">
        Scarica l'app LinkedIn
      </Link>
      <Link className="footer-link" to="/">
        Altro
      </Link>
    </div>
    <div className="HomeFooterCR">
      {" "}
      <img className="footer-logo" src="logo.webp" alt="Linkedin Logo" height={"16px"} />
      LinkedIn Corporation &copy; {new Date().getFullYear()}
    </div>
  </div>
);
