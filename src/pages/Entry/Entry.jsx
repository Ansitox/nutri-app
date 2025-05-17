import React from "react";

import { useState } from "react";

export default function Entry() {
  const [descripcion, setDescripcion] = useState("");
  return (
    <div>
      <h2 className="text-xl mb-2">Registrar Comida o Ejercicio</h2>
      <textarea
        className="w-full p-2 border rounded"
        rows={4}
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        placeholder="Describe tu comida o ejercicio..."
      />
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
        Procesar con IA
      </button>
    </div>
  );
}