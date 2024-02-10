import {
  FC, ComponentPropsWithoutRef, useEffect, useState,
} from 'react';
import { createPortal } from 'react-dom';
import { LineWave } from 'react-loader-spinner';

type TPortalSpinner = ComponentPropsWithoutRef<'div'>;

const PortalSpinner: FC<TPortalSpinner> = ({ ...restProps }) => {
  const [ modalPortal, setModalPortal ] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setModalPortal(document.getElementById('portal'));
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [ ]);

  if (!modalPortal) return null;

  return createPortal(
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      onClick={ (e) => e.stopPropagation() }
      className='fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center z-100'
      { ...restProps }
    >
      <LineWave
        height='100'
        width='100'
        color='#ff0000'
        ariaLabel='line-wave'
        visible
      />
    </div>,
    modalPortal,
  );
};

export default PortalSpinner;
