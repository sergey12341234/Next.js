import { NavigationLink } from '@/(mainLayout)/utils/constants';
import { FC, ComponentPropsWithoutRef } from 'react';
import { NavigationListItem } from './NavigationListItem';

type TNavigationList = ComponentPropsWithoutRef<'ul'> & {
  navLinks: NavigationLink[];
}

const NavigationList: FC<TNavigationList> = ({
  navLinks,
  ...restProps
}) => {
  return (
    <ul
      className='flex w-full justify-center gap-3'
      { ...restProps }
    >
      {navLinks.length > 0 && navLinks.map((link) => (
        <NavigationListItem
          key={ link.link }
          link={ link }
        />
      ))}
    </ul>
  );
};

export default NavigationList;
