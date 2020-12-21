import { Form as Unform } from '@unform/web';
import styled from 'styled-components';

import colors from '@styles/colors';

export const StyledForm = styled(Unform)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 450px;

  padding: 50px;

  background-color: #1a1d1e;

  input {
    margin-top: 20px;

    &:first-child {
      margin-top: 0px;
    }
  }

  span {
    margin: 4px auto 0 2px;

    font-size: 1.4rem;

    color: #e63946;
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  max-width: 350px;

  margin-top: 50px;
  padding: 17px;

  font-size: 1.8rem;
  font-weight: 700;

  border-radius: 4px;
  background-color: ${colors.primary};
`;
