import React from "react";

import { Link } from "react-router-dom";
import Styles from "./nav.module.css";

export const Nav = () => {
  // const navStyles = {
  //     color: "#fff",
  //     fontSize: "1.5em",
  // }

  return (
    <>
      <nav>
        <div className={Styles.menuCabecera} style={{marginLeft:"5%"}}>
          <ul>
            <a href="" style={{textDecoration:"none"}}>
              <li>¿Que es?</li>
            </a>
            <a href="" style={{textDecoration:"none"}}>
              <li>¿Cómo funciona?</li>
            </a>
          </ul>
        </div>
        <Link to={"/"} style={{textDecoration:"none"}}>
          <div className={Styles.contenedorLogo} >
            <h2>CodeGenius<span style={{color:"#FD6584"}}>_</span></h2>
          </div>
        </Link>
        <div>
        <ul>
          <Link to="/Ingresa" style={{textDecoration:"none"}}>
            <li>
              <div
                className={Styles.botonIngresarCabecera}
                //   style={{ width: "70%", height: "3vh" }}
              >
                Acceder
              </div>
            </li>
          </Link>
          <Link to="/Formulario" style={{textDecoration:"none"}}>
            <li>
              <div
                className={Styles.botonCrearCuentaCabecera} 
                //   style={{ width: "70%", height: "3vh", margin: "0" }}
              >
                Crear cuenta
              </div>
            </li>
          </Link>
          <Link to="/Header" style={{textDecoration:"none"}}>
            <li>
              <div
                className={Styles.botonCrearCuentaCabecera} 
                //   style={{ width: "70%", height: "3vh", margin: "0" }}
              >
                Ver Cursos
              </div>
            </li>
          </Link>
        </ul>
        </div>  
      </nav>
    </>
  );
};
