"use client";
import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center text-blue-500 hover:text-blue-600 transition-colors mr-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Voltar
            </button>
          </div>

          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Shield className="w-16 h-16 text-blue-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Política de Privacidade
            </h1>
            <p className="text-gray-600">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-2 text-blue-500" />
                1. Informações que Coletamos
              </h2>
              <p className="text-gray-700 mb-4">
                O Instituto Ser Feliz coleta informações pessoais quando você:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Entra em contato conosco através de formulários ou telefone</li>
                <li>Solicita informações sobre nossos serviços</li>
                <li>Agenda uma visita às nossas instalações</li>
                <li>Realiza o processo de matrícula de seu filho</li>
              </ul>
              <p className="text-gray-700 mt-4">
                As informações coletadas podem incluir: nome, endereço, telefone, e-mail, 
                informações sobre a criança (nome, idade, necessidades especiais) e documentos necessários para matrícula.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-blue-500" />
                2. Como Usamos suas Informações
              </h2>
              <p className="text-gray-700 mb-4">
                Utilizamos suas informações pessoais para:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Fornecer nossos serviços educacionais</li>
                <li>Comunicar-nos com você sobre atividades e eventos da escola</li>
                <li>Responder às suas perguntas e solicitações</li>
                <li>Manter registros educacionais e administrativos</li>
                <li>Cumprir obrigações legais e regulamentares</li>
                <li>Garantir a segurança e bem-estar das crianças</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-blue-500" />
                3. Compartilhamento de Informações
              </h2>
              <p className="text-gray-700 mb-4">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                exceto nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Quando exigido por lei ou ordem judicial</li>
                <li>Para proteger a segurança das crianças</li>
                <li>Com profissionais de saúde, quando necessário para o cuidado da criança</li>
                <li>Com autoridades educacionais, conforme exigido por regulamentações</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Segurança dos Dados</h2>
              <p className="text-gray-700">
                Implementamos medidas de segurança adequadas para proteger suas informações pessoais 
                contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui 
                controles físicos, eletrônicos e procedimentais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Seus Direitos</h2>
              <p className="text-gray-700 mb-4">
                Você tem o direito de:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar a exclusão de suas informações</li>
                <li>Retirar seu consentimento a qualquer momento</li>
                <li>Apresentar reclamações às autoridades competentes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Retenção de Dados</h2>
              <p className="text-gray-700">
                Mantemos suas informações pessoais pelo tempo necessário para cumprir os propósitos 
                descritos nesta política, ou conforme exigido por lei. Registros educacionais podem 
                ser mantidos por períodos mais longos conforme regulamentações educacionais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Alterações nesta Política</h2>
              <p className="text-gray-700">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
                mudanças significativas através de nossos canais de comunicação habituais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contato</h2>
              <p className="text-gray-700 mb-4">
                Para questões sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, 
                entre em contato conosco:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Instituto Ser Feliz</strong></p>
                <p className="text-gray-700">R. Cel. Américo Teixeira Guimarães, 401</p>
                <p className="text-gray-700">Industrial, Contagem - MG, 32235-130</p>
                <p className="text-gray-700">Telefone: (31) 3321-8224</p>
                <p className="text-gray-700">E-mail: instituto.serfeliz@yahoo.com.br</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;