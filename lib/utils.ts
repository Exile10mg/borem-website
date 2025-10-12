// Utility functions for mobile optimization

export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

export const getAnimationProps = (disabled: boolean = false) => {
  if (disabled || (typeof window !== 'undefined' && window.innerWidth < 768)) {
    return {
      initial: {},
      animate: {},
      whileInView: {},
      transition: { duration: 0 }
    };
  }
  
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };
};

export const getStaggerAnimationProps = (disabled: boolean = false) => {
  if (disabled || (typeof window !== 'undefined' && window.innerWidth < 768)) {
    return {
      initial: {},
      animate: {},
      transition: { duration: 0 }
    };
  }
  
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { staggerChildren: 0.1 }
  };
};
