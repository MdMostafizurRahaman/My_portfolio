import { useEffect, useRef, useState } from 'react';

export const useScrollAnimations = (threshold = 0.1) => {
  const [elements, setElements] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Add staggered delay for multiple elements
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
              entry.target.style.transform = 'translateY(0) translateX(0) scale(1) rotateY(0)';
              entry.target.style.opacity = '1';
            }, delay * 100);
          }
        });
      },
      {
        threshold,
        rootMargin: '50px 0px -50px 0px',
      }
    );

    // Observe all elements with scroll animation classes
    const scrollElements = document.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .animate-on-scroll'
    );

    scrollElements.forEach((el, index) => {
      if (!el.dataset.delay) {
        el.dataset.delay = index;
      }
      observer.current.observe(el);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [threshold]);

  return { observer };
};

export const useParallaxEffect = (speed = 0.5) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * speed;
        elementRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return elementRef;
};

export const useMagneticEffect = (strength = 0.3) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'translate(0, 0)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return elementRef;
};

export const useColorShift = (colors = ['#9333ea', '#3b82f6', '#10b981', '#f59e0b']) => {
  const [currentColor, setCurrentColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prev) => (prev + 1) % colors.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [colors.length]);

  return colors[currentColor];
};