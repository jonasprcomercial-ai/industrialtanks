import React from "react";

export interface Tanque {
  id: string;
  nome: string;
  capacidadeMaxima: number;
  volumeAtual: number;
  posX: number;
  posY: number;
}

interface Props {
  tanque: Tanque;
  onMove?: (id: string, x: number, y: number) => void;
}

export const TanqueComponente: React.FC<Props> = ({ tanque, onMove }) => {
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const newX = e.clientX - 50; // centraliza a imagem no cursor
    const newY = e.clientY - 50;
    onMove && onMove(tanque.id, newX, newY);
  };

  return (
    <div
      draggable
      onDragEnd={handleDragEnd}
      style={{
        position: "absolute",
        left: tanque.posX,
        top: tanque.posY,
        width: 100,
        height: 100,
        cursor: "grab",
      }}
    >
      <img
      //https://ibb.co/s9kTPkPg
      //https://ibb.co/yc4WGkB9
      //https://ibb.co/fVKKzcgN
      //https://ibb.co/63QY3Tj
      //https://ibb.co/NbpLw98
        src="https://i.ibb.co/bDLrpsS/5.png"
        alt={tanque.nome}
        style={{ width: "100%", height: "100%" }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          color: "white",
          textAlign: "center",
          fontSize: 12,
        }}
      >
        {tanque.nome} ({tanque.volumeAtual}/{tanque.capacidadeMaxima})
      </div>
    </div>
  );
};