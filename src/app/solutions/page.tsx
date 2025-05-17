"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Solutions() {
  const productsRef = useRef(null);
  const faqRef = useRef(null);

  const products = [
    {
      id: 1,
      title: "Économiseur d'eau pour robinet",
      image: "https://ext.same-assets.com/174946582/58013150.jpeg",
      description: "Ce dispositif s'installe directement à votre robinet et réduit votre consommation d'eau en mélangeant de l'air au flux tout en maintenant sa pression. Une innovation simple et efficace.",
      benefits: "Jusqu'à 60% d'économies d'eau sans besoin de plombier. Une installation immédiate, facile et sans outils.",
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
      benefits: "Jusqu'à 50% de réduction d'eau chaude économisée. Compatible avec toutes les installations.",
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
      benefits: "Optimiser l'utilisation des toilettes sans impacter l'efficacité de votre système, grâce à une technologie qui réduit le flux pour chaque utilisation.",
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
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-4">Découvrez Nos Solutions Économiques</h1>
          <p className="text-gray-600 max-w-4xl mx-auto text-sm">
            Nos dispositifs d'économie d'eau sont conçus pour maximiser votre efficacité tout en réduisant vos consommations d'eau.
            Trouvez la solution adaptée à vos besoins et résidence.
          </p>
        </motion.div>

        <div ref={productsRef} className="grid md:grid-cols-3 gap-6 mb-20">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="mb-4">
                  <ul className="space-y-1 text-xs text-gray-500 mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm">
                  Demander plus d'infos
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div ref={faqRef} className="mt-16 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">FAQ Produits</h2>

          <div className="space-y-4">
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
  );
}
