import { debounce } from 'lodash';
import { useState, useEffect, useRef } from 'react';
import { Character } from '../models/Character';
import { getCharacters } from '../services/api';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dataCharacters = async () => {
    setLoading(true);
    try {
      const { data, info } = await getCharacters(page, search);
      info.next ? setHasMore(true) : setHasMore(false);
      characters.length === 0
        ? setCharacters(data)
        : setCharacters(prevCharacters => prevCharacters.concat(data));
      setError(null);
    } catch (error) {
      if (error instanceof Error) {
        error.message === 'Request failed with status code 404'
          ? setError('Not Found Character')
          : setError(error.message);
      }
      setHasMore(false);
    }
    setLoading(false);
  };

  const handleSearch = useRef(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      setCharacters([]);
      setSearch(e.target.value);
      setPage(1);
    }, 400)
  ).current;

  const handlePage = () => setPage(prevPage => prevPage + 1);

  useEffect(() => {
    return () => handleSearch.cancel();
  }, [handleSearch]);

  useEffect(() => {
    dataCharacters();
  }, [page, search]);

  return { data: characters, handlePage, handleSearch, error, hasMore,loading};
};
