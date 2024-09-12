"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">DISEÑO DE ESTRUCTURAL</h1>
      <h2 className="text-2xl font-semibold mb-6">DE TUBERIA ENTERRADA</h2>
      <div className="flex justify-between items-center mb-6 ">
        <Link href={"/nuevoProyecto"}>
        <motion.button
          whileHover={{ scale: 1.10 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
        >
          Nuevo Proyecto
        </motion.button>
        </Link>
        
      </div>
      
    </div>
  );
};

export default page;
