"use client";
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactInfo = () => {
    return (
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
    );
};

export default ContactInfo;