'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, BookOpen, GraduationCap, Building2, Users, FileText, Activity, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { 
    name: 'About Us', 
    href: '/about',
    icon: <Users size={20} />,
    desc: 'Learn about our heritage and values',
    dropdown: [
      { name: 'History', href: '/about/history' },
      { name: 'Mission', href: '/about/mission' },
      { name: 'Vision', href: '/about/vision' },
      { name: 'Principal Desk', href: '/about/principal-desk' }
    ] 
  },
  { 
    name: 'Admissions', 
    href: '/admissions',
    icon: <FileText size={20} />,
    desc: 'Start your journey with us today',
    dropdown: [
      { name: 'How to Apply', href: '/admissions/apply' },
      { name: 'Fee Structure', href: '/admissions/fees' },
      { name: 'Scholarships', href: '/admissions/scholarships' }
    ] 
  },
  { 
    name: 'Department', 
    href: '/departments',
    icon: <Building2 size={20} />,
    desc: 'Specialized fields of study',
    dropdown: [
      { name: 'Computer', href: '/departments/computer' },
      { name: 'Electrical', href: '/departments/electrical' },
      { name: 'Mechanical', href: '/departments/mechanical' },
      { name: 'Civil', href: '/departments/civil' }
    ] 
  },
  { 
    name: 'Academics', 
    href: '/academics',
    icon: <BookOpen size={20} />,
    desc: 'Curriculum and schedule',
    dropdown: [
      { name: 'Courses', href: '/academics/courses' },
      { name: 'Syllabus', href: '/academics/syllabus' },
      { name: 'Calendar', href: '/academics/calendar' }
    ] 
  },
  { name: 'NAAC', href: '/naac', icon: <GraduationCap size={20} />, desc: 'Accreditation details' },
  { name: 'Contact', href: '/contact', icon: <HelpCircle size={20} />, desc: 'Get in touch with us' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#F5F2ED]/95 backdrop-blur-md border-b border-[#D4C3A3]/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex-shrink-0 flex items-center group gap-3">
            <div className="w-10 h-10 bg-[#4A3728] rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-md border-2 border-[#D4C3A3]/50 group-hover:scale-105 transition-transform">
              C
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-serif font-bold text-[#4A3728] tracking-tight group-hover:text-[#8B5E3C] transition-colors uppercase">College Name</span>
              <p className="text-[10px] text-[#8B5E3C] font-bold tracking-[0.2em] -mt-1 uppercase">Institution of Excellence</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className="flex items-center space-x-1 text-[#4A3728] hover:text-[#8B5E3C] transition-colors font-medium py-2"
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                </Link>
                {item.dropdown && (
                  <div className="absolute left-0 mt-1 w-56 bg-white border border-[#D4C3A3]/30 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 rounded-lg overflow-hidden">
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-[#4A3728] hover:bg-[#F5F2ED] hover:text-[#8B5E3C] transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/admissions/apply" className="px-5 py-2 border-2 border-[#4A3728] text-[#4A3728] hover:bg-[#4A3728] hover:text-white transition-all rounded-md font-bold text-sm uppercase tracking-wider shadow-sm active:scale-95">
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#4A3728] p-2 hover:bg-[#D4C3A3]/20 rounded-full transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Grid Structure like Cal.com */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#4A3728]/20 backdrop-blur-sm lg:hidden z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed inset-x-4 top-24 bottom-auto bg-white rounded-2xl shadow-2xl lg:hidden z-[101] overflow-hidden border border-[#D4C3A3]/30"
            >
              <div className="p-4 sm:p-6 max-h-[75vh] overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {navItems.map((item) => (
                    <div key={item.name} className="group cursor-pointer">
                      <div className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-[#D4C3A3]/30 hover:bg-[#F5F2ED] transition-all">
                        <div className="w-10 h-10 rounded-lg bg-[#F5F2ED] group-hover:bg-white flex items-center justify-center text-[#4A3728] shadow-sm transition-colors border border-[#D4C3A3]/20">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <Link 
                            href={item.href}
                            onClick={() => !item.dropdown && setIsOpen(false)}
                            className="font-serif font-bold text-[#4A3728] group-hover:text-[#8B5E3C]"
                          >
                            {item.name}
                          </Link>
                          <p className="text-xs text-[#6D4A2F]/70 mt-0.5 line-clamp-1">{item.desc}</p>
                          {item.dropdown && (
                            <div className="mt-3 flex flex-wrap gap-2">
                              {item.dropdown.slice(0, 3).map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="text-[10px] px-2 py-1 bg-white border border-[#D4C3A3]/20 rounded text-[#6D4A2F] hover:bg-[#8B5E3C] hover:text-white transition-all font-medium"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-[#D4C3A3]/20 flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/admissions/apply"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-4 bg-[#8B5E3C] text-white rounded-xl font-bold text-center shadow-lg active:scale-95 transition-transform tracking-wider uppercase text-sm"
                  >
                    APPLY NOW
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
