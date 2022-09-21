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

  h1{
    font-size: 3.5rem;
    color: #fff;
    margin-bottom: 2rem;
    text-align: center;
  }
`

interface inputStyledProps {
  error: string | null;
}

export const InputStyled = styled.input<inputStyledProps>`
  width: 270px;
  min-height: 32px;
  margin-bottom: 2rem;
  background-color: transparent;
  border: 1px solid ${props => (!!props.error ? 'red' : '#00dd55')};
  padding: 0 10px;
  color: #d3d3d3;
  transition: border 0.3s ease-in-out;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  :focus {
    outline: none;
  }

  @media screen and (min-width: 360px) {
    width: 320px;
  }

`;
