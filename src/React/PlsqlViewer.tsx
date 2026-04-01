import { useState } from "react";

const temas = {
  intro: {
    titulo: "Introducción a PL/SQL",
    texto:
      "PL/SQL es una extensión de SQL que permite integrar lógica de programación dentro de la base de datos.",
    codigo: `DECLARE
  v_nombre VARCHAR2(50);
BEGIN
  v_nombre := 'Hola mundo';
  DBMS_OUTPUT.PUT_LINE(v_nombre);
END;`,
  },

  condicional: {
    titulo: "Condicional IF",
    texto:
      "Permite ejecutar instrucciones dependiendo de una condición lógica.",
    codigo: `DECLARE
  v_num NUMBER := 10;
BEGIN
  IF v_num > 5 THEN
    DBMS_OUTPUT.PUT_LINE('Mayor que 5');
  END IF;
END;`,
  },
};

export default function PlsqlViewer() {
  const [activo, setActivo] = useState("intro");
  const tema = temas[activo as keyof typeof temas];

  return (
    <div className="flex flex-col md:flex-row gap-8">

      {/* MENU */}
      <div className="md:w-1/3 space-y-4">
        {Object.keys(temas).map((key) => (
          <button
            key={key}
            onClick={() => setActivo(key)}
            className={`w-full text-left p-4 rounded-xl border transition 
              ${activo === key ? "bg-[#1a1a1a]" : "hover:bg-[#141414]"}`}
          >
            <h3 className="text-white font-semibold">
              {temas[key as keyof typeof temas].titulo}
            </h3>
          </button>
        ))}
      </div>

      {/* CONTENIDO */}
      <div className="md:w-2/3">

        <h2 className="text-3xl text-white font-bold mb-4">
          {tema.titulo}
        </h2>

        <p className="text-[var(--white-icon)] mb-6">
          {tema.texto}
        </p>

        {/* CODIGO */}
        <div className="bg-[#141414] border border-[var(--white-icon-tr)] rounded-xl p-4 overflow-x-auto">
          <pre className="text-green-400 text-sm font-mono">
            {tema.codigo}
          </pre>
        </div>

      </div>
    </div>
  );
}