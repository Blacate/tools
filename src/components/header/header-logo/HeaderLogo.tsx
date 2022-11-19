import { FC } from 'react';
import logo from './logo.svg'
import './header-logo.less'

export const HeaderLogo: FC = () => {
  return <img src={logo} alt="" className="header-logo" />
}