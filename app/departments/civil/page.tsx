import InfoPage from '@/components/InfoPage';
import { Building2 } from 'lucide-react';

export default function CivilDeptPage() {
  return (
    <InfoPage 
      title="Civil Department"
      subtitle="Building the foundation of society."
      iconName="building"
      image="https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=2070"
      content={[
        "The Department of Civil Engineering is dedicated to the design, construction, and maintenance of the physical and naturally built environment.",
        "From bridges and roads to buildings and water systems, our curriculum covers the essential aspects of infrastructure development.",
        "Our graduates are equipped with the knowledge and skills to lead sustainable and resilient engineering projects."
      ]}
    />
  );
}
