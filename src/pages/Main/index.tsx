import React, { useCallback } from 'react';

import Form from '@components/Form/Form';
import Input from '@components/Input';

import { ConfirmButton, StyledForm } from './styles';

const Main: React.FC = () => {
  const handleSubmit = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('Submit');
  }, []);

  return (
    <Form as={StyledForm} onSubmit={handleSubmit}>
      <Input name="name" placeholder="Digite seu nome" />
      <Input name="email" placeholder="Digite seu email" />
      <ConfirmButton type="submit">CONFIRMAR</ConfirmButton>
    </Form>
  );
};

export default Main;
