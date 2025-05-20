import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md fixed w-full z-10"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">[Your Name]</h1>
        <div className="space-x-4">
          <Link href="#intro" className="text-gray-600 hover:text-gray-900">Home</Link>
          <Link href="#projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
        </div>
      </nav>
    </motion.header>
  );
}