import { useRef } from 'react';

type SectionRefs = {
  [key: string]: HTMLElement | null;
};

const useSmoothScroll = () => {
  const sectionRefs = useRef<SectionRefs>({});

  const registerSection = (id: string) => (element: HTMLElement | null) => {
    if (element) {
      sectionRefs.current[id] = element;
    }
  };

  const scrollToSection = (id: string) => {
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    registerSection,
    scrollToSection,
  };
};

export default useSmoothScroll;
