import InfoPage from '@/components/InfoPage';
import { BookOpen } from 'lucide-react';

export default function CoursesPage() {
  return (
    <InfoPage 
      title="Academic Courses"
      subtitle="Diverse programs designed for your success."
      iconName="book"
      image="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=2070"
      content={[
        "We offer a wide range of undergraduate and postgraduate programs in engineering, management, and humanities.",
        "Our courses are designed to be rigorous, relevant, and engaging, providing students with the skills and knowledge they need to excel in their chosen fields.",
        "Explore our curriculum and discover the learning pathways that are right for you."
      ]}
    />
  );
}
