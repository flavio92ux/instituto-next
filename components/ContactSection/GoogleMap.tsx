import React from 'react';

const GoogleMap = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Nossa Localização</h3>
        <p className="text-gray-600">
          R. Cel. Américo Teixeira Guimarães, 401 - Industrial, Contagem - MG
        </p>
      </div>
      
      <div className="relative h-96">
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.026963187964!2d-44.053245!3d-19.931016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa693e6e7e7e7e7%3A0x123456789abcdef!2sR.%20Cel.%20Am%C3%A9rico%20Teixeira%20Guimar%C3%A3es%2C%20401%20-%20Industrial%2C%20Contagem%20-%20MG%2C%2032235-130!5e0!3m2!1spt-BR!2sbr!4v1720012345678!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização do Instituto Ser Feliz"
        className="w-full h-full"
        />
      </div>
      
      <div className="p-6 bg-gray-50">
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.google.com/maps/dir//R.+Cel.+Am%C3%A9rico+Teixeira+Guimar%C3%A3es,+401+-+Industrial,+Contagem+-+MG,+32235-130"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-3 bg-blue-500 text-white text-center rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
          >
            Como Chegar
          </a>
          <a
            href="https://www.google.com/maps/place/R.+Cel.+Américo+Teixeira+Guimarães,+401+-+Industrial,+Contagem+-+MG,+32235-130"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-3 bg-gray-600 text-white text-center rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300"
          >
            Ver no Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;