"use client";

import Image from "next/image";
import Link from "next/link";

export default function PricesPage() {
    return (
        <div className="w-full bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-16 px-4 sm:px-6 lg:px-20 mt-0 sm:mt-10 md:mt-20 lg:mt-5">
            <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-yellow-400">Planes TorreTrust</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Elige el plan que mejor se adapte a las necesidades de tu condominio
        </p>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {/* Plan Básico */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-yellow-400 shadow-xl hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Plan Básico</h2>
            <p className="text-gray-300 mb-4">
              Funcionalidades esenciales para un control básico de accesos.
            </p>
            <ul className="text-sm text-gray-400 text-left space-y-2 mb-6">
              <li>✅ Generación y escaneo de códigos QR</li>
              <li>✅ Control de accesos para residentes y visitantes</li>
              <li>✅ Monitoreo en tiempo real</li>
              <li>✅ Registro automático de entradas y salidas</li>
              <li>⚠️ Historial de accesos disponible por 30 días</li>
            </ul>
            <span className="text-xl font-bold text-yellow-400">Gratis por 30 días</span>
          </div>

          {/* Plan Avanzado */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-yellow-400 shadow-xl hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Plan Avanzado</h2>
            <p className="text-gray-300 mb-4">
              Para quienes desean un mayor control y almacenamiento extendido.
            </p>
            <ul className="text-sm text-gray-400 text-left space-y-2 mb-6">
              <li>✅ Todo lo incluido en el Plan Básico</li>
              <li>✅ Historial de accesos por 90 días</li>
              <li>✅ Soporte técnico estándar</li>
            </ul>
            <span className="text-xl font-bold text-yellow-400">Ideal</span>
          </div>

          {/* Plan Premium */}
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 p-8 rounded-xl border-4 border-yellow-300 shadow-2xl transform scale-105">
            <h2 className="text-2xl font-bold text-white mb-4">Plan Premium</h2>
            <p className="text-white mb-4">
              Máxima seguridad con tecnología de vanguardia integrada.
            </p>
            <ul className="text-sm text-white text-left space-y-2 mb-6">
              <li>✅ Todo lo incluido en el Plan Avanzado</li>
              <li>✅ Historial de accesos por 180 días</li>
              <li>✅ Instalación de cámara con IA para escaneo automático de QR</li>
              <li>✅ Accesos automáticos sin intervención del guardia</li>
              <li>✅ Soporte técnico prioritario</li>
            </ul>
            <span className="text-xl font-bold text-white">Lo mejor para tu condominio</span>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-10">
          * Sujeto a condiciones y disponibilidad. Para más detalles, contáctanos.
        </p>

        <Link
          href="/contact-us"
          className="mt-8 inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition duration-300"
        >
          Contactanos
        </Link>
      </div>
        </div>
    );
}
