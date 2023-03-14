import { useEffect, useRef, FC, ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useOnScreen } from 'domain/hooks';

type Direction = 'left' | 'right';

interface IProps {
  direction: Direction;
  children: ReactNode;
}

export const LazyShow: FC<IProps> = ({ direction, children }) => {
  const controls = useAnimation();
  const rootRef = useRef(null);
  const onScreen = useOnScreen(rootRef);
  const x = direction === 'left' ? -50 : 50;

  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      });
    }
  }, [onScreen, controls]);

  return (
    <motion.div
      className='lazy-div'
      ref={rootRef}
      initial={{ opacity: 0, x }}
      animate={controls}>
      {children}
    </motion.div>
  );
};
