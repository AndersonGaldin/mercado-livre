import React, {FC, memo} from 'react';
import { CustomLight } from './atoms';

type Props = {
  currentColor: string;
  path: string
}

const Light:FC<Props> = memo(({ currentColor, path }) =>  <CustomLight d={path} currentColor={currentColor} />)

export default Light;
