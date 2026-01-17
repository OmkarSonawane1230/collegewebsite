import InfoPage from '@/components/InfoPage';
import { Building2 } from 'lucide-react';

export default function ComputerDeptPage() {
  return (
    <InfoPage 
      title="Computer Department"
      subtitle="Innovating for the digital age."
      iconName="building"
      image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070"
      content={[
        "The Department of Computer Science and Engineering is dedicated to providing students with a strong foundation in both theoretical and practical aspects of computing.",
        "Our state-of-the-art labs and expert faculty ensure that students are well-prepared for the challenges of the rapidly evolving tech industry.",
        "From software engineering to artificial intelligence, our curriculum covers a wide range of topics that are relevant to the modern world."
      ]}
    />
  );
}
