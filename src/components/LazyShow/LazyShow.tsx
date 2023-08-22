'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useOnScreen } from '@/hooks/useOnScreen';

export const LazyShow = ({ children }: { children: ReactNode }) => {
  const controls = useAnimation();
  const rootRef = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(rootRef);

  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: 'easeInOut',
        },
      });
    } else {
      controls.start({
        x: -50,
        opacity: 0,
      });
    }
  }, [controls, onScreen]);

  return (
    <motion.div
      ref={rootRef}
      initial={{ opacity: 0, x: -50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};
