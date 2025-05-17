"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const lineChartData = {
    labels: ["2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Hotels",
        data: [280, 290, 300, 320, 340],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.1,
      },
      {
        label: "Factories",
        data: [400, 395, 390, 410, 420],
        borderColor: "#22C55E",
        backgroundColor: "rgba(34, 197, 94, 0.5)",
        tension: 0.1,
      },
      {
        label: "Agriculture",
        data: [350, 355, 350, 345, 360],
        borderColor: "#F59E0B",
        backgroundColor: "rgba(245, 158, 11, 0.5)",
        tension: 0.1,
      },
    ],
  };

  const barChartData = {
    labels: ["Agriculture", "Industry", "Domestic"],
    datasets: [
      {
        label: "Water Consumption Distribution",
        data: [70, 20, 10],
        backgroundColor: ["#22C55E", "#3B82F6", "#94A3B8"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-black py-32">
        <div className="absolute inset-0 opacity-60">
          <Image
            src="https://ext.same-assets.com/476458201/1149014131.jpeg"
            alt="Water background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          {/* Live badge */}
          <div className="inline-flex items-center bg-red-600 text-white text-xs px-3 py-1 rounded-full mb-8">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            <span>1 Item</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Image
              src="https://ext.same-assets.com/749974248/3784799825.png"
              alt="H2Oasis Logo"
              width={220}
              height={110}
              className="mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Solutions locales,<br />impact global sur l'eau
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-md shadow-lg hover:shadow-xl transition">
              Estimez vos économies en eau
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">
                Chez H2Oasis,<br />
                <span className="text-blue-400">des solutions</span> pour économiser l'eau
              </h2>
              <p className="text-gray-300 mb-6">
                Nous développons des solutions innovantes pour économiser jusqu'à 60% de votre consommation d'eau,
                sans compromis sur le confort. Nos dispositifs, simples à installer, sont conçus pour répondre
                aux besoins des établissements à forte consommation d'eau.
              </p>
              <p className="text-gray-300">
                Développé localement au Maroc, nos équipements contribuent à la préservation des ressources tout en
                réduisant les coûts liés à l'eau et à l'énergie.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="https://ext.same-assets.com/174946582/58013150.jpeg"
                alt="Water Solution"
                width={550}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Statistiques sur l'impact<br />de la conservation de l'eau
              </h2>
              <p className="text-gray-300">
                Explorez comment les solutions H2Oasis ont permis d'économiser<br />des millions de litres d'eau dans différents secteurs.
              </p>
            </div>
            <div className="mt-8 md:mt-0 space-y-2">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-1">Liens rapides</h3>
                <ul className="space-y-1">
                  <li><Link href="/solutions" className="text-blue-400 hover:underline">Nos Solutions</Link></li>
                  <li><Link href="/why-h2oasis" className="text-blue-400 hover:underline">Pourquoi H2Oasis ?</Link></li>
                  <li><Link href="/offers" className="text-blue-400 hover:underline">Nos Offres</Link></li>
                </ul>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-1">Informations de contact</h3>
                <p className="text-sm text-gray-300">Adresse : H2Oasis, Marrakech, Maroc</p>
                <p className="text-sm text-gray-300">Téléphone : +212 662 250 767</p>
                <p className="text-sm text-gray-300">
                  Email : <a href="mailto:z.baicha@h2oasis.ma" className="text-blue-400 hover:underline">z.baicha@h2oasis.ma</a>
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {isClient && (
              <>
                <Card className="bg-gray-800 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">Économies d'eau par secteur (2018-2022)</h3>
                    <div className="h-64">
                      <Line data={lineChartData} options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        color: '#fff',
                        scales: {
                          x: {
                            grid: {
                              color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                              color: 'rgba(255, 255, 255, 0.7)'
                            }
                          },
                          y: {
                            grid: {
                              color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                              color: 'rgba(255, 255, 255, 0.7)'
                            }
                          }
                        }
                      }} />
                    </div>
                    <p className="mt-4 text-sm text-gray-400">
                      Affiche les économies d'eau réalisées par secteur chaque année.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-white">Répartition de la consommation d'eau par secteur</h3>
                    <div className="h-64">
                      <Bar data={barChartData} options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                          x: {
                            grid: {
                              color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                              color: 'rgba(255, 255, 255, 0.7)'
                            }
                          },
                          y: {
                            grid: {
                              color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                              color: 'rgba(255, 255, 255, 0.7)'
                            }
                          }
                        }
                      }} />
                    </div>
                    <p className="mt-4 text-sm text-gray-400">
                      La majorité de la consommation d'eau mondiale est utilisée par l'agriculture.
                    </p>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Témoignages
          </h2>
          <p className="text-gray-300 text-center mb-10">
            Découvrez comment nos clients ont déjà profité des solutions H2Oasis pour réduire leur consommation d'eau et d'énergie,
            tout en préservant le confort et la qualité de service de leurs établissements.
          </p>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-gray-700 shadow-lg border-0">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Image
                    src="https://ext.same-assets.com/1531439512/1534660505.png"
                    alt="Testimonial"
                    width={80}
                    height={80}
                    className="rounded-full mx-auto"
                  />
                </div>
                <p className="text-gray-200 mb-6 italic">
                  "Grâce aux dispositifs H2Oasis, nous avons réduit notre consommation d'eau de 50% dans nos chambres et économisé
                  15% sur nos coûts énergétiques liés à l'eau chaude, sans impact sur le confort de nos clients."
                </p>
                <p className="font-semibold text-white">— Hôtel XYZ, Casablanca</p>
              </CardContent>
            </Card>

            <div className="mt-10 text-center">
              <p className="text-gray-300 mb-6">
                Rejoignez nos clients et découvrez comment nos solutions peuvent vous aider à économiser l'eau et l'énergie dans votre établissement.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Contactez-nous pour en savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Nos Partenaires
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex items-center justify-center bg-gray-800 p-6 rounded-lg shadow">
              <p className="font-semibold text-white">CLUSTER EnR</p>
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-6 rounded-lg shadow">
              <p className="font-semibold text-white">Green Watech</p>
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-6 rounded-lg shadow">
              <p className="font-semibold text-white">Eco Dome</p>
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-6 rounded-lg shadow">
              <p className="font-semibold text-white">Bidaya</p>
            </div>
            <div className="flex items-center justify-center bg-gray-800 p-6 rounded-lg shadow">
              <p className="font-semibold text-white">Orange Corners</p>
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
