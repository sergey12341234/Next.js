import { FC, useCallback, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

type TAnimatedSpan ={
  children: string;
}

const AnimatedSpan: FC<TAnimatedSpan> = ({
  children,
}) => {
  const [ isAnimating, setIsAnimating ] = useState(false);
  const controls = useAnimation();

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    setIsAnimating(false);
  };

  const handleMouseEnter = useCallback(() => {
    if (!isAnimating) {
      handleAnimationStart();
      controls.start({
        scaleX: [ 1, 1.4, 0.75, 1.25, 0.9, 1 ],
        scaleY: [ 1, 0.55, 1.25, 0.85, 1.05, 1 ],
        transition: {
          duration: 0.6,
          ease: 'easeInOut',
          times: [ 0, 0.4, 0.6, 0.7, 0.8, 0.9 ],
        },
      }).then(handleAnimationComplete);
    }
  }, [ controls, isAnimating ]);

  return (
    <motion.div
      initial={ { scaleX: 1, scaleY: 1 } }
      animate={ controls }
      onMouseEnter={ handleMouseEnter }
      className='text-3xl'
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSpan;
