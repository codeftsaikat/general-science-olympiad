'use client';
import { useEffect, useRef } from 'react';

const ScrollEffect = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => revealObserver.observe(el));
    observerRef.current = revealObserver;

    // Initialize with 'ongoing' tab active
    setTimeout(() => {
      document.querySelectorAll('.tab-content').forEach((el, index) => {
        if (index === 0) {
          el.classList.remove('hidden');
          el.classList.add('block');
        } else {
          el.classList.add('hidden');
          el.classList.remove('block');
        }
      });
      
      const firstTab = document.getElementById('tab-ongoing');
      if (firstTab) {
        firstTab.classList.add('bg-gray-100');
      }
    }, 0);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return null; // This component doesn't render anything, it just handles the scroll effect
};

export default ScrollEffect;