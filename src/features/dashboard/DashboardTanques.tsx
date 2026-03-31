import React from "react";
import { MapaTanques } from "../tanques/mapa/MapaTanques";

export const DashboardTanques: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Mapa de Tanques</h1>
      <MapaTanques />
    </div>
  );
};