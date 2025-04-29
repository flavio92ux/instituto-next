"use client";

const ScheduleVisit = () => {
    const whatsappNumber = "5531995852001"; // Número do WhatsApp com código do país (55 para Brasil)
    const message = "Olá, gostaria de agendar uma visita à escola."; // Mensagem predefinida

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Agende uma Visita</h3>
            <p className="text-gray-700 mb-6">
                Adoraríamos mostrar nossas instalações e responder a quaisquer perguntas que você tenha. Agende uma visita para ver nossa escola em ação!
            </p>
            <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 text-center"
            >
                Agendar uma Visita
            </a>
        </div>
    );
};

export default ScheduleVisit;