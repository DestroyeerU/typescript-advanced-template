import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

import { ElementProps } from '~/components/HTML';

export interface ContainerInputProps extends ElementProps {
  invalid?: number;
  width?: number;
}

export interface LabelProps {
  invalid: number;
}

export const Container = styled(Unform)``;

export const ContainerInput = styled.div<ContainerInputProps>`
  width: 100%;
  max-width: ${({ width }) => width && `${width}px`};

  padding-top: 5px;
  padding-bottom: 5px;
`;

export const InputElement = styled.input`
  width: 100%;

  padding: 8px 12px;

  border-radius: 5px;
  border: 1px solid #ced4da;

  color: #333;
  background-color: #fff !important;
`;

export const Label = styled.span<LabelProps>`
  margin-top: ${(props) => (props.invalid === 1 ? '0px' : '10px')};

  font-size: 14px;
`;

export const Error = styled.span`
  font-size: 13px;
  color: #ff1111;
  font-weight: 300;
`;
