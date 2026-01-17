import InfoPage from '@/components/InfoPage';
import { Building2 } from 'lucide-react';

export default function ElectricalDeptPage() {
  return (
    <InfoPage 
      title="Electrical Department"
      subtitle="Powering the future."
      iconName="building"
      image="https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=2070"
      content={[
        "The Department of Electrical Engineering focuses on the study and application of electricity, electronics, and electromagnetism.",
        "Our curriculum prepares students for careers in power systems, control systems, and telecommunications.",
        "With advanced laboratories and experienced faculty, we provide a hands-on learning experience that is second to none."
      ]}
    />
  );
}
