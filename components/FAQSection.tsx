import React from 'react';

const faqs = [
  {
    question: "O Instituto Ser Feliz é uma creche pública?",
    answer: "Somos uma instituição filantrópica que oferece educação infantil gratuita para crianças de 1 a 3 anos no bairro Industrial, em Contagem."
  },
  {
    question: "Onde fica localizada a creche?",
    answer: "Estamos na Rua Coronel Américo Teixeira Guimarães, 401, Bairro Industrial, Contagem – MG."
  },
  {
    question: "Qual a idade atendida pela escola?",
    answer: "Atendemos crianças de 1 ano até 3 anos e 11 meses, divididas entre Maternal I, II e III."
  },
  {
    question: "Qual o horário de funcionamento?",
    answer: "Funcionamos de segunda a sexta-feira, das 7h às 17h, oferecendo atendimento em período integral."
  },
  {
    question: "Como funciona o processo de matrícula?",
    answer: "As matrículas são realizadas mediante disponibilidade de vagas. Entre em contato conosco para verificar a disponibilidade e conhecer os documentos necessários."
  },
  {
    question: "A escola oferece alimentação?",
    answer: "Sim, oferecemos alimentação completa e balanceada, incluindo café da manhã, almoço e lanches da tarde, elaborados por nutricionista."
  },
  {
    question: "Vocês têm profissionais qualificados?",
    answer: "Sim, nossa equipe é composta por profissionais formados em pedagogia e especialistas em educação infantil, além de auxiliares capacitados."
  },
  {
    question: "Como posso agendar uma visita?",
    answer: "Você pode agendar uma visita entrando em contato conosco pelo telefone (31) 3321-8224 ou WhatsApp (31) 99585-2001."
  },
  {
    question: "A escola tem atividades extracurriculares?",
    answer: "Oferecemos diversas atividades pedagógicas como música, arte, contação de histórias, brincadeiras educativas e atividades físicas adequadas para cada faixa etária."
  },
  {
    question: "Há algum custo para frequentar a escola?",
    answer: "Não, somos uma instituição filantrópica e oferecemos educação infantil totalmente gratuita para as famílias da comunidade."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
          <div className="w-20 h-1 bg-red-500 mb-6"></div>
          <p className="max-w-3xl text-lg text-gray-700">
            Encontre respostas para as dúvidas mais comuns sobre o Instituto Ser Feliz. Se você não encontrar a resposta que procura, entre em contato conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-700 mb-6">
              Nossa equipe está pronta para ajudá-lo! Entre em contato conosco para esclarecer qualquer dúvida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+553133218224" 
                className="px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors duration-300"
              >
                Ligar Agora
              </a>
              <a 
                href="https://wa.me/5531995852001" 
                className="px-6 py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;