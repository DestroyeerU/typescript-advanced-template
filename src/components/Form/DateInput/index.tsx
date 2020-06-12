import React, { useRef, useEffect, useCallback } from 'react';
import NumberFormat from 'react-number-format';
import { useField } from '@unform/core';

import { ContainerInput, InputElement, ContainerInputProps, Error, Label } from '../Default/styles';

interface OwnProps {
  name: string;
  label?: string;
  color?: string;
}

type Props = OwnProps & ContainerInputProps;

const DateInput = ({ name, label, ...rest }: Props) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const isValid = useCallback((valueString: string) => {
    const [day, month] = valueString.split('/');

    if (Number(day) > 31) {
      return false;
    }

    if (Number(month) > 12) {
      return false;
    }

    return true;
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'state.value',
    });
  }, [fieldName, registerField]);

  return (
    <ContainerInput invalid={error ? 1 : 0} {...rest}>
      {label ? <Label invalid={error ? 1 : 0}>{label}</Label> : null}

      <NumberFormat
        isAllowed={(values) => isValid(values.formattedValue)}
        placeholder="01/01/2020"
        format="##/##/####"
        ref={inputRef}
        customInput={InputElement}
        defaultValue={defaultValue}
        allowNegative={false}
      />

      {error ? <Error>{error}</Error> : null}
    </ContainerInput>
  );
};

export default DateInput;
