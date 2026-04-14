import Hero from '../components/home/Hero';
import HighlightsSection from '../components/home/HighlightsSection';
import CoursesSection from '../components/home/CoursesSection';
import PlacementsSection from '../components/home/PlacementsSection';
import CampusLifeSection from '../components/home/CampusLifeSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsSection from '../components/home/NewsSection';
import CtaBanner from '../components/home/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <HighlightsSection />
      <CoursesSection />
      <PlacementsSection />
      <CampusLifeSection />
      <TestimonialsSection />
      <NewsSection />
      <CtaBanner />
    </>
  );
}
