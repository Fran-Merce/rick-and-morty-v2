import axios from 'axios';
import { CharacterAdapter } from '../adapters/characterAdapter';
import { Character } from '../models/Character';
const baseUrl = 'https://rickandmortyapi.com/api/character';

export const getSigleCharacter = async (id: string) => {
  const resp = await axios.get(`${baseUrl}/${id}`);
  return resp.data;
};

export const getCharacters = async (page: number = 1, name: string = '') => {
  const { data } = await axios.get(`${baseUrl}?page=${page}&name=${name}`);
  const { results, info } = data;
  const dataFormatted = results.map((character: Character) =>
    CharacterAdapter(character)
  );
  return { data: dataFormatted, info };
};
