'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PlaceholderPage({ title = "Page Under Construction" }) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-serif text-[#4A3728] mb-6">{title}</h1>
        <p className="text-xl text-[#6D4A2F] max-w-lg mx-auto mb-12">
          We are currently working on this section. Please check back soon for updates.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B5E3C] text-white rounded-md hover:bg-[#6D4A2F] transition-all"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
