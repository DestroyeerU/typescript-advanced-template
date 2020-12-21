import styled from 'styled-components';

import colors from '@styles/colors';

export const StyledInput = styled.input`
  width: 100%;

  padding: 17px 20px;

  border-radius: 4px;
  background-color: ${colors.background};

  font-size: 1.8rem;
  font-weight: 400;

  &:placeholder {
    color: ${colors.textSecondary};
  }
`;
