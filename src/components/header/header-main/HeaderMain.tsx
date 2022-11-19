import { FC } from 'react';
import cs from 'classnames'
import { HeaderSidebarTrigger } from '../header-sidebar-trigger/HeaderSidebarTrigger';

interface HeaderProps {
  className: string;
}


export const HeaderMain: FC<HeaderProps> = ({className}) => {
  return <div className={cs(className)}>
    <HeaderSidebarTrigger />
  </div>
}