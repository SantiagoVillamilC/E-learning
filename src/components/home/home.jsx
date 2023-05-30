import Style from "./home.module.css";
import Imagen from "./undraw_pair_programming_re_or4x.svg"

function Home() {
  return (
    <div className={Style.cuerpo}>
      <header className={Style.header}>
        <nav>
          <div className={Style.contenedorLogo}>
            <h2>CodeGenius</h2>
          </div>
          <div className={Style.menuCabecera}>
            <ul>
              <a href=""><li>Cursos</li></a>
              <a href=""><li>¿Cómo funciona?</li></a>
              <a href=""><li><div className={Style.botonIngresarCabecera} style={{width:"70%", height:"3vh"}}>Acceder</div></li></a>
              <a href=""><li><div className={Style.botonCrearCuentaCabecera} style={{width:"70%", height:"3vh", margin:"0"}}>Crear cuenta</div></li></a>
            </ul>
          </div>
        </nav>
        <div className={Style.portada}>
          <div className={Style.contenedorTextoCabecera}>
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
