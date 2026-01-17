import InfoPage from '@/components/InfoPage';
import { Target } from 'lucide-react';

export default function MissionPage() {
  return (
    <InfoPage 
      title="Our Mission"
      subtitle="Empowering students through holistic education and ethical leadership."
      iconName="target"
      image="https://images.unsplash.com/photo-1523050335392-9bf5674293c3?auto=format&fit=crop&q=80&w=2070"
      content={[
        "To provide a transformative educational experience that fosters intellectual growth, creativity, and social responsibility.",
        "To cultivate an environment where students from diverse backgrounds can excel and contribute meaningfully to society.",
        "To integrate traditional values with modern scientific temperament, creating leaders who are both grounded and forward-looking."
      ]}
    />
  );
}
