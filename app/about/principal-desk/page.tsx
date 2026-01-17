import InfoPage from '@/components/InfoPage';
import { Users } from 'lucide-react';

export default function PrincipalDeskPage() {
  return (
    <InfoPage 
      title="Principal's Desk"
      subtitle="Welcome to a community of learners and leaders."
      iconName="users"
      image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=2070"
      content={[
        "It is my great pleasure to welcome you to our institution. Our college is not just a place of learning, but a crucible where character is forged and dreams take flight.",
        "We believe in the power of education to change lives and the world. Our dedicated faculty and staff are here to support you in every step of your academic journey.",
        "I invite you to explore our campus, engage with our community, and become part of our legacy of excellence."
      ]}
    />
  );
}
