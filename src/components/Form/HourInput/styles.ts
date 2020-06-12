import styled from 'styled-components';
import { Div, Input as DefaultInput } from '~/components/HTML';

export interface InputProps {
  align?: 'start' | 'center' | 'end';
  invalid?: boolean;
}

export const Container = styled(Div)`
  display: flex;
  align-items: center;
`;

export const Input = styled(DefaultInput)<InputProps>`
  width: 100%;
  padding: 4px 10px;

  border-radius: 4px;
  border-style: solid;
  border-width: ${(props) => (props.invalid ? '2px' : '1px')};
  border-color: ${(props) => (props.invalid ? 'red' : '#eee')};
`;
