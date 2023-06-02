import React, { useState } from "react";
import Style from "./programacion.module.css"

const Programacion = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  const pauseVideo = () => {
    setIsPlaying(false);
  };

  const stopVideo = () => {
    setIsPlaying(false);
    // Lógica adicional para detener el video (por ejemplo, volver al inicio)
  };

  return (
    <div className={Style.pagina}>
      <h1>Bienvenidos a este curso</h1>
      <div>
        {/* Reproductor de video de YouTube */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={Style.botones}>
        {/* Botones de control del video */}
        <button onClick={playVideo}>Reprodcir</button>
        <button onClick={pauseVideo}>Pausar</button>
        <button onClick={stopVideo}>Finalizar</button>
      </div>
    </div>
  );
};

export default Programacion;
