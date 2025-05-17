"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function WhyH2Oasis() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-6">Pourquoi H2Oasis ?</h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            H2Oasis vous aide à économiser de l'eau tout en réduisant vos factures. Découvrez nos technologies et études de cas réelles qui montrent comment nous faisons une différence.
          </p>
        </motion.div>

        {/* Innovative Technology Section */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6">Technologie Innovante</h2>
                <p className="text-gray-600 mb-6">
                  Nos économiseurs optimisent le débit d'eau sans compromis sur le confort, économisant jusqu'à 60% de votre consommation. Notre technologie assure des performances élevées et une installation facile.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Réduction de la consommation jusqu'à 60%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Maintien de la pression et du confort d'utilisation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Installation simple en quelques minutes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Retour sur investissement rapide</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Image
                  src="https://ext.same-assets.com/1169117998/1183703983.jpeg"
                  alt="Innovative water technology"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section>
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-6">Études de Cas</h2>
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h3 className="text-xl font-semibold mb-3">L'Hôtel Atlas</h3>
                  <p className="text-gray-600">
                    a réduit ses factures d'eau de 30% en installant les économiseurs H2Oasis, améliorant ainsi son efficacité et réduisant ses coûts de fonctionnement de manière significative.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h3 className="text-xl font-semibold mb-3">La Résidence Les Oliviers</h3>
                  <p className="text-gray-600">
                    a économisé 45% sur sa consommation d'eau dans les parties communes grâce à nos solutions intégrées.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Le Complexe Sportif Municipal</h3>
                  <p className="text-gray-600">
                    a réduit sa consommation d'eau de 35% dans les douches et vestiaires tout en maintenant le confort des utilisateurs.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Image
                  src="https://ext.same-assets.com/476458201/1149014131.jpeg"
                  alt="Hotel case study"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Prêt à économiser de l'eau et de l'argent ?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez comment nos solutions peuvent s'adapter à vos besoins spécifiques et commencez à réduire votre consommation d'eau dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
              Demander une démonstration
            </Button>
            <Button variant="outline" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 text-lg">
              Télécharger notre brochure
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
