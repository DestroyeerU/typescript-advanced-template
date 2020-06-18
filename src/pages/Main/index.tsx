import React from 'react';

import { Container } from './styles';
import { Form, PasswordInput } from '~/components/Form';

const Main = () => {
  return (
    <Container>
      <h1>Main</h1>

      <Form onSubmit={() => {}} width={300}>
        {/* <Input name="name" /> */}
        <PasswordInput name="password" />
      </Form>
    </Container>
  );
};
export default Main;
