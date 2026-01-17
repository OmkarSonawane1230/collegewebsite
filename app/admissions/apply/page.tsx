import InfoPage from '@/components/InfoPage';
import { FileText, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

export default function ApplyPage() {
  return (
    <div className="bg-[#F5F2ED]">
      <InfoPage 
        title="Admission Process"
        subtitle="Join our community of scholars and leaders. Follow our guided application process."
        iconName="file"
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070"
        content={[
          "Our admission process is designed to identify individuals who possess not only academic merit but also the character and passion to contribute to our vibrant campus life.",
          "We follow a holistic review process, considering your academic records, entrance exam scores, extracurricular achievements, and personal statements."
        ]}
      />
      
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-[#4A3728] mb-16 text-center">Application Steps</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Online Registration", desc: "Create your account on our admissions portal." },
              { step: "02", title: "Form Submission", desc: "Fill in your details and upload required documents." },
              { step: "03", title: "Entrance Exam", desc: "Appear for the mandatory institutional entrance test." },
              { step: "04", title: "Final Interview", desc: "A personal interaction with our faculty panel." }
            ].map((s, i) => (
              <div key={i} className="relative p-8 bg-[#F5F2ED] rounded-3xl border border-[#D4C3A3]/20 group hover:bg-[#4A3728] hover:text-white transition-all">
                <span className="text-5xl font-serif font-bold opacity-10 absolute top-4 right-6 group-hover:opacity-20">{s.step}</span>
                <h3 className="text-xl font-bold mb-4 mt-8">{s.title}</h3>
                <p className="text-sm opacity-80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto bg-[#4A3728] rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B5E3C] opacity-20 rounded-full -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-4xl font-serif mb-6">Ready to Apply?</h2>
            <p className="text-[#D4C3A3] text-lg mb-10 max-w-2xl leading-relaxed">
              Ensure you have your academic transcripts, identity proofs, and recent photographs ready before starting the application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-5 bg-[#8B5E3C] text-white rounded-xl font-bold uppercase tracking-widest hover:bg-white hover:text-[#4A3728] transition-all shadow-xl">
                Start Application
              </button>
              <button className="px-10 py-5 bg-white/10 border border-white/20 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-white/20 transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
