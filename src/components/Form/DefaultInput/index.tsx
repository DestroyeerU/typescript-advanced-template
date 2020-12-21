import React, { useEffect, forwardRef, useMemo } from 'react';
import { IconType } from 'react-icons/lib';

import { useField } from '@unform/core';

import { useSafeRef } from '@hooks/native';

import { DefaultStyledInput, DefaultStyledError } from './styles';

type InputAttributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'value' | 'width'>;

interface OwnProps {
  name: string;
  label?: string;
  as?: typeof DefaultStyledInput;
  icon?: IconType;
  onIconClick?: () => void;
}

type DefaultInputProps = OwnProps & InputAttributes;
export type InputProps = DefaultInputProps;
export type InputRef = React.Ref<HTMLInputElement>;

const DefaultInput = ({ name, as: StyledInput, type, ...rest }: DefaultInputProps, ref: InputRef) => {
  const inputRef = useSafeRef(ref);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: type === 'checkbox' ? 'checked' : 'value',
    });
  }, [fieldName, inputRef, registerField, type]);

  const InputComponent = useMemo(() => StyledInput || DefaultStyledInput, [StyledInput]);

  return (
    <>
      <InputComponent ref={inputRef} defaultValue={defaultValue} defaultChecked={defaultValue} type={type} {...rest} />
      {error && <DefaultStyledError>{error}</DefaultStyledError>}
    </>
  );
};

export default forwardRef(DefaultInput);
