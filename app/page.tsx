"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Phone, Mail, MapPin, Clock, Users } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />

        {/* Services Section */}
        <section id="servicos" className="py-20 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Maternal I</h3>
              <p className="text-gray-600">Para crianças de 1 a 2 anos, focando no desenvolvimento inicial e socialização.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Maternal II</h3>
              <p className="text-gray-600">Atendendo crianças de 2 a 3 anos, com atividades lúdicas e desenvolvimento motor.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Maternal III</h3>
              <p className="text-gray-600">Para crianças de 3 a 4 anos, preparando para a próxima fase educacional.</p>
            </Card>
          </div>
        </section>

        {/* Mission Section */}
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

        <ContactSection />

        {/* Features Section */}
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

        <Footer />
      </main>
    </>
  );
}