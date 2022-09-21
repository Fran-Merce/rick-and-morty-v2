import React from 'react';
import { ErrorCharactersStyled } from './ErrorCharactersStyled';

interface Props {
  errorMessage: string;
}

export const ErrorCharacters = ({ errorMessage }: Props) => {
  return (
    <ErrorCharactersStyled >
      <h2 >{errorMessage}</h2>
      <img
        src='https://c.tenor.com/T4gJU0BY2KgAAAAC/rick-and.gif'
        alt=''
      />
    </ErrorCharactersStyled>
  );
};
