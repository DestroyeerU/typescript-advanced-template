/* eslint-disable no-unused-expressions */
import React, { useCallback, forwardRef, useMemo } from 'react';

import { SubmitHandler, FormHandles, FormProps as UnformProps } from '@unform/core';
import { Form as Unform } from '@unform/web';
import * as Yup from 'yup';

import { useSafeRef } from '@hooks/native';

import { setErrorsMessages, validateSchema } from '@utils/form';

export declare type FormPros = FormHandles;

interface OwnProps {
  as?: typeof Unform;
  children?: React.ReactNode;

  onSubmit: (data: any) => void;

  schema?: Yup.ObjectSchema;
  customValidation?: boolean;
}

type Props = OwnProps & Omit<UnformProps, 'onSubmit' | 'ref'>;
type Ref = React.Ref<FormHandles>;

const Form = ({ children, schema, onSubmit, customValidation, as: StyledForm, ...rest }: Props, ref: Ref) => {
  const formRef = useSafeRef(ref);

  const handleSubmit: SubmitHandler<object> = useCallback(
    async (data) => {
      if (customValidation) {
        onSubmit(data);
        return;
      }

      const schemaToValidate = schema as Yup.ObjectSchema;
      const errors = await validateSchema(schemaToValidate, data);

      if (errors) {
        setErrorsMessages(formRef, errors);
      } else {
        formRef.current?.setErrors({});
      }

      onSubmit(data);
    },
    [customValidation, formRef, onSubmit, schema]
  );

  const FormComponent = useMemo(() => StyledForm || Unform, [StyledForm]);

  return (
    <FormComponent ref={formRef} onSubmit={handleSubmit} {...rest}>
      {children}
    </FormComponent>
  );
};

export default forwardRef(Form);
