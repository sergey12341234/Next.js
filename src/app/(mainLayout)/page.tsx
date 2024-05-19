/* eslint-disable react/no-array-index-key */

'use client';

import { AnimatedSpan } from '@/components/AnimatedSpan';
import { motion } from 'framer-motion';

export default function Home() {
  const mainText = 'This page was created to showcase my basic skills'.split('');
  return (
    <div className='flex flex-col h-fit w-full['>
      <motion.div className='flex justify-center mt-5'>
        { mainText.map((letter, index) => (
          <AnimatedSpan
            key={ index }
          >
            { letter === ' ' ? '\u00A0' : letter }
          </AnimatedSpan>
        )) }
      </motion.div>
    </div>
  );
}
