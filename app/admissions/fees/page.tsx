import InfoPage from '@/components/InfoPage';
import { GraduationCap } from 'lucide-react';

export default function FeesPage() {
  return (
    <InfoPage 
      title="Fee Structure"
      subtitle="Transparent and affordable education."
      iconName="file"
      image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2070"
      content={[
        "We strive to keep our education accessible and affordable for all students. Our fee structure is competitive and transparent.",
        "Details of tuition fees, laboratory fees, and other charges are provided for each program. We also offer various payment plans to assist families.",
        "For any queries regarding the fee structure or payment process, please contact our accounts department."
      ]}
    />
  );
}
