import styled from 'styled-components';
import { Div, Input } from '~/components/HTML';

export const InnerContainer = styled(Div)`
  display: flex;
  align-items: center;

  padding: 8px 12px;

  border-radius: 5px;
  border: 1px solid #ced4da;
  background: #fff;
`;

export const CustomInput = styled(Input)`
  background-color: #fff !important;
  width: 100%;

  margin-right: 10px;

  color: #333;
`;
