import InfoPage from '@/components/InfoPage';
import { Calendar } from 'lucide-react';

export default function CalendarPage() {
  return (
    <InfoPage 
      title="Academic Calendar"
      subtitle="Stay organized with our schedule."
      iconName="calendar"
      image="https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=2070"
      content={[
        "The academic calendar provides important dates for the entire academic year, including start and end of semesters, examination periods, and holidays.",
        "Planning your schedule around these dates will help you stay on track and manage your time effectively.",
        "Any updates or changes to the calendar will be communicated through official channels and updated here."
      ]}
    />
  );
}
