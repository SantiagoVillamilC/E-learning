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
        
        <div className={Styles.menuCabecera}>
          <ul>
            <a href="">
              <li>Cursos</li>
            </a>
            <a href="">
              <li>¿Cómo funciona?</li>
            </a>
            <Link to="/Formulario">
              <li>
                <div
                  className={Styles.botonIngresarCabecera}
                //   style={{ width: "70%", height: "3vh" }}
                >
                  Acceder
                </div>
              </li>
            </Link>
            <Link to="/Header">
              <li>
                <div
                  className={Styles.botonCrearCuentaCabecera}
                //   style={{ width: "70%", height: "3vh", margin: "0" }}
                >
                  Crear cuenta
                </div>
              </li>
            </Link>
          </ul>
        </div>
        <Link to={"/"}>
          <div className={Styles.contenedorLogo}>
            <h2>CodeGenius</h2>
          </div>
        </Link>
      </nav>
    </>
  );
};
