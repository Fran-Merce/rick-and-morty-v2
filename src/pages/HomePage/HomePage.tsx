import InfiniteScroll from 'react-infinite-scroll-component';
import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import { ErrorCharacters } from '../../components/ErrorCharacters/ErrorCharacters';
import { Loader } from '../../components/Loader/Loader';
import { useCharacters } from '../../hooks/useCharacters';
import { CharactersWrapper, HomePageStyled, InputStyled } from './HomaPageStyles';

export const HomePage = () => {
  const { data, handlePage, handleSearch, hasMore, error, loading } =
    useCharacters();
  return (
    <HomePageStyled>
      <h1>RICK AND MORTY WIKI</h1>
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
          {data?.length  && (
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
