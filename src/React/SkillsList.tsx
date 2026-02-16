import React from "react";

const SkillsList = () => {
  return (
    <div className="text-left pt-6 md:pt-10 w-full max-w-2xl">
      
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold mb-6">
        Presentación
      </h3>

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[var(--white-icon-tr)] bg-[#1414149c]">
        
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/7sohCUazW-s"
          title="Presentación"
          allowFullScreen
        ></iframe>

      </div>

    </div>
  );
};

export default SkillsList;
