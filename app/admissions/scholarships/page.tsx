import InfoPage from '@/components/InfoPage';
import { Award } from 'lucide-react';

export default function ScholarshipsPage() {
  return (
    <InfoPage 
      title="Scholarships"
      subtitle="Supporting merit and need-based talent."
      iconName="award"
      image="https://images.unsplash.com/photo-1523281783721-334d3148f68c?auto=format&fit=crop&q=80&w=2070"
      content={[
        "We offer a range of scholarships to support students who demonstrate academic excellence or have financial need.",
        "Our goal is to ensure that talented individuals have the opportunity to pursue their education regardless of their financial background.",
        "Information on eligibility criteria, application process, and deadlines for various scholarships is available on this page."
      ]}
    />
  );
}
