import React from "react";

import { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function Summary() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    async function fetchSummary() {
      const snap = await getDocs(collection(db, "users/UID/dailySummary"));
      const data = snap.docs.map(d => d.data());
      setSummary(data);
    }
    fetchSummary();
  }, []);

  return (
    <div>
      <h2 className="text-xl mb-2">Resumen Diario</h2>
      {summary ? (
        <pre>{JSON.stringify(summary, null, 2)}</pre>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}