import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section id="intro" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto px-4"
      >
        <Image
          src="/avatar.png"
          alt="Your Avatar"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6"
        />
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Hi, I&apos;m [Your Name]</h2>
        <p className="text-lg text-gray-700 mb-6">
          I&apos;m a [Your Profession, e.g., Web Developer] passionate about creating innovative solutions. Welcome to my portfolio!
        </p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
}