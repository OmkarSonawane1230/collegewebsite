'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { FortWall } from './FortWall';

export function Footer() {
  return (
    <footer className="bg-[#F5F2ED] pt-0 pb-16 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full z-20">
        <FortWall />
      </div>
      <div className="max-w-7xl mx-auto pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo and About Section */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 bg-[#4A3728] rounded-full flex items-center justify-center text-white font-serif font-bold text-3xl shadow-2xl group-hover:rotate-[360deg] transition-transform duration-700">
                C
              </div>
              <div>
                <span className="text-2xl font-serif font-bold text-[#4A3728] block leading-none">College Name</span>
                <span className="text-[10px] text-[#8B5E3C] font-bold tracking-[0.3em] uppercase">Institution of Excellence</span>
              </div>
            </Link>
            <p className="text-[#6D4A2F] leading-relaxed text-sm opacity-90 border-l-2 border-[#8B5E3C]/30 pl-4 py-1">
              Cultivating minds and preserving heritage since 1920. Rooted in the historic Sinhagad region, we strive for academic brilliance and ethical leadership.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-[#D4C3A3] flex items-center justify-center text-[#4A3728] hover:bg-[#4A3728] hover:text-white transition-all hover:-translate-y-1">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-8 text-[#4A3728] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#8B5E3C]" />
              Quick Links
            </h4>
            <ul className="space-y-4 text-[#6D4A2F]">
              {[
                { name: 'About History', href: '/about/history' },
                { name: 'Admissions Info', href: '/admissions/apply' },
                { name: 'Academic Courses', href: '/academics/courses' },
                { name: 'NAAC Details', href: '/naac' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-[#8B5E3C] hover:translate-x-1 transition-all inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4C3A3] group-hover:bg-[#8B5E3C] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-xl mb-8 text-[#4A3728] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#8B5E3C]" />
              Connect
            </h4>
            <ul className="space-y-6 text-[#6D4A2F]">
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#8B5E3C] group-hover:bg-[#8B5E3C] group-hover:text-white transition-all shrink-0">
                  <MapPin size={20} />
                </div>
                <span className="text-sm pt-2">Sinhagad Region, Pune, Maharashtra 411041</span>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#8B5E3C] group-hover:bg-[#8B5E3C] group-hover:text-white transition-all shrink-0">
                  <Phone size={20} />
                </div>
                <span className="text-sm pt-2">+91 20 2435 6789</span>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#8B5E3C] group-hover:bg-[#8B5E3C] group-hover:text-white transition-all shrink-0">
                  <Mail size={20} />
                </div>
                <span className="text-sm pt-2">info@college.edu.in</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-xl mb-8 text-[#4A3728] flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#8B5E3C]" />
              Newsletter
            </h4>
            <p className="text-sm text-[#6D4A2F] mb-6 leading-relaxed">Subscribe to our quarterly journal for campus updates and research highlights.</p>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white border border-[#D4C3A3]/50 px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-[#8B5E3C]/20 focus:border-[#8B5E3C] text-[#4A3728] text-sm transition-all" 
                />
              </div>
              <button className="bg-[#4A3728] text-white px-6 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#8B5E3C] transition-all shadow-lg active:scale-95 text-xs">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D4C3A3]/30 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#6D4A2F]/60">
          <p>© 2026 College Name. All Rights Reserved. Crafted for Excellence.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-[#8B5E3C] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#8B5E3C] transition-colors">Terms of Use</Link>
            <Link href="#" className="hover:text-[#8B5E3C] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
