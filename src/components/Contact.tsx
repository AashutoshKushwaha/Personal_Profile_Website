import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-700 mb-8"
        >
          Feel free to reach out via email or follow me on social media.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="mailto:your.email@example.com"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mb-4"
          >
            Email Me
          </a>
          <div className="flex justify-center space-x-4">
            <a href="https://linkedin.com/in/yourprofile" className="text-gray-600 hover:text-blue-600">LinkedIn</a>
            <a href="https://github.com/yourusername" className="text-gray-600 hover:text-blue-600">GitHub</a>
            <a href="https://x.com/yourusername" className="text-gray-600 hover:text-blue-600">X</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}