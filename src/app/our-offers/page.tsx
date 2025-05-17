"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OurOffers() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Business Offers Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h1 className="text-4xl font-bold text-center mb-4">Nos Offres pour les Entreprises</h1>
            <p className="text-gray-600 text-center max-w-4xl mx-auto">
              Optimisez vos ressources, réduisez vos coûts, et adoptez une démarche durable grâce à H2Oasis.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 flex flex-wrap gap-4 justify-center">
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/1169117998/1183703983.jpeg"
                  alt="Water conservation"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/174946582/58013150.jpeg"
                  alt="Water conservation"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/476458201/1149014131.jpeg"
                  alt="Water conservation"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/1169117998/1183703983.jpeg"
                  alt="Water conservation"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Chez H2Oasis, nous comprenons les défis auxquels les grandes structures comme les hôtels, hôpitaux, administrations publiques et cités universitaires font face pour gérer efficacement leur consommation d'eau tout en maintenant un niveau de service irréprochable.</h2>

              <p className="text-gray-600 mb-6">
                C'est pourquoi nous avons développé des solutions sur mesure, spécifiquement conçues pour vous aider à atteindre vos objectifs économiques et environnementaux, sans compromis sur le confort ou la qualité des services offerts à vos clients, patients ou employés.
              </p>

              <Button className="bg-blue-500 text-white w-full md:w-auto">
                Recevoir un échantillon gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Offers Section */}
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h1 className="text-4xl font-bold text-center mb-4">Nos Offres pour les Particuliers</h1>
            <p className="text-gray-600 text-center max-w-4xl mx-auto">
              Faites des économies à la maison, facilement et rapidement !
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 flex flex-wrap gap-4 justify-center">
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/174946582/58013150.jpeg"
                  alt="Water conservation"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/476458201/1149014131.jpeg"
                  alt="Water conservation"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/1169117998/1183703983.jpeg"
                  alt="Water conservation"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-6">Transformez votre consommation d'eau en source d'économies grâce aux packs d'économiseurs d'eau H2Oasis. Nos solutions sont conçues pour s'adapter à tous les types de logements – que vous viviez dans un appartement, une maison ou une villa.</h2>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">•</span>
                  <span>Installation simple : S'installe en quelques minutes, sans outils complexes ni plombier.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">•</span>
                  <span>Rentabilité rapide : Réduisez jusqu'à 60% de votre consommation d'eau.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">•</span>
                  <span>Des économies chaque mois : Observez des économies dès la première utilisation.</span>
                </li>
              </ul>

              <p className="text-gray-600 mb-8">
                Prenez le contrôle de vos dépenses d'eau tout en adoptant un mode de vie plus respectueux de l'environnement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-500 text-white">
                  Demandez un devis personnalisé
                </Button>
                <Button className="bg-green-500 text-white">
                  Essayer notre simulateur d'économie d'eau
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Service */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h1 className="text-4xl font-bold text-center mb-4">Service d'audit</h1>
            <p className="text-gray-600 text-center max-w-4xl mx-auto">
              Découvrez vos économies potentielles grâce à notre audit personnalisé !
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <Image
                src="https://ext.same-assets.com/174946582/58013150.jpeg"
                alt="Water audit"
                width={500}
                height={300}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            <div className="lg:w-2/3">
              <p className="text-gray-600 mb-6">
                Vous souhaitez savoir combien vous pourriez économiser en optimisant la consommation d'eau de votre établissement ou domicile ? Nos experts H2Oasis réalisent un audit complet et gratuit de vos installations actuelles, identifient les points d'amélioration, et vous proposent un plan sur mesure pour maximiser vos économies.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">•</span>
                  <span><strong>Analyse précise de vos installations :</strong> Nous évaluons le nombre de points d'eau, vos habitudes de consommation et l'efficacité de vos équipements actuels.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">•</span>
                  <span><strong>Recommandations personnalisées :</strong> Grâce à notre expertise, nous vous suggérons les solutions H2Oasis les plus adaptées à vos besoins spécifiques.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 font-bold">•</span>
                  <span><strong>Maximisez vos économies :</strong> Avec notre audit, bénéficiez d'un aperçu clair des économies en eau et en argent que vous pouvez réaliser sur le court et le long terme.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer link */}
      <div className="fixed bottom-2 left-2 text-xs text-gray-500">
        <a href="https://www.h2oasis.ma" target="_blank" rel="noopener noreferrer">https://www.h2oasis.ma</a>
      </div>
    </div>
  );
}
