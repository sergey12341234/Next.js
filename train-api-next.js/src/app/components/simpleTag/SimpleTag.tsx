import { FC, ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

type TSimpleTag = ComponentPropsWithoutRef<'li'> & {
  text: string;
  classname?: string;
}

const SimpleTag: FC<TSimpleTag> = ({ text, classname, ...restProps }) => (
  <li
    className={ twMerge('p-2 text-sm font-semibold text-slate-800 dark:text-slate-300 bg-cyan-100 dark:bg-zinc-600 rounded-md', classname) }
    { ...restProps }
  >
    { text }
  </li>
);

export default SimpleTag;
