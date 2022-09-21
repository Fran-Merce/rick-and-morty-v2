import InfiniteScroll from 'react-infinite-scroll-component';
import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import { ErrorCharacters } from '../../components/ErrorCharacters/ErrorCharacters';
import { Loader } from '../../components/Loader/Loader';
import { InputStyled } from '../../components/Search/SearchStyled';
import { useCharacters } from '../../hooks/useCharacters';
import { CharactersWrapper, HomePageStyled } from './HomaPageStyles';

export const HomePage = () => {
  const { data, handlePage, handleSearch, hasMore, error, loading } =
    useCharacters();
  return (
    <HomePageStyled>
      <InputStyled
        error={error}
        onChange={handleSearch}
        type='search'
        placeholder='Search Characters'
      />
      <div>
        <InfiniteScroll
          dataLength={data.length}
          next={handlePage}
          hasMore={hasMore}
          style={{ overflow: 'hidden' }}
          loader={<></>}
        >
          {data?.length > 0 && (
            <CharactersWrapper>
              {data?.map(character => (
                <CharacterCard key={character.id} {...character} />
              ))}
            </CharactersWrapper>
          )}
          {loading && <Loader />}
          {error && !loading && <ErrorCharacters errorMessage={error} />}
        </InfiniteScroll>
      </div>
    </HomePageStyled>
  );
};
