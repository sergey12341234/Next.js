'use client';

import { useTheme } from 'next-themes';
import {
  useState, FC, ComponentPropsWithoutRef, useEffect,
} from 'react';
import { LineWave } from 'react-loader-spinner';

type TCustomLineWaveSpinner = ComponentPropsWithoutRef<'div'>

const CustomLineWaveSpinner: FC<TCustomLineWaveSpinner> = ({ ...restProps }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div
    onClick={ (e) => e.stopPropagation() }
    className='absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center'
    { ...restProps }
  >
    <LineWave
      height='100'
      width='100'
      color='#ff0000'
      ariaLabel='line-wave'
      visible
    />
  </div>
);

export default CustomLineWaveSpinner;
