/* eslint-disable react/no-array-index-key */
import { cn } from '@/utils/generalUtils';
import { FC, ComponentPropsWithoutRef } from 'react';

type TMoviesListPagination = ComponentPropsWithoutRef<'ul'> & {
  pages: number;
  activePage: number;
  onPrev: () => void;
  onNext: () => void;
  setPage: (pageNum: number) => void;
}

const MoviesListPagination: FC<TMoviesListPagination> = ({
  activePage,
  pages,
  onNext,
  onPrev,
  setPage,
  ...restProps
}) => {
  return (
    <ul
      className='flex space-x-3 justify-center mt-8'
      { ...restProps }
    >
      <button
        type='button'
        disabled={ activePage === 1 }
        onClick={ onPrev }
        className={ cn(
          'group/prev flex items-center justify-center shrink-0 cursor-pointer w-9 h-8 rounded',
          'bg-slate-200',
          'disabled:bg-slate-600 disabled:cursor-not-allowed',
        ) }
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 55.753 55.753'
          className={ cn(
            'w-3 group/prev',
            'fill-slate-950',
            'group-disabled/prev:fill-slate-500',
          ) }
        >
          <path
            d='M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z'
            data-original='#000000'
          />
        </svg>
      </button>
      { Array.from({ length: pages }).map((item, index) => (
        <li
          key={ index }
          onClick={ () => setPage(index + 1) }
          className={ cn(
            'flex items-center justify-center shrink-0 cursor-pointer text-sm font-bold text-gray-500 w-9 h-8 rounded',
            activePage - 1 === index && 'bg-slate-50 text-gray-950',
          ) }
        >
          {index + 1}
        </li>
      )) }
      <button
        type='button'
        disabled={ activePage >= pages }
        onClick={ onNext }
        className='flex items-center justify-center shrink-0 cursor-pointer bg-slate-200 w-9 h-8 rounded'
      >
        <svg xmlns='http://www.w3.org/2000/svg' className='w-3 fill-slate-950 rotate-180' viewBox='0 0 55.753 55.753'>
          <path
            d='M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z'
            data-original='#000000'
          />
        </svg>
      </button>
    </ul>
  );
};

export default MoviesListPagination;
