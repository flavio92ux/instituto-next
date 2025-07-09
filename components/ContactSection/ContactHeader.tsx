"use client";

const ContactHeader = () => {
    return (
        <div className="flex flex-col items-center text-center mb-16 pt-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-red-500 mb-6"></div>
          <p className="max-w-3xl text-lg text-gray-700">
            Tem perguntas ou deseja agendar uma visita? Adoraríamos ouvir de você!
          </p>
        </div>
    );
};

export default ContactHeader;