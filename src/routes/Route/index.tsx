import React from 'react';
import { Route as RouteWrapper, Redirect, RouteProps } from 'react-router-dom';

interface OwnProps {
  isPublic?: boolean;
  isToKeep?: boolean;
}

type Props = RouteProps & OwnProps;

export default function Route({ isPublic, isToKeep, ...rest }: Props) {
  // update with signed value on your state
  const signed = true;

  if (!isToKeep) {
    if (!signed && !isPublic) {
      return <Redirect to="/" />;
    }

    if (signed && isPublic) {
      return <Redirect to="/categorias" />;
    }
  } else if (signed) {
    return <Redirect to="/categorias" />;
  }

  return <RouteWrapper {...rest} />;
}
