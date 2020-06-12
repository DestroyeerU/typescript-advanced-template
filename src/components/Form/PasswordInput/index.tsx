/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useField } from '@unform/core';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { ContainerInput, Error, Label } from '../Default/styles';
import { InnerContainer, CustomInput } from './styles';

type InputAttributes = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'value'>;

interface OwnProps {
  name: string;
  label?: string;
  width?: number;
}

type Props = OwnProps & InputAttributes;

const PasswordInput = ({ name, label, width, ...rest }: Props) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [visibleText, setVisibleText] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleChangeTextVisibe = useCallback(() => {
    setVisibleText(!visibleText);
  }, [visibleText]);

  return (
    <ContainerInput width={width}>
      {label ? <Label invalid={error ? 1 : 0}>{label}</Label> : null}

      <InnerContainer>
        <CustomInput
          // invalid={error ? 1 : 0}
          ref={inputRef}
          defaultValue={defaultValue}
          defaultChecked={defaultValue}
          type={visibleText ? 'text' : 'password'}
          width={width}
          {...rest}
        />

        {visibleText ? (
          <FiEye onClick={() => handleChangeTextVisibe()} />
        ) : (
          <FiEyeOff onClick={() => handleChangeTextVisibe()} />
        )}
      </InnerContainer>

      {error ? <Error>{error}</Error> : null}
    </ContainerInput>
  );
};

export default PasswordInput;
