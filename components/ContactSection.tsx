"use client";

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import SendMail from './ContactSection/SendMail';
import ScheduleVisit from './ContactSection/ScheduleVisit';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-red-500 mb-6"></div>
          <p className="max-w-3xl text-lg text-gray-700">
            Tem perguntas ou deseja agendar uma visita? Adoraríamos ouvir de você!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <SendMail />
          
          <div>
            <div className="bg-blue-500 text-white p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-blue-100">Rua Coronel Américo Teixeira Guimarães, 401, Bairro Industrial, Contagem – MG, CEP 32235-130</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-blue-100">(31) 3321-8224</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <FaWhatsapp size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-blue-100">(31) 99585-2001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <p className="text-blue-100">instituto.serfeliz@yahoo.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            
            <ScheduleVisit />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;