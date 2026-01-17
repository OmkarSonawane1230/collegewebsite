'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, GraduationCap, Building2, Users, MapPin, Phone, Mail, Activity } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FortWall } from '@/components/FortWall';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[#F5F2ED]">
      {/* Hero Section - Image Focused */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <Image 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2070" 
          alt="College Campus"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Vintage Overlay Textures */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#4A3728]/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 vintage-overlay opacity-30 pointer-events-none" />
        
        {/* Minimal Hero Content */}
        <div className="absolute bottom-20 left-0 w-full px-4 sm:px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white"
            >
              <div className="w-12 h-1 bg-[#8B5E3C] mb-6" />
              <h2 className="text-4xl md:text-6xl font-serif leading-tight max-w-2xl text-shadow-lg">
                Excellence Through Legacy & Innovation
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Link href="/admissions/apply" className="inline-flex items-center gap-3 px-10 py-5 bg-[#8B5E3C] text-white rounded-md font-serif text-xl hover:bg-white hover:text-[#4A3728] transition-all duration-300 shadow-2xl group border border-[#8B5E3C]/30 backdrop-blur-sm">
                Join Our Family <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 text-white">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-10 bg-white" 
          />
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        {/* Subtle Stone Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" 
             style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/black-paper.png")` }} />
             
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-[12px] border-white transform -rotate-2"
             >
                <Image 
                  src="https://images.unsplash.com/photo-1523050335392-9bf5674293c3?auto=format&fit=crop&q=80&w=2070" 
                  alt="Campus Library"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="space-y-10"
             >
                <div>
                  <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#8B5E3C] mb-4 block">About the Campus</span>
                  <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#4A3728]">Rooted in the Soil of History</h2>
                  <p className="text-xl text-[#6D4A2F] leading-relaxed italic border-l-4 border-[#D4C3A3] pl-6 py-2">
                    "Located in the historic Sinhagad region, our campus stands on land known for resilience and leadership. While our focus is on modern education, our surroundings remind us of values that endure."
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-8">
                  <div className="flex gap-6 p-6 bg-white/50 rounded-xl border border-[#D4C3A3]/20 hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 rounded-full bg-[#4A3728] flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                      <BookOpen size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold mb-2 text-[#4A3728]">Modern Infrastructure</h3>
                      <p className="text-[#6D4A2F]/80 text-sm">State-of-the-art labs and smart classrooms designed for 21st-century learning.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 p-6 bg-white/50 rounded-xl border border-[#D4C3A3]/20 hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 rounded-full bg-[#8B5E3C] flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                      <Users size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold mb-2 text-[#4A3728]">Vibrant Community</h3>
                      <p className="text-[#6D4A2F]/80 text-sm">A diverse student body and expert faculty fostering a culture of collaboration.</p>
                    </div>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section with Card Design */}
      <section className="py-32 px-4 sm:px-6 lg:px-12 bg-[#4A3728]/5 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
             <h2 className="text-3xl font-serif uppercase tracking-[0.4em] text-[#8B5E3C] mb-4">Academic Programs</h2>
             <div className="w-16 h-1 bg-[#4A3728] mx-auto opacity-20" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'Engineering', icon: <Building2 size={32} />, desc: 'Building solutions grounded in strong fundamentals and technological foresight.' },
              { title: 'Management', icon: <Activity size={32} />, desc: 'Leadership shaped by perspective, ethics, and strategic discipline.' },
              { title: 'Humanities', icon: <GraduationCap size={32} />, desc: 'Exploring the depth of human knowledge to elevate global society.' },
            ].map((program, idx) => (
              <motion.div 
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
                className="bg-white p-12 rounded-2xl shadow-sm border border-[#D4C3A3]/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#F5F2ED] rounded-bl-full -mr-12 -mt-12 transition-all group-hover:scale-110" />
                <div className="text-[#8B5E3C] mb-8 relative z-10">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-[#4A3728] relative z-10">{program.title}</h3>
                <p className="text-[#6D4A2F] leading-relaxed relative z-10">{program.desc}</p>
                <div className="mt-8 relative z-10">
                  <span className="text-sm font-bold uppercase tracking-widest text-[#8B5E3C] group-hover:pl-2 transition-all inline-flex items-center gap-2">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life with Stone Borders */}
      <section className="py-24 px-4 sm:px-6 lg:px-12 bg-[#4A3728] text-white overflow-hidden relative">
        {/* Brick Background Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/brick-wall.png")` }} />
             
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl font-serif mb-6">Life on the Hill</h2>
            <p className="text-[#D4C3A3] text-lg max-w-2xl mx-auto tracking-wide">Inspired by the legacy of the Sinhagad region, our students write their own history every day.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070',
              'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2070',
              'https://images.unsplash.com/photo-1498243639391-a3109923282a?auto=format&fit=crop&q=80&w=2070'
            ].map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
                className="relative h-[450px] overflow-hidden rounded-xl group border-4 border-[#8B5E3C]/20 shadow-2xl"
              >
                <Image 
                  src={img}
                  alt={`Campus life ${idx + 1}`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                   <h4 className="text-2xl font-serif font-bold mb-2">Student Life {idx + 1}</h4>
                   <button className="text-sm font-bold uppercase tracking-[0.2em] text-[#8B5E3C] hover:text-white transition-colors">
                     Explore Story
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
