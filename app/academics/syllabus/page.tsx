import InfoPage from '@/components/InfoPage';
import { BookOpen } from 'lucide-react';

export default function SyllabusPage() {
  return (
    <InfoPage 
      title="Syllabus"
      subtitle="Comprehensive curriculum for all departments."
      iconName="book"
      image="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=2070"
      content={[
        "Our syllabus is regularly updated to align with industry standards and technological advancements.",
        "Each course is carefully structured to provide a balance of theoretical knowledge and practical application.",
        "Students can download the detailed syllabus for their respective departments and semesters from our portal."
      ]}
    />
  );
}
