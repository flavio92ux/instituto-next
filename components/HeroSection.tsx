"use client";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden mb-8">
      {/* Elementos de Fundo Decorativos */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-blue-100 opacity-30"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-red-100 opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
        <div className="absolute -top-20 left-10 w-20 h-20 rounded-full bg-blue-400 opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-red-400 opacity-20 animate-float-delay"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full bg-yellow-400 opacity-20 animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-1">
        <div className="relative max-w-6xl mx-auto">
          {/* Imagem de Destaque */}
          <div className="relative group">
            {/* Elementos decorativos atrás da imagem */}
            <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-red-500 to-red-600 rounded-3xl transform rotate-2 opacity-20 group-hover:rotate-3 transition-transform duration-500"></div>
            <div className="absolute -bottom-8 -right-8 w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl transform -rotate-2 opacity-20 group-hover:-rotate-3 transition-transform duration-500"></div>
            
            {/* Container da imagem principal */}
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
              <div className="relative">
                <img 
                  src="/instituto-capa.jpeg" 
                  alt="Instituto Ser Feliz - Educação Infantil" 
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay sutil para melhor integração */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Elementos decorativos flutuantes sobre a imagem */}
                <div className="absolute top-8 left-8 w-6 h-6 rounded-full bg-white/30 animate-pulse"></div>
                <div className="absolute top-20 right-12 w-4 h-4 rounded-full bg-white/20 animate-pulse delay-300"></div>
                <div className="absolute bottom-16 left-16 w-8 h-8 rounded-full bg-white/25 animate-pulse delay-700"></div>
              </div>
            </div>
          </div>

          {/* Elementos decorativos adicionais */}
          <div className="absolute -top-4 left-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 opacity-30 animate-float-slow"></div>
          <div className="absolute -bottom-4 right-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-500 opacity-30 animate-float-delay"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;