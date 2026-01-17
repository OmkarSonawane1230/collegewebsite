import InfoPage from '@/components/InfoPage';
import { Building2 } from 'lucide-react';

export default function MechanicalDeptPage() {
  return (
    <InfoPage 
      title="Mechanical Department"
      subtitle="Engineering motion and energy."
      iconName="building"
      image="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=2070"
      content={[
        "The Department of Mechanical Engineering is one of the oldest and broadest engineering disciplines, covering the design and manufacturing of machines and tools.",
        "Our students gain expertise in thermodynamics, mechanics, and materials science, preparing them for a wide range of industries.",
        "We emphasize practical training and project-based learning to develop innovative problem-solving skills."
      ]}
    />
  );
}
