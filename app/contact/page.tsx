import InfoPage from '@/components/InfoPage';
import { HelpCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-[#F5F2ED]">
      <InfoPage 
        title="Get in Touch"
        subtitle="We are here to help you. Reach out to us for any queries or support."
        iconName="help"
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070"
        content={[
          "Our campus is located in the serene and historic Sinhagad region, providing an ideal environment for academic pursuits. Whether you have questions about admissions, academic programs, or campus life, our team is ready to assist you.",
          "We value open communication and strive to respond to all inquiries promptly. You can visit us during office hours or connect with us via phone or email."
        ]}
      />
      
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white/50 border-t border-b border-[#D4C3A3]/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-[#D4C3A3]/10">
            <div className="w-16 h-16 rounded-full bg-[#4A3728] flex items-center justify-center text-white mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#4A3728] mb-4">Visit Us</h3>
            <p className="text-[#6D4A2F]">Sinhagad Region, Pune,<br />Maharashtra 411041, India</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-[#D4C3A3]/10">
            <div className="w-16 h-16 rounded-full bg-[#8B5E3C] flex items-center justify-center text-white mb-6">
              <Phone size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#4A3728] mb-4">Call Us</h3>
            <p className="text-[#6D4A2F]">+91 20 2435 6789<br />+91 20 2435 9999</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-[#D4C3A3]/10">
            <div className="w-16 h-16 rounded-full bg-[#4A3728] flex items-center justify-center text-white mb-6">
              <Mail size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#4A3728] mb-4">Email Us</h3>
            <p className="text-[#6D4A2F]">info@college.edu.in<br />admissions@college.edu.in</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-[#D4C3A3]/20">
            <h2 className="text-3xl font-serif text-[#4A3728] mb-8 text-center">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#4A3728] uppercase tracking-wider">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-[#F5F2ED] border border-[#D4C3A3]/30 rounded-xl outline-none focus:ring-2 focus:ring-[#8B5E3C]/20" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#4A3728] uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 bg-[#F5F2ED] border border-[#D4C3A3]/30 rounded-xl outline-none focus:ring-2 focus:ring-[#8B5E3C]/20" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#4A3728] uppercase tracking-wider">Subject</label>
                <input type="text" className="w-full px-5 py-4 bg-[#F5F2ED] border border-[#D4C3A3]/30 rounded-xl outline-none focus:ring-2 focus:ring-[#8B5E3C]/20" placeholder="Inquiry about..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#4A3728] uppercase tracking-wider">Message</label>
                <textarea rows={5} className="w-full px-5 py-4 bg-[#F5F2ED] border border-[#D4C3A3]/30 rounded-xl outline-none focus:ring-2 focus:ring-[#8B5E3C]/20" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full py-5 bg-[#8B5E3C] text-white rounded-xl font-bold uppercase tracking-[0.2em] shadow-lg hover:bg-[#4A3728] transition-all active:scale-[0.98]">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
