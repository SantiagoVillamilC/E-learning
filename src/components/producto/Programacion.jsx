import React, { useState } from "react";

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
    <div>
      <h1>Programación básica y avanzada</h1>
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
      <div>
        {/* Botones de control del video */}
        <button onClick={playVideo}>Reproducir</button>
        <button onClick={pauseVideo}>Pausar</button>
        <button onClick={stopVideo}>Finalizar</button>
      </div>
    </div>
  );
};

export default Programacion;
