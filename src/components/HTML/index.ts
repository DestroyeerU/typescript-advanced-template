import styled from 'styled-components';
import { margin, pxNumber } from '~/utils/styled';

export interface Margin {
  top?: number | 'auto';
  bottom?: number | 'auto';

  right?: number | 'auto';
  left?: number | 'auto';
}

export interface ElementProps extends Margin {
  radius?: number;
  align?: 'start' | 'center' | 'end';
}

export const Div = styled.div<ElementProps>`
  margin-left: ${(props) => margin(props.left)};
  margin-right: ${(props) => margin(props.right)};
  margin-top: ${(props) => margin(props.top)};
  margin-bottom: ${(props) => margin(props.bottom)};

  border-radius: ${(props) => pxNumber(props.radius)};

  text-align: ${(props) => props.align || 'start'};
`;

export const Button = styled.button<ElementProps>`
  margin-left: ${(props) => margin(props.left)};
  margin-right: ${(props) => margin(props.right)};
  margin-top: ${(props) => margin(props.top)};
  margin-bottom: ${(props) => margin(props.bottom)};

  border-radius: ${(props) => pxNumber(props.radius)};

  text-align: ${(props) => props.align || 'start'};
`;

export const Span = styled.span<ElementProps>`
  margin-left: ${(props) => margin(props.left)};
  margin-right: ${(props) => margin(props.right)};
  margin-top: ${(props) => margin(props.top)};
  margin-bottom: ${(props) => margin(props.bottom)};

  border-radius: ${(props) => pxNumber(props.radius)};
`;

export const Input = styled.input<ElementProps>`
  margin-left: ${(props) => margin(props.left)};
  margin-right: ${(props) => margin(props.right)};
  margin-top: ${(props) => margin(props.top)};
  margin-bottom: ${(props) => margin(props.bottom)};

  border-radius: ${(props) => pxNumber(props.radius)};

  text-align: ${(props) => props.align || 'start'};
`;
