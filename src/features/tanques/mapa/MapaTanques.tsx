import React, { useState } from "react";
import { TanqueComponente } from "./TanqueComponente"; // importa o componente do tanque

interface Tanque {
  id: string;
  nome: string;
  capacidadeMaxima: number;
  volumeAtual: number;
  posX: number;
  posY: number;
}

export const MapaTanques: React.FC = () => {
  const [tanques, setTanques] = useState<Tanque[]>([
    { id: "1", nome: "Tanque A", capacidadeMaxima: 1000, volumeAtual: 500, posX: 50, posY: 50 },
    { id: "2", nome: "Tanque B", capacidadeMaxima: 2000, volumeAtual: 1500, posX: 300, posY: 100 },
  ]);

  const handleMove = (id: string, x: number, y: number) => {
    setTanques(prev =>
      prev.map(t => (t.id === id ? { ...t, posX: x, posY: y } : t))
    );
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 800,
        height: 500,
        border: "2px solid #ccc",
        marginTop: 20,
        backgroundColor: "#f0f0f0",
      }}
    >
      {tanques.map(t => (
        <TanqueComponente
          key={t.id}
          tanque={t}
          onMove={handleMove}
        />
      ))}
    </div>
  );
};