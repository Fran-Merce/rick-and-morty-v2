import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Character } from '../../models/Character';
import {
  CharacterCardImage,
  CharacterCardStyled,
  CharacterInfo,
  CharacterInfoWrapper,
  CharacterStatus,
} from './CharacterCardStyled';

export const CharacterCard = (props: Character) => {
  const { name, image, id, gender, status, species } = props;
  const navigate = useNavigate();
  return (
    <CharacterCardStyled
      status={status !== 'unknown' && status}
      onClick={() => navigate(`/${id}`)}
    >
      <span />
      <CharacterStatus status={status !== 'unknown' && status}>
        {status}
      </CharacterStatus>
      <CharacterCardImage src={image} alt='' />
      <p>{name}</p>
      <CharacterInfoWrapper>
        <CharacterInfo>{gender}</CharacterInfo>
        <CharacterInfo>{species}</CharacterInfo>
      </CharacterInfoWrapper>
    </CharacterCardStyled>
  );
};
