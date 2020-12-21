import React, { useCallback } from 'react';

import * as Yup from 'yup';

import Form from '@components/Form/Form';
import Input from '@components/Input';

import { ConfirmButton, StyledForm } from './styles';

interface FormSubmitData {
  email: string;
  password: string;
}

const formSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Este campo é obrigatório'),
  password: Yup.string().required('Este campo é obrigatório'),
});

const Main: React.FC = () => {
  const handleSubmit = useCallback(async (data: FormSubmitData) => {
    console.log(data);
  }, []);

  return (
    <Form as={StyledForm} onSubmit={handleSubmit} schema={formSchema}>
      <Input name="email" placeholder="Digite seu email" autoFocus />
      <Input name="password" placeholder="Digite sua senha" type="password" />
      <ConfirmButton type="submit">CONFIRMAR</ConfirmButton>
    </Form>
  );
};

export default Main;
