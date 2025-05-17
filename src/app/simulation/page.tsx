"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Home } from "lucide-react";

export default function SimulationPage() {
  return (
    <div className="min-h-screen bg-blue-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl font-bold mb-6">Simulateur d'économies d'eau</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estimez vos économies potentielles en eau et en argent en quelques clics.
            Choisissez le type d'utilisateur qui correspond à votre situation.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {/* Particulier Option */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1"
          >
            <Link
              href="/simulation/particulier"
              className="group block h-full"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform transform group-hover:scale-105 group-hover:shadow-xl">
                <div className="h-48 relative overflow-hidden bg-blue-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Home className="text-blue-500 h-24 w-24" />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 text-center">Particulier</h2>
                  <p className="text-gray-600 text-center">
                    Pour les résidences, appartements et maisons individuelles.
                    Calculez les économies possibles sur votre consommation domestique.
                  </p>
                  <div className="mt-6 text-center">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
                      Commencer la simulation →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Professionnel Option */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <Link
              href="/simulation/professionnel"
              className="group block h-full"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform transform group-hover:scale-105 group-hover:shadow-xl">
                <div className="h-48 relative overflow-hidden bg-green-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="text-green-500 h-24 w-24" />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 text-center">Professionnel</h2>
                  <p className="text-gray-600 text-center">
                    Pour les entreprises, hôtels, restaurants et installations commerciales.
                    Estimez les économies potentielles sur votre exploitation.
                  </p>
                  <div className="mt-6 text-center">
                    <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">
                      Commencer la simulation →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-4 text-center">Comment fonctionne notre simulateur ?</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl mb-4">1</div>
              <h3 className="font-semibold mb-2">Entrez vos informations</h3>
              <p className="text-gray-600 text-sm">Renseignez les détails sur votre habitation ou établissement et vos habitudes de consommation.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl mb-4">2</div>
              <h3 className="font-semibold mb-2">Notre algorithme calcule</h3>
              <p className="text-gray-600 text-sm">Notre système analyse les données et détermine les économies potentielles avec nos solutions.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl mb-4">3</div>
              <h3 className="font-semibold mb-2">Obtenez votre rapport</h3>
              <p className="text-gray-600 text-sm">Recevez une estimation détaillée des économies d'eau et financières sur une année.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
