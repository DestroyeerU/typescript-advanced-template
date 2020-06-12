import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { ContainerInput, InputElement, Error, Label } from '../Default/styles';

type InputAttributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'value' | 'width'>;

interface OwnProps {
  name: string;
  label?: string;
  width?: number;
}

type Props = OwnProps & InputAttributes;

const Input = ({ name, label, type, width, ...rest }: Props) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: type === 'checkbox' ? 'checked' : 'value',
    });
  }, [fieldName, registerField, type]);

  return (
    <ContainerInput width={width}>
      {label ? <Label invalid={error ? 1 : 0}>{label}</Label> : null}
      <InputElement
        ref={inputRef}
        defaultValue={defaultValue}
        defaultChecked={defaultValue}
        type={type}
        width={width}
        {...rest}
      />

      {error ? <Error>{error}</Error> : null}
    </ContainerInput>
  );
};

export default Input;
