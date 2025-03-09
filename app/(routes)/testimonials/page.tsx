"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatBot() {
    const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
    const [input, setInput] = useState("");
    
    const chatEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll al final del chat
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Desactivar el envío de mensajes
    const sendMessage = async () => {
    alert("El chatbot está desactivado.");
};

return (
    <div className="flex justify-center items-center min-h-screen bg-[#1e3a8a]">
        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-xl font-bold text-center text-black mb-3">Chatbot (Desactivado)</h1>
            <div className="h-80 overflow-y-auto p-2 border-b">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`p-2 my-1 rounded-lg ${
                            msg.sender === "user" ? "bg-blue-500 text-white text-right" : "bg-gray-300 text-black text-left"
                        }`}
                    >
                        {msg.text}
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>

            <div className="flex mt-2">
                <input
                    type="text"
                    className="flex-1 p-2 border rounded-l text-black placeholder:text-black"
                    placeholder="Escribe un mensaje..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled
                />
                <button className="bg-gray-400 text-white p-2 rounded-r cursor-not-allowed">
                    Enviar
                </button>
            </div>
        </div>
    </div> );
}