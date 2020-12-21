import React, { useCallback } from 'react';

import * as Yup from 'yup';

import Form from '@components/Form/Form';
import Input from '@components/Input';

import { ConfirmButton, StyledForm } from './styles';

interface FormSubmitData {
  name: string;
  email: string;
}

const formSchema = Yup.object().shape({
  name: Yup.string().required('Este campo é obrigatório'),
  email: Yup.string().email('Email inválido').required('Este campo é obrigatório'),
});

const Main: React.FC = () => {
  const handleSubmit = useCallback((data: FormSubmitData) => {
    console.log(data);
  }, []);

  return (
    <Form as={StyledForm} onSubmit={handleSubmit} schema={formSchema}>
      <Input name="name" placeholder="Digite seu nome" autoFocus />
      <Input name="email" placeholder="Digite seu email" />
      <ConfirmButton type="submit">CONFIRMAR</ConfirmButton>
    </Form>
  );
};

export default Main;
