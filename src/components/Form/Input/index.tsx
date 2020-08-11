import React, { forwardRef } from 'react';

import DefaultInput, { InputProps as DefaultProps, InputRef } from '../DefaultInput';
import { StyledInput } from './styles';

type InputProps = Omit<DefaultProps, 'input'>;

const Input = (props: InputProps, ref: InputRef) => {
  return <DefaultInput ref={ref} {...props} input={StyledInput} />;
};

export default forwardRef(Input);
