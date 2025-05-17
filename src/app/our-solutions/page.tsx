"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function OurSolutions() {
  const products = [
    {
      id: 1,
      title: "Économiseur d'eau pour robinet",
      image: "https://ext.same-assets.com/174946582/58013150.jpeg",
      description: "Ce dispositif s'installe directement à votre robinet et réduit jusqu'à 60% votre consommation d'eau en mélangeant de l'air au flux tout en maintenant sa pression. Une innovation simple et efficace.",
      features: [
        "Jusqu'à 60% d'économies d'eau",
        "Installation facile sans outils spéciaux",
        "Durable et résistant à l'entartrage",
        "Garantie 2 ans"
      ]
    },
    {
      id: 2,
      title: "Économiseur d'eau pour douche",
      image: "https://ext.same-assets.com/1169117998/1183703983.jpeg",
      description: "Optimisez l'utilisation de l'eau de la douche avec ce dispositif qui réduit votre consommation tout en gardant automatiquement le débit en fonction de la pression.",
      features: [
        "Jusqu'à 50% de réduction d'eau chaude économisée",
        "Compatible avec toutes les installations",
        "Garantie 2 ans"
      ]
    },
    {
      id: 3,
      title: "Économiseur d'eau pour toilette",
      image: "https://ext.same-assets.com/476458201/1149014131.jpeg",
      description: "Optimisez l'utilisation des toilettes sans impacter l'efficacité de votre système, grâce à une technologie qui réduit le flux pour chaque utilisation.",
      features: [
        "Jusqu'à 40% de réduction d'eau économisée",
        "Facile à installer sans plombier",
        "Compatible avec toutes les installations",
        "Garantie 2 ans"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Découvrez Nos Solutions Économiques</h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Nos dispositifs d'économie d'eau sont conçus pour maximiser votre efficacité tout en réduisant vos consommations d'eau. Choisissez la solution adaptée à vos besoins et résidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Demander plus d'infos
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">FAQ Produits</h2>

            <div className="space-y-6 mt-8">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold mb-2 flex items-center justify-between cursor-pointer">
                  <span>Est-ce que je peux installer ces économiseurs moi-même ?</span>
                  <span className="text-gray-400">+</span>
                </h3>
                <p className="text-gray-600 hidden">
                  Oui, tous nos produits sont conçus pour être facilement installés sans outils spéciaux ni compétences techniques. Chaque produit est livré avec un guide d'installation simple.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold mb-2 flex items-center justify-between cursor-pointer">
                  <span>Sont-ils compatibles avec tous les systèmes ?</span>
                  <span className="text-gray-400">+</span>
                </h3>
                <p className="text-gray-600 hidden">
                  Nos économiseurs d'eau sont compatibles avec la plupart des installations standard. Si vous avez des questions sur la compatibilité avec votre système spécifique, n'hésitez pas à nous contacter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
