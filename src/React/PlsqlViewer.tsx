import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const temas = {
  intro: {
    titulo: "Introducción",
    contenido: [
      {
        tipo: "titulo",
        texto: "¿Qué es PL/SQL?",
      },
      {
        tipo: "parrafo",
        texto:
          "PL/SQL es una extensión de SQL que permite integrar lógica de programación dentro de la base de datos.",
      },
      {
        tipo: "subtitulo",
        texto: "Estructura básica",
      },
      {
        tipo: "codigo",
        codigo: `DECLARE
  v_nombre VARCHAR2(50);
BEGIN
  v_nombre := 'Hola mundo';
  DBMS_OUTPUT.PUT_LINE(v_nombre);
END;`,
      },
      {
        tipo: "parrafo",
        texto:
          "Este bloque declara una variable, le asigna un valor y lo imprime en consola.",
      },
    ],
  },

  condicional: {
    titulo: "Condicional IF",
    contenido: [
      {
        tipo: "titulo",
        texto: "Uso del IF",
      },
      {
        tipo: "parrafo",
        texto:
          "Permite ejecutar instrucciones dependiendo de una condición lógica.",
      },
      {
        tipo: "codigo",
        codigo: `DECLARE
  v_num NUMBER := 10;
BEGIN
  IF v_num > 5 THEN
    DBMS_OUTPUT.PUT_LINE('Mayor que 5');
  END IF;
END;`,
      },
      {
        tipo: "parrafo",
        texto:
          "En este ejemplo se evalúa si un número es mayor que 5.",
      },
    ],
  },
};

export default function PlsqlViewer() {
  const [activo, setActivo] = useState("intro");
  const tema = temas[activo]; // ⚠️ quitamos TypeScript

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
              {temas[key].titulo}
            </h3>
          </button>
        ))}
      </div>

      {/* CONTENIDO */}
      <div className="md:w-2/3">
        <h2 className="text-3xl text-white font-bold mb-6">
          {tema.titulo}
        </h2>

        <div className="space-y-6">
          {tema.contenido.map((bloque, i) => {
            switch (bloque.tipo) {
              case "titulo":
                return (
                  <h3 key={i} className="text-2xl font-semibold text-white">
                    {bloque.texto}
                  </h3>
                );

              case "subtitulo":
                return (
                  <h4 key={i} className="text-xl font-semibold text-gray-300">
                    {bloque.texto}
                  </h4>
                );

              case "parrafo":
                return (
                  <p key={i} className="text-[var(--white-icon)]">
                    {bloque.texto}
                  </p>
                );

              case "codigo":
                return (
                  <div
                    key={i}
                    className="bg-[#141414] border border-[var(--white-icon-tr)] rounded-xl p-4 overflow-x-auto"
                  >
                    {/* BOTON COPIAR */}
                    <button
                      onClick={() =>
                        navigator.clipboard.writeText(bloque.codigo)
                      }
                      className="mb-3 px-3 py-1 bg-gray-700 rounded text-sm text-white hover:bg-gray-600"
                    >
                      Copiar código
                    </button>

                    <SyntaxHighlighter language="sql" style={oneDark}>
                      {bloque.codigo}
                    </SyntaxHighlighter>
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}