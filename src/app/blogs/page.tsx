"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Bold, Italic, Link as LinkIcon, List, ListOrdered, FileUp } from "lucide-react";

export default function Blog() {
  const [showEditor, setShowEditor] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real application, you would send this data to your backend
    alert("Article ajouté avec succès!");
    setFormData({
      title: "",
      content: ""
    });
    setShowEditor(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-8">Articles récents</h1>

          {!showEditor ? (
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setShowEditor(true)}
            >
              Ajouter un article
            </Button>
          ) : (
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setShowEditor(false)}
            >
              Annuler
            </Button>
          )}
        </motion.div>

        {showEditor ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Ajouter un nouvel article</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Titre de l'article"
                  className="w-full bg-gray-800 border-gray-700 text-white px-4 py-3 rounded-md"
                  required
                />
              </div>

              <div className="bg-gray-800 border border-gray-700 rounded-md overflow-hidden">
                <div className="flex items-center gap-2 p-2 border-b border-gray-700">
                  <select className="bg-gray-700 text-white px-3 py-1 rounded">
                    <option>Normal</option>
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                    <option>Heading 3</option>
                  </select>

                  <button type="button" className="p-1.5 rounded hover:bg-gray-700">
                    <Bold size={18} />
                  </button>
                  <button type="button" className="p-1.5 rounded hover:bg-gray-700">
                    <Italic size={18} />
                  </button>
                  <button type="button" className="p-1.5 rounded hover:bg-gray-700">
                    <LinkIcon size={18} />
                  </button>
                  <button type="button" className="p-1.5 rounded hover:bg-gray-700">
                    <List size={18} />
                  </button>
                  <button type="button" className="p-1.5 rounded hover:bg-gray-700">
                    <ListOrdered size={18} />
                  </button>
                </div>

                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Contenu de l'article..."
                  className="w-full bg-gray-800 text-white p-4 min-h-[200px] border-0 focus:ring-0 focus:outline-none"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="relative">
                  <input
                    type="file"
                    id="file-upload"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="bg-gray-800 px-4 py-2 rounded-md flex items-center gap-2">
                    <FileUp size={18} />
                    <span>Choose File</span>
                  </div>
                  <span className="ml-3 text-gray-400">No file chosen</span>
                </div>

                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
                >
                  Ajouter l'article
                </Button>
              </div>
            </form>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <Image
              src="https://ext.same-assets.com/749974248/3784799825.png"
              alt="H2Oasis Logo"
              width={150}
              height={75}
              className="mb-8"
            />
            <div className="flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="w-4 h-4 bg-blue-500 rounded-full mr-2"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="w-4 h-4 bg-green-500 rounded-full mr-2"
              />
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.4,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="w-4 h-4 bg-blue-500 rounded-full"
              />
            </div>
            <p className="text-lg text-gray-300 font-semibold mt-4">Please wait, loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}
