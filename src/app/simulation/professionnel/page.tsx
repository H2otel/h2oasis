"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Building2, Home, Droplet, BarChart3, LineChart, Percent } from "lucide-react";
import Link from "next/link";

export default function ProfessionnelSimulation() {
  const [activeTab, setActiveTab] = useState("besoin");

  const tabs = [
    { id: "besoin", label: "Votre besoin", icon: <Building2 size={24} /> },
    { id: "logement", label: "Votre logement", icon: <Home size={24} /> },
    { id: "source", label: "Source d'eau", icon: <Droplet size={24} /> },
    { id: "points", label: "Points d'eau", icon: <BarChart3 size={24} /> },
    { id: "consommation", label: "Consommation", icon: <LineChart size={24} /> },
    { id: "economie", label: "Économie", icon: <Percent size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Navigation Tabs */}
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 min-w-[150px] py-6 flex flex-col items-center justify-center transition-colors ${
              activeTab === tab.id
                ? "bg-green-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="mb-2">{tab.icon}</div>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="container mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "besoin" && (
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Type d'établissement</h2>

              <div className="mb-6">
                <select
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded-md p-3"
                  defaultValue=""
                >
                  <option value="" disabled>Sélectionnez votre type d'établissement</option>
                  <option value="hotel">Hôtel</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="industrie">Industrie</option>
                  <option value="bureau">Bureau</option>
                  <option value="education">Établissement éducatif</option>
                  <option value="sante">Établissement de santé</option>
                </select>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-white mb-3">Localisation</h3>
                <select
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded-md p-3"
                  defaultValue=""
                >
                  <option value="" disabled>Sélectionnez votre ville</option>
                  <option value="casablanca">Casablanca</option>
                  <option value="rabat">Rabat</option>
                  <option value="marrakech">Marrakech</option>
                  <option value="tanger">Tanger</option>
                  <option value="fes">Fès</option>
                  <option value="agadir">Agadir</option>
                </select>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-white mb-3">Taille de l'établissement</h3>
                <select
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded-md p-3"
                  defaultValue=""
                >
                  <option value="" disabled>Sélectionnez la taille</option>
                  <option value="petite">Petite (&lt; 50 personnes)</option>
                  <option value="moyenne">Moyenne (50-250 personnes)</option>
                  <option value="grande">Grande (&gt; 250 personnes)</option>
                </select>
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-2"
                >
                  Suivant
                </Button>
              </div>
            </div>
          )}

          {activeTab === "logement" && (
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Votre établissement</h2>
              <p className="text-gray-300">Cette section sera disponible après avoir sélectionné votre type d'établissement.</p>
            </div>
          )}

          {activeTab === "source" && (
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Source d'eau</h2>
              <p className="text-gray-300">Cette section sera disponible après avoir configuré votre établissement.</p>
            </div>
          )}

          {activeTab === "points" && (
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Points d'eau</h2>
              <p className="text-gray-300">Cette section sera disponible après avoir configuré vos sources d'eau.</p>
            </div>
          )}

          {activeTab === "consommation" && (
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Consommation</h2>
              <p className="text-gray-300">Cette section sera disponible après avoir configuré vos points d'eau.</p>
            </div>
          )}

          {activeTab === "economie" && (
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Économie</h2>
              <p className="text-gray-300">Cette section sera disponible après avoir complété toutes les étapes précédentes.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
