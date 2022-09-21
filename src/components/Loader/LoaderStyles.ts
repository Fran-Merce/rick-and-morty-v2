import styled from 'styled-components';
export const LoaderStyled = styled.span`
  display: inline-block;
    margin: 0 auto;
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: #00dd55;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    text-align: center;
    overflow: hidden;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderWrapper = styled.div`
    width: 99vw;
    text-align: center;
    height: 60px;
    margin: 2rem 0;
    display: grid;
    place-items: center;
`