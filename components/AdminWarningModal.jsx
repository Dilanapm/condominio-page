// components/AdminWarningModal.js
import React from "react";

export default function AdminWarningModal({ isOpen, onContinue, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl p-6 shadow-lg w-full max-w-sm text-center">
        <h2 className="text-xl font-semibold text-red-600 mb-4">⚠️ Acceso restringido</h2>
        <p className="mb-6 text-gray-700">Solo los administradores y Gerentes pueden acceder a esta sección.</p>
        <div className="flex justify-around">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Salir
          </button>
          <button
            onClick={onContinue}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
