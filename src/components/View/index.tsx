import React from 'react';

import { Container, NoDataContainer, NoDataText, LoadingSpinner } from './styles';

interface OwnProps {
  loading: boolean;
  hasData: boolean;
  children?: React.ReactNode;
}

const View = ({ loading, hasData, children }: OwnProps) => (
  <>
    {loading ? (
      <Container>
        <LoadingSpinner />
      </Container>
    ) : (
      <>
        {hasData ? (
          <>{children}</>
        ) : (
          <NoDataContainer>
            <NoDataText>Nenhum dado encontrado</NoDataText>
          </NoDataContainer>
        )}
      </>
    )}
  </>
);

export default View;
