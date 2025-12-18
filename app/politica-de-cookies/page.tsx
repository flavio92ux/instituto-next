"use client";
import React from 'react';
import { ArrowLeft, Cookie, Settings, Info, Shield } from 'lucide-react';

const CookiePolicy = () => {
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
              <Cookie className="w-16 h-16 text-blue-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Política de Cookies
            </h1>
            <p className="text-gray-600">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Info className="w-6 h-6 mr-2 text-blue-500" />
                1. O que são Cookies?
              </h2>
              <p className="text-gray-700 mb-4">
                Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo 
                (computador, tablet ou celular) quando você visita nosso site. Eles nos ajudam 
                a melhorar sua experiência de navegação e fornecer serviços mais personalizados.
              </p>
              <p className="text-gray-700">
                Os cookies não contêm informações pessoais identificáveis e não podem danificar 
                seu dispositivo ou arquivos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Settings className="w-6 h-6 mr-2 text-blue-500" />
                2. Como Usamos Cookies
              </h2>
              <p className="text-gray-700 mb-4">
                O Instituto Ser Feliz utiliza cookies para:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Garantir o funcionamento adequado do nosso site</li>
                <li>Lembrar suas preferências e configurações</li>
                <li>Analisar como nosso site é usado para melhorias</li>
                <li>Fornecer conteúdo relevante e personalizado</li>
                <li>Medir a eficácia de nossas comunicações</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Tipos de Cookies que Utilizamos</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies Essenciais</h3>
                  <p className="text-gray-700">
                    Estes cookies são necessários para o funcionamento básico do site. Eles permitem 
                    que você navegue pelo site e use recursos essenciais. Sem estes cookies, alguns 
                    serviços não podem ser fornecidos.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies de Funcionalidade</h3>
                  <p className="text-gray-700">
                    Estes cookies permitem que o site lembre de escolhas que você faz (como idioma 
                    ou região) e fornecem recursos aprimorados e mais personalizados.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies de Análise</h3>
                  <p className="text-gray-700">
                    Estes cookies coletam informações sobre como você usa nosso site. Todas as 
                    informações são anônimas e nos ajudam a melhorar o funcionamento do site.
                  </p>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies de Marketing</h3>
                  <p className="text-gray-700">
                    Estes cookies são usados para fornecer anúncios mais relevantes para você e 
                    seus interesses. Também podem ser usados para limitar o número de vezes que 
                    você vê um anúncio.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies de Terceiros</h2>
              <p className="text-gray-700 mb-4">
                Nosso site pode conter cookies de terceiros, incluindo:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Google Analytics:</strong> Para análise de tráfego e comportamento do usuário</li>
                <li><strong>Google Maps:</strong> Para exibir mapas e informações de localização</li>
                <li><strong>Redes Sociais:</strong> Para integração com plataformas sociais</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Estes terceiros têm suas próprias políticas de privacidade e cookies, 
                sobre as quais não temos controle.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-2 text-blue-500" />
                5. Gerenciamento de Cookies
              </h2>
              <p className="text-gray-700 mb-4">
                Você pode controlar e gerenciar cookies de várias maneiras:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Configurações do Navegador</h3>
                <p className="text-gray-700 mb-3">
                  A maioria dos navegadores permite que você:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Veja quais cookies estão armazenados</li>
                  <li>Exclua cookies individualmente ou todos</li>
                  <li>Bloqueie cookies de sites específicos</li>
                  <li>Bloqueie cookies de terceiros</li>
                  <li>Exclua todos os cookies ao fechar o navegador</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Instruções por Navegador</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Chrome:</strong> Configurações → Privacidade e segurança → Cookies</li>
                  <li><strong>Firefox:</strong> Opções → Privacidade e Segurança → Cookies</li>
                  <li><strong>Safari:</strong> Preferências → Privacidade → Cookies</li>
                  <li><strong>Edge:</strong> Configurações → Cookies e permissões do site</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Impacto da Desativação de Cookies</h2>
              <p className="text-gray-700 mb-4">
                Se você escolher desativar cookies, algumas funcionalidades do nosso site podem 
                não funcionar corretamente, incluindo:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Formulários de contato podem não funcionar adequadamente</li>
                <li>Preferências de navegação não serão salvas</li>
                <li>Alguns recursos interativos podem estar indisponíveis</li>
                <li>A experiência de navegação pode ser menos personalizada</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Atualizações desta Política</h2>
              <p className="text-gray-700">
                Esta Política de Cookies pode ser atualizada periodicamente para refletir mudanças 
                em nossas práticas ou por outros motivos operacionais, legais ou regulamentares. 
                Recomendamos que você revise esta página regularmente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contato</h2>
              <p className="text-gray-700 mb-4">
                Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato conosco:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700"><strong>Instituto Ser Feliz</strong></p>
                <p className="text-gray-700">R. Cel. Américo Teixeira Guimarães, 401</p>
                <p className="text-gray-700">Industrial, Contagem - MG, 32235-130</p>
                <p className="text-gray-700">Telefone: (31) 3321-8224</p>
                <p className="text-gray-700">E-mail: instituto.serfeliz@yahoo.com.br</p>
              </div>
            </section>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Consentimento
              </h3>
              <p className="text-green-700">
                Ao continuar a usar nosso site, você concorda com o uso de cookies conforme 
                descrito nesta política. Você pode retirar seu consentimento a qualquer momento 
                alterando as configurações do seu navegador.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;