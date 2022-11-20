import { FC } from 'react';
import cs from 'classnames'
import { JwtModule } from '../../modules/jwt/Jwt';

interface ContentProps {
  className: string
}

export const Content: FC<ContentProps> = ({className}) => {
  return <div className={cs(className)}>
    <JwtModule/>
  </div>
}