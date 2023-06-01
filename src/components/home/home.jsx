import { Nav } from "../nav/nav";
import Style from "./home.module.css";
import Imagen from "./undraw_pair_programming_re_or4x.svg"

function Home() {
  return (
    <div className={Style.cuerpo}>
      <header className={Style.header}>
        <div className={Style.portada}>
          <div className={Style.contenedorTextoCabecera}>
            <div className={Style.contenedorSlogan}><h2>"Domina el Código, Domina tu Futuro"</h2></div>
            
            <h1>No necesitas ser un genio para programar</h1>
            <div className={Style.botonCrearCuentaCabecera}>Crea tu cuenta gratis</div>
            <div className={Style.botonIngresarCabecera}>Ingresa</div>
          </div>
          <div className={Style.contenedorImagenCabecera}>
            <img src={Imagen} alt="Imagen" style={{width:"90%"}}/>
          </div>
        </div>
      </header>
      <body>
        <h1>HOOOLA SOY UN BODY</h1>
      </body>
    </div>
  );
}

export default Home;
