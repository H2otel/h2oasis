"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Building2, Home, Droplet, BarChart3, LineChart, Percent } from "lucide-react";

export default function ParticulierSimulation() {
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
    <div className="min-h-screen bg-gray-100 pt-24">
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
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-bold mb-6">Ville</h2>

              <div className="mb-6">
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

              <div className="flex justify-end mt-8">
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-2"
                  onClick={() => setActiveTab("logement")}
                >
                  Suivant
                </Button>
              </div>
            </div>
          )}

          {activeTab === "logement" && (
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-bold mb-6">Votre logement</h2>

              <div className="space-y-6">
                <div>
                  <label className="block mb-2">Type de logement</label>
                  <select className="w-full bg-gray-900 text-white border border-gray-700 rounded-md p-3">
                    <option value="">Sélectionnez votre type de logement</option>
                    <option value="appartement">Appartement</option>
                    <option value="maison">Maison</option>
                    <option value="villa">Villa</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2">Nombre d'occupants</label>
                  <select className="w-full bg-gray-900 text-white border border-gray-700 rounded-md p-3">
                    <option value="1">1 personne</option>
                    <option value="2">2 personnes</option>
                    <option value="3">3 personnes</option>
                    <option value="4">4 personnes</option>
                    <option value="5+">5 personnes ou plus</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  className="border border-white text-white hover:bg-gray-700"
                  onClick={() => setActiveTab("besoin")}
                >
                  Précédent
                </Button>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => setActiveTab("source")}
                >
                  Suivant
                </Button>
              </div>
            </div>
          )}

          {activeTab === "source" && (
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-bold mb-6">Source d'eau</h2>

              <div className="space-y-6">
                <div>
                  <label className="block mb-2">Type d'eau</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4"/>
                      <span>Eau municipale</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4"/>
                      <span>Eau de puits</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4"/>
                      <span>Eau de pluie récupérée</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  className="border border-white text-white hover:bg-gray-700"
                  onClick={() => setActiveTab("logement")}
                >
                  Précédent
                </Button>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => setActiveTab("points")}
                >
                  Suivant
                </Button>
              </div>
            </div>
          )}

          {activeTab === "points" && (
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-bold mb-6">Points d'eau</h2>

              <div className="space-y-6">
                <div>
                  <label className="block mb-2">Nombre de points d'eau</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block mb-1 text-sm">Robinets</label>
                      <input type="number" min="0" className="w-full bg-gray-900 text-white border border-gray-700 rounded-md p-2"/>
                    </div>
                    <div>
                      <label className="block mb-1 text-sm">Douches</label>
                      <input type="number" min="0" className="w-full bg-gray-900 text-white border border-gray-700 rounded-md p-2"/>
                    </div>
                    <div>
                      <label className="block mb-1 text-sm">Toilettes</label>
                      <input type="number" min="0" className="w-full bg-gray-900 text-white border border-gray-700 rounded-md p-2"/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  className="border border-white text-white hover:bg-gray-700"
                  onClick={() => setActiveTab("source")}
                >
                  Précédent
                </Button>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => setActiveTab("consommation")}
                >
                  Suivant
                </Button>
              </div>
            </div>
          )}

          {activeTab === "consommation" && (
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-bold mb-6">Consommation</h2>

              <div className="space-y-6">
                <div>
                  <label className="block mb-2">Consommation mensuelle moyenne (en m³)</label>
                  <input type="number" min="0" step="0.1" className="w-full bg-gray-900 text-white border border-gray-700 rounded-md p-3"/>
                  <p className="text-xs text-gray-400 mt-1">Vous pouvez trouver cette information sur votre facture d'eau</p>
                </div>

                <div>
                  <label className="block mb-2">Prix moyen du m³ d'eau (en MAD)</label>
                  <input type="number" min="0" step="0.01" className="w-full bg-gray-900 text-white border border-gray-700 rounded-md p-3"/>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  className="border border-white text-white hover:bg-gray-700"
                  onClick={() => setActiveTab("points")}
                >
                  Précédent
                </Button>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => setActiveTab("economie")}
                >
                  Calculer mes économies
                </Button>
              </div>
            </div>
          )}

          {activeTab === "economie" && (
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-bold mb-6 text-center">Vos économies potentielles</h2>

              <div className="bg-gray-700 p-6 rounded-lg mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h3 className="text-lg mb-2">Économie d'eau annuelle</h3>
                    <div className="text-4xl font-bold text-green-500">43.2 m³</div>
                    <p className="text-sm text-gray-400 mt-1">Soit environ 45% de votre consommation actuelle</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg mb-2">Économie financière annuelle</h3>
                    <div className="text-4xl font-bold text-green-500">1,296 MAD</div>
                    <p className="text-sm text-gray-400 mt-1">Retour sur investissement en 4 mois</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Solutions recommandées</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Économiseur pour robinet</h4>
                    <p className="text-sm text-gray-300 mb-3">Réduction de 60% de consommation par robinet</p>
                    <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">Découvrir</Button>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Économiseur pour douche</h4>
                    <p className="text-sm text-gray-300 mb-3">Réduction de 50% de consommation par douche</p>
                    <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">Découvrir</Button>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Économiseur pour toilette</h4>
                    <p className="text-sm text-gray-300 mb-3">Réduction de 40% par chasse d'eau</p>
                    <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">Découvrir</Button>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white px-8"
                  >
                    Demander un devis personnalisé
                  </Button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
