"use client";

import { useState } from 'react';
import { Send } from 'lucide-react';

const SendMail = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("ola")

        const { name, email, phone, subject, message } = formData;
    
        const mailtoLink = `mailto:instituto.serfeliz@yahoo.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\n\nMensagem:\n${message}`
        )}`;

        console.log(mailtoLink)

        window.location.href = mailtoLink;
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie-nos uma Mensagem</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="Seu nome"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="Seu e-mail"
                            required
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Número de Telefone</label>
                    <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Seu número de telefone"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Assunto *</label>
                    <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Assunto da mensagem"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem *</label>
                    <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Sua mensagem"
                        required
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300 flex items-center justify-center"
                >
                    Enviar Mensagem
                    <Send size={18} className="ml-2" />
                </button>
            </form>
        </div>
    );
};

export default SendMail;