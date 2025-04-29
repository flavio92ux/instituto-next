import { Heart, Clock, Users } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="bg-blue-50 py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Diferenciais</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Clock className="w-8 h-8 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Horário Integral</h3>
          <p className="text-gray-600">Atendimento das 7h às 18h, proporcionando suporte integral às famílias.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="w-8 h-8 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Equipe Qualificada</h3>
          <p className="text-gray-600">Profissionais especializados em educação infantil e desenvolvimento.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Heart className="w-8 h-8 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Ambiente Acolhedor</h3>
          <p className="text-gray-600">Espaço seguro e acolhedor para o desenvolvimento das crianças.</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default FeaturesSection;