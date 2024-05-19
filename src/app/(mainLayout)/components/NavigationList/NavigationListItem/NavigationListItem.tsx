import { NavigationLink } from '@/(mainLayout)/utils/constants';
import Link from 'next/link';
import { FC, ComponentPropsWithoutRef } from 'react';

type TNavigationListItem = ComponentPropsWithoutRef<'li'> & {
  link: NavigationLink;
}

const NavigationListItem: FC<TNavigationListItem> = ({
  link,
  ...restProps
}) => {
  return (
    <li
      { ...restProps }
    >
      <Link
        className='no-underline text-black dark:text-white dark:hover:text-gray-300 hover:text-gray-100 duration-200'
        href={ link.link }
      >
        { link.text }
      </Link>
    </li>
  );
};

export default NavigationListItem;
