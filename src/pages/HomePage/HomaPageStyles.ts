import styled from 'styled-components';

export const CharactersWrapper = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  gap: 2rem;
  max-width: 1200px;

  padding-bottom: 5rem;
    ::-webkit-scrollbar {
    display: none;
}
`;
export const HomePageStyled = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > div{
    min-height: 85vh;
    width: 100%;
  }
`
