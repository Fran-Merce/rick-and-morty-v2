import styled from 'styled-components';
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
  :focus {
    outline: none;
  }

  @media screen and (min-width: 360px) {
    width: 320px;
  }

`;
