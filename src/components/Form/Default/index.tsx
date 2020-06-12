import React, { useCallback } from 'react';

import { SubmitHandler, FormHandles, FormProps as UnformProps } from '@unform/core';
import * as Yup from 'yup';

import { Container } from './styles';

export declare type FormPros = FormHandles;

interface OwnProps {
  formRef: React.RefObject<FormHandles>;
  schema: Yup.ObjectSchema;
  onSubmit: (data: object) => void;
  clean?: boolean;
}

type Props = OwnProps & Omit<UnformProps, 'onSubmit' | 'ref'>;

const Default = ({ formRef, schema, onSubmit: OnDataSubmit, initialData, clean, ...rest }: Props) => {
  const setErrorsMessages = useCallback(
    (err: Yup.ValidationError) => {
      const errorMessages = {} as { [key: string]: string };

      err.inner.forEach((error) => {
        errorMessages[error.path] = error.message;
      });

      if (formRef.current) {
        formRef.current.setErrors(errorMessages);
      }
    },
    [formRef]
  );

  const handleSubmit: SubmitHandler<object> = useCallback(
    (data, { reset }) => {
      async function validateFields() {
        try {
          await schema.validate(data, {
            abortEarly: false,
          });

          OnDataSubmit(data);

          if (!clean) return;

          reset();

          if (formRef.current) {
            formRef.current.setErrors({});
          }
        } catch (err) {
          if (err instanceof Yup.ValidationError) {
            setErrorsMessages(err);
          }
        }
      }

      validateFields();
    },
    [OnDataSubmit, clean, formRef, schema, setErrorsMessages]
  );

  return <Container ref={formRef} onSubmit={handleSubmit} initialData={initialData} {...rest} />;
};

export default Default;
