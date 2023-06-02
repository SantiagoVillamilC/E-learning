import Style from "./footer.module.css";
import Twitter from "./gorjeo.png"
import Face from "./facebook.png"
import Ins from "./instagram.png"

function ComponenteFooter() {
  return (
    <>
      <footer>
        <a href="#">
      <button class="btn-footer">Vuelve arriba</button>
      </a>
        <div class="footer-contact">
          <p>
            <strong>Contacto:</strong>
          </p>
          <p>Email: info@codegenius.com</p>
          <p>Teléfono: +57 123-456-7890</p>
          <p>Dirección: Bogotá, Colombia</p>
        </div>
        <div class="footer-social">
          <ul>
            <li>
              <a href="https://www.facebook.com"><img src={Face} alt="facebook logo" /></a>
            </li>
            <li>
              <a href="https://twitter.com"><img src={Twitter} alt="twitter logo" /></a>
            </li>
            <li>
              <a href="https://www.instagram.com"><img src={Ins} alt="instagram logo" /></a>
            </li>
          </ul>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2023 CodeGenius. Todos los derechos reservados.</p>
          <p>
            <a href="/politica-privacidad">Política de privacidad</a> |{" "}
            <a href="/terminos-condiciones">Términos y condiciones</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default ComponenteFooter;
