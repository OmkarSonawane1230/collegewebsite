import InfoPage from '@/components/InfoPage';
import { Landmark } from 'lucide-react';

export default function HistoryPage() {
  return (
    <InfoPage 
      title="Our Heritage"
      subtitle="A century of academic excellence and cultural preservation."
      iconName="landmark"
      image="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2070"
      content={[
        "Founded in 1920, our institution began as a small academy dedicated to providing quality education in the heart of the Sinhagad region. Over the decades, it has grown into a prestigious college known for its academic rigor and cultural significance.",
        "Our campus stands on historic ground, reflecting the resilience and spirit of the leaders who shaped this region. We take pride in our architecture, which blends traditional motifs with modern functionality.",
        "Today, we continue to honor our roots while preparing students for the challenges of a globalized world, ensuring that the legacy of excellence remains vibrant."
      ]}
    />
  );
}
