import React, { useCallback } from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format';

import { Input, InputProps } from './styles';

interface OwnProps {
  initValue: string;
  setValue: (value: string) => void;
  onBlur: () => void;
}

type Props = OwnProps & InputProps;

const HourInput = ({ initValue, setValue, align, onBlur }: Props) => {
  const isHourValid = useCallback((values: NumberFormatValues) => {
    const { value: inputValue } = values;

    const hour = Number(inputValue.slice(0, 2));
    const minutes = Number(inputValue.slice(2, 4));

    const validHour = hour >= 0 && hour <= 23;
    const validminutes = minutes >= 0 && minutes <= 59;

    return validHour && validminutes;
  }, []);

  return (
    <>
      <NumberFormat
        customInput={Input}
        format="##:##"
        defaultValue={initValue}
        value={initValue}
        isAllowed={(values) => isHourValid(values)}
        onValueChange={(values) => setValue(values.formattedValue)}
        align={align}
        onBlur={onBlur}
      />
    </>
  );
};

export default HourInput;
