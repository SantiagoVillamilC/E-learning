import React from "react";
import Imagen from "./undraw_page_not_found_re_e9o6.svg"

export const NotFound = ()=>{
    return(
        <>
            <h1> NotFound Error 404</h1>
            <img src={Imagen} width={""} height={"500vh"} />
        </>
    )
}

