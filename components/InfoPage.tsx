'use client';

import { motion } from 'framer-motion';
import { BookOpen, Award, Target, Landmark, Calendar, FileText, HelpCircle, Building2, Users } from 'lucide-react';
import Image from 'next/image';

const fadeInUp: any = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

interface InfoPageProps {
  title: string;
  subtitle: string;
  content: string[];
  iconName: 'book' | 'award' | 'target' | 'landmark' | 'calendar' | 'file' | 'help' | 'building' | 'users';
  image: string;
}

const icons = {
  book: BookOpen,
  award: Award,
  target: Target,
  landmark: Landmark,
  calendar: Calendar,
  file: FileText,
  help: HelpCircle,
  building: Building2,
  users: Users
};

export default function InfoPage({ title, subtitle, content, iconName, image }: InfoPageProps) {
  const Icon = icons[iconName];
  return (
    <div className="bg-[#F5F2ED] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp} className="space-y-8">
            <div>
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#8B5E3C] mb-4 block">About Us</span>
              <h1 className="text-5xl font-serif text-[#4A3728] mb-6">{title}</h1>
              <div className="w-20 h-1 bg-[#8B5E3C]" />
            </div>
            
            <p className="text-2xl text-[#6D4A2F] font-serif italic border-l-4 border-[#D4C3A3] pl-6 py-2">
              "{subtitle}"
            </p>
            
            <div className="text-[#6D4A2F] leading-relaxed space-y-6">
              {content.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-sm border border-[#D4C3A3]/20">
              <div className="w-16 h-16 rounded-full bg-[#4A3728] flex items-center justify-center text-white shrink-0">
                <Icon size={32} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-[#4A3728]">Core Excellence</h3>
                <p className="text-sm text-[#6D4A2F]/80">Committed to preserving legacy while embracing the future.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-[16px] border-white"
          >
            <Image src={image} alt={title} fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
