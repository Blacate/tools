import { FC } from 'react';
import cs from 'classnames'
import { HeaderSidebarTrigger } from '../header-sidebar-trigger/HeaderSidebarTrigger';
import { HeaderLogo } from '../header-logo/HeaderLogo';
import './header-main.less'

interface HeaderProps {
  className: string;
}


export const HeaderMain: FC<HeaderProps> = ({className}) => {
  return <div className={cs(className, 'header-main')}>
    <HeaderSidebarTrigger />
    <HeaderLogo />
  </div>
}