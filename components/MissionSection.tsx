import { Heart } from "lucide-react";

const MissionSection = () => {
  return (
    <section id="sobre" className="bg-blue-50 py-20">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center mb-8">
        <Heart className="w-12 h-12 text-red-600" />
      </div>
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Nossa Missão</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Proporcionar educação infantil de qualidade para crianças carentes do Bairro Industrial,
        contribuindo para o desenvolvimento integral e preparando-as para um futuro melhor.
      </p>
    </div>
  </section>
  );
};

export default MissionSection;