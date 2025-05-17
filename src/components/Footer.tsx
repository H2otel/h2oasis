"use client";

import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/solutions" className="hover:text-green-400 transition">
                Nos Solutions
              </Link>
            </li>
            <li>
              <Link href="/why-h2oasis" className="hover:text-green-400 transition">
                Pourquoi H2Oasis ?
              </Link>
            </li>
            <li>
              <Link href="/offers" className="hover:text-green-400 transition">
                Nos Offres
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-green-400 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-green-400 transition">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Informations de contact</h3>
          <p>Adresse : H2Oasis, Marrakech, Maroc.</p>
          <p>Téléphone : +212 662 250 767</p>
          <p>
            Email :{" "}
            <a href="mailto:z.baicha@h2oasis.ma" className="hover:text-green-400 transition">
              z.baicha@h2oasis.ma
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">Inscrivez-vous pour recevoir nos dernières nouvelles.</p>
          <form className="flex flex-col space-y-4">
            <Input
              type="email"
              placeholder="Votre email"
              className="bg-gray-800 border-gray-700 text-white"
            />
            <Button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
              Inscrivez-vous
            </Button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500">
        <p>© 2024 H2Oasis. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
