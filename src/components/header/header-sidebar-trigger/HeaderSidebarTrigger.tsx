// import { Button } from '@arco-design/web-react';
import { useAtom } from 'jotai';
import { FC } from 'react';
import { sidebarVisibleAtom } from '../../../configs/jotai.config';
import './header-sidebar-trigger.less'
import cs from 'classnames'

export const HeaderSidebarTrigger: FC = () => {
  const [sidebarVisible, setSidebarVisible] = useAtom(sidebarVisibleAtom)

  return <button
    className={cs('header-sidebar-trigger', sidebarVisible ? 'close' : 'open')}
    onClick={() => setSidebarVisible(value => !value)}
  >
    <span className="hst-line hst-line-1" />
    <span className="hst-line hst-line-2" />
    <span className="hst-line hst-line-3" />
  </button>
}