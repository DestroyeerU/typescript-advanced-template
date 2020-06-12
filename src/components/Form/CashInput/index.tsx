import React, { useRef, useEffect } from 'react';
import NumberFormat from 'react-number-format';
import { useField } from '@unform/core';

import { ContainerInput, InputElement, ContainerInputProps, Error, Label } from '../Default/styles';

interface OwnProps {
  name: string;
  label?: string;
  color?: string;
}

type Props = OwnProps & ContainerInputProps;

const CashInput = ({ name, label, ...rest }: Props) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'state.numAsString',
    });
  }, [fieldName, registerField]);

  return (
    <ContainerInput invalid={error ? 1 : 0} {...rest}>
      {label ? <Label invalid={error ? 1 : 0}>{label}</Label> : null}

      <NumberFormat
        placeholder="R$ 2,00"
        ref={inputRef}
        customInput={InputElement}
        defaultValue={defaultValue}
        prefix="R$"
        allowNegative={false}
        decimalScale={2}
        fixedDecimalScale
        decimalSeparator=","
      />

      {error ? <Error>{error}</Error> : null}
    </ContainerInput>
  );
};

export default CashInput;
