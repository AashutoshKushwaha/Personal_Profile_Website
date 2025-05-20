import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Intro />
      <Projects />
      <Contact />
    </div>
  );
}