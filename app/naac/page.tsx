import InfoPage from '@/components/InfoPage';
import { GraduationCap } from 'lucide-react';

export default function NAACPage() {
  return (
    <InfoPage 
      title="NAAC Accreditation"
      subtitle="Our commitment to quality and excellence."
      iconName="award"
      image="https://images.unsplash.com/photo-1523281783721-334d3148f68c?auto=format&fit=crop&q=80&w=2070"
      content={[
        "Our institution is proud to be accredited by the National Assessment and Accreditation Council (NAAC) with a high grade.",
        "This accreditation is a testament to our commitment to maintaining high standards in education, research, and administration.",
        "We continuously strive to improve our processes and outcomes to ensure that our students receive the best possible education."
      ]}
    />
  );
}
