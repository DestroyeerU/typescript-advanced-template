import { Form as Unform } from '@unform/web';
import styled from 'styled-components';

import { Size, useSize } from '@hooks/styled';

export type StyledFormProps = Size;

export const StyledForm = styled(Unform)`
  ${useSize};
`;
