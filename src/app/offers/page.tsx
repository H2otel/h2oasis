"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Offers() {
  const pricingPlans = [
    {
      name: "Évaluation",
      price: "Gratuit",
      description: "Analyse initiale de votre consommation d'eau",
      features: [
        "Visite de votre établissement",
        "Analyse de vos factures d'eau",
        "Identification des postes de forte consommation",
        "Rapport des économies potentielles"
      ],
      featured: false,
      cta: "Demander une évaluation",
      ctaClass: "bg-transparent border border-white text-white hover:bg-gray-800"
    },
    {
      name: "Standard",
      price: "À partir de 5 000 MAD",
      description: "Solution complète pour les petits établissements",
      features: [
        "Étude technique détaillée",
        "Installation d'équipements économes",
        "Formation du personnel",
        "Suivi pendant 6 mois",
        "Support technique par téléphone"
      ],
      featured: true,
      cta: "Obtenir un devis",
      ctaClass: "bg-blue-600 text-white hover:bg-blue-700"
    },
    {
      name: "Premium",
      price: "À partir de 15 000 MAD",
      description: "Pour les installations complexes et grandes structures",
      features: [
        "Tout ce qui est inclus dans l'offre Standard",
        "Système de monitoring en temps réel",
        "Analyse et rapports mensuels",
        "Maintenance préventive pendant 1 an",
        "Support technique 24/7",
        "Plan d'optimisation continue"
      ],
      featured: false,
      cta: "Contacter un conseiller",
      ctaClass: "bg-transparent border border-white text-white hover:bg-gray-800"
    }
  ];

  const services = [
    {
      title: "Audit et conseil",
      description: "Analyse complète de votre consommation d'eau et recommandations d'optimisation.",
      included: [
        "Analyse des flux et des postes de consommation",
        "Identification des fuites et inefficacités",
        "Rapport détaillé avec recommandations",
        "Chiffrage des économies potentielles"
      ]
    },
    {
      title: "Installation et maintenance",
      description: "Mise en place des solutions et suivi de leur performance.",
      included: [
        "Installation par des techniciens certifiés",
        "Configurations optimisées pour votre établissement",
        "Maintenance préventive et corrective",
        "Garantie sur tous nos produits"
      ]
    },
    {
      title: "Formation et sensibilisation",
      description: "Programmes pour impliquer vos équipes dans la démarche d'économie d'eau.",
      included: [
        "Ateliers de sensibilisation aux enjeux de l'eau",
        "Formation technique pour la maintenance de base",
        "Outils de communication interne",
        "Suivi des bonnes pratiques"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Nos Offres</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Découvrez nos solutions adaptées à tous types d'établissements. Que vous soyez un hôtel,
            une industrie ou une institution, nous avons l'offre qui vous permettra de réaliser des
            économies substantielles sur votre consommation d'eau.
          </p>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Plans tarifaires</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className={`h-full bg-gray-800 border-0 overflow-hidden ${
                  plan.featured ? 'relative' : ''
                }`}>
                  {plan.featured && (
                    <div className="bg-green-500 text-white text-center py-1 text-sm font-medium absolute top-0 left-0 right-0">
                      Recommandé
                    </div>
                  )}
                  <CardContent className={`p-6 ${plan.featured ? 'pt-8' : 'pt-6'}`}>
                    <h3 className="text-xl font-bold mb-1 text-white">{plan.name}</h3>
                    <p className="text-2xl font-bold mb-2 text-gray-200">
                      {plan.price}
                    </p>
                    <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="text-green-500 mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${plan.ctaClass}`}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Nos Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
              >
                <Card className="h-full flex flex-col bg-gray-800 border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-blue-400">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>

                    <div>
                      <h4 className="font-medium text-gray-200 mb-3 text-sm">Ce service inclut :</h4>
                      <ul className="space-y-2">
                        {service.included.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-500 mr-2 text-sm">✓</span>
                            <span className="text-gray-300 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gray-800 rounded-lg p-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Vous ne trouvez pas ce que vous cherchez ?</h2>
            <p className="text-gray-300 mb-8">
              Nous proposons également des solutions sur mesure adaptées à vos besoins spécifiques et à votre budget.
              Contactez notre équipe pour discuter de votre projet et obtenir une offre personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Contacter un expert
              </Button>
              <Button variant="outline" className="border border-white text-white hover:bg-gray-700">
                Demander un devis gratuit
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sidebar navigation from the screenshot */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 rounded-l-lg shadow-lg overflow-hidden">
        <div className="p-4 bg-gray-800">
          <h3 className="text-sm font-semibold text-gray-200 mb-2">Liens rapides</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="/solutions" className="text-gray-300 hover:text-white">Nos Solutions</a>
            </li>
            <li>
              <a href="/why-h2oasis" className="text-gray-300 hover:text-white">Pourquoi H2Oasis ?</a>
            </li>
            <li>
              <a href="/offers" className="text-gray-300 hover:text-white">Nos Offres</a>
            </li>
            <li>
              <a href="/blogs" className="text-gray-300 hover:text-white">Blog</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        <div className="p-4 bg-gray-900">
          <h3 className="text-sm font-semibold text-gray-200 mb-2">Informations de contact</h3>
          <address className="text-xs text-gray-300 not-italic">
            <p>Adresse : H2Oasis, Marrakech, Maroc</p>
            <p>Téléphone : +212 662 250 767</p>
            <p>Email : <a href="mailto:z.baicha@h2oasis.ma" className="hover:text-white">z.baicha@h2oasis.ma</a></p>
          </address>
        </div>
      </div>
    </div>
  );
}
