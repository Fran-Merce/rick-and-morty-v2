import React from 'react';

interface Props {
  errorMessage: string;
}

export const ErrorCharacters = ({ errorMessage }: Props) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color: 'white' }}>{errorMessage}</h1>
      <img
        style={{ marginTop: '2rem', width: '280px' }}
        src='https://c.tenor.com/T4gJU0BY2KgAAAAC/rick-and.gif'
        alt=''
      />
    </div>
  );
};
