import InfoPage from '@/components/InfoPage';
import { Award } from 'lucide-react';

export default function VisionPage() {
  return (
    <InfoPage 
      title="Our Vision"
      subtitle="To be a global center of excellence in education and research."
      iconName="award"
      image="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2070"
      content={[
        "To achieve international recognition for our academic programs and research contributions.",
        "To produce graduates who are globally competitive, ethically sound, and socially committed.",
        "To continuously innovate our pedagogical approaches to meet the evolving needs of the 21st century."
      ]}
    />
  );
}
