import React from "react";

const SkillsList = () => {
  return (
    <div className="text-left pt-6 md:pt-10 w-full max-w-2xl">
      
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold mb-6">
        Presentación
      </h3>

      {/* CONTENEDOR 16:9 RESPONSIVE */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[var(--white-icon-tr)] bg-[#1414149c]">
        
        {/* Placeholder temporal */}
        <div className="absolute inset-0 flex items-center justify-center text-[var(--white-icon)]">
          
        </div>

        {/* Cuando tengas el video, reemplaza el div de arriba por el iframe */}

      </div>

    </div>
  );
};

export default SkillsList;
