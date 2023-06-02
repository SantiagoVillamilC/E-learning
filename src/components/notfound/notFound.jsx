import React from "react";
import Imagen from "./undraw_page_not_found_re_e9o6.svg"
import Style from "./notfound.module.css"

export const NotFound = ()=>{
    return(
        <>
            <h1> NotFound Error 404</h1>
            <div className={Style.imagen}>
            <img src={Imagen} width={""} height={"100vh"} style={{display:"flex", alignItems:"center", justifyContent:"center"}} />
            </div>
        </>
    )
}

