"use client";
import React from 'react';
import { ArrowLeft, FileText, Users, AlertTriangle, CheckCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button 
              onClick={() => window.history.back()}
              aria-label="Botão de voltar"
              className="flex items-center text-blue-500 hover:text-blue-600 transition-colors mr-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Voltar
            </button>
          </div>

          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <FileText className="w-16 h-16 text-blue-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Termos de Serviço
            </h1>
            <p className="text-gray-600">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-blue-500" />
                1. Sobre o Instituto Ser Feliz
              </h2>
              <p className="text-gray-700 mb-4">
                O Instituto Ser Feliz é uma instituição filantrópica dedicada à educação infantil, 
                oferecendo serviços educacionais gratuitos para crianças de 1 a 3 anos no bairro 
                Industrial, em Contagem, Minas Gerais.
              </p>
              <p className="text-gray-700">
                Estes Termos de Serviço regem o uso de nossos serviços educacionais e estabelecem 
                os direitos e responsabilidades de todas as partes envolvidas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2 text-blue-500" />
                2. Aceitação dos Termos
              </h2>
              <p className="text-gray-700 mb-4">
                Ao matricular seu filho no Instituto Ser Feliz, você concorda em cumprir estes 
                Termos de Serviço. Se você não concordar com qualquer parte destes termos, 
                não poderá utilizar nossos serviços.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Serviços Oferecidos</h2>
              <p className="text-gray-700 mb-4">
                O Instituto Ser Feliz oferece:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Educação infantil para crianças de 1 a 3 anos</li>
                <li>Atividades pedagógicas e recreativas</li>
                <li>Alimentação balanceada e nutritiva</li>
                <li>Cuidados básicos de saúde e higiene</li>
                <li>Acompanhamento do desenvolvimento infantil</li>
                <li>Orientação aos pais e responsáveis</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Processo de Matrícula</h2>
              <p className="text-gray-700 mb-4">
                Para matricular uma criança, os pais/responsáveis devem:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Verificar a disponibilidade de vagas</li>
                <li>Apresentar toda a documentação exigida</li>
                <li>Participar de entrevista com a equipe pedagógica</li>
                <li>Concordar com as normas e regulamentos da instituição</li>
                <li>Fornecer informações médicas e de emergência atualizadas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Responsabilidades dos Pais/Responsáveis</h2>
              <p className="text-gray-700 mb-4">
                Os pais/responsáveis comprometem-se a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Respeitar os horários de funcionamento da instituição</li>
                <li>Manter informações de contato atualizadas</li>
                <li>Comunicar ausências e problemas de saúde da criança</li>
                <li>Participar de reuniões e atividades quando solicitado</li>
                <li>Tratar funcionários e outras famílias com respeito</li>
                <li>Seguir as orientações pedagógicas e de saúde</li>
                <li>Buscar a criança pontualmente no horário estabelecido</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Responsabilidades da Instituição</h2>
              <p className="text-gray-700 mb-4">
                O Instituto Ser Feliz compromete-se a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Fornecer educação de qualidade e cuidados adequados</li>
                <li>Manter ambiente seguro e saudável</li>
                <li>Comunicar-se regularmente com os pais</li>
                <li>Respeitar a individualidade de cada criança</li>
                <li>Manter profissionais qualificados</li>
                <li>Seguir todas as regulamentações aplicáveis</li>
                <li>Proteger a privacidade e segurança das informações</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-yellow-500" />
                7. Normas de Conduta
              </h2>
              <p className="text-gray-700 mb-4">
                Para manter um ambiente harmonioso e seguro:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Comportamentos agressivos ou desrespeitosos não serão tolerados</li>
                <li>É proibido fumar nas dependências da instituição</li>
                <li>Visitantes devem ser autorizados pela administração</li>
                <li>Objetos de valor devem ser evitados</li>
                <li>Medicamentos só serão administrados com prescrição médica</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Saúde e Segurança</h2>
              <p className="text-gray-700 mb-4">
                Crianças com sintomas de doenças contagiosas não devem frequentar a escola até 
                completa recuperação. Em caso de emergência médica, os pais serão imediatamente 
                contactados e, se necessário, a criança será encaminhada para atendimento médico.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cancelamento e Transferência</h2>
              <p className="text-gray-700 mb-4">
                A matrícula pode ser cancelada por:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Solicitação dos pais/responsáveis</li>
                <li>Descumprimento destes termos</li>
                <li>Comportamento inadequado persistente</li>
                <li>Falta de adaptação da criança</li>
              </ul>
              <p className="text-gray-700 mt-4">
                O cancelamento deve ser comunicado com antecedência mínima de 30 dias.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Limitação de Responsabilidade</h2>
              <p className="text-gray-700">
                O Instituto Ser Feliz não se responsabiliza por objetos pessoais perdidos ou 
                danificados. Nossa responsabilidade limita-se aos cuidados durante o período 
                em que a criança estiver sob nossa supervisão nas dependências da instituição.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Alterações nos Termos</h2>
              <p className="text-gray-700">
                Estes termos podem ser alterados a qualquer momento. As mudanças serão comunicadas 
                aos pais/responsáveis com antecedência razoável e entrarão em vigor na data especificada.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contato</h2>
              <p className="text-gray-700 mb-4">
                Para questões sobre estes Termos de Serviço, entre em contato conosco:
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

export default TermsOfService;