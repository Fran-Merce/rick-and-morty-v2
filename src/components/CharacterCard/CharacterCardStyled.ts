import styled from 'styled-components';
interface CharacterCardStyledProps {
  status?: string | boolean;
}


export const CharacterCardStyled = styled.div<CharacterCardStyledProps>`
  position: relative;
  width: 18rem;
  height: 24rem;
  border-radius: 0.5rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-position: center;
  background-size: cover;
  backdrop-filter: blur(15px);
  border-radius: 10px;
  ::after{
    content: '';
    width: 40%;
    height:1px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props =>
    props.status ? (props.status === 'Alive' ? '#00dd55' : '#ff0000') : '#D3D3D3'};
  }
  ::before{
    content: '';
    width:1px;
    height: 20%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${props =>
    props.status ? (props.status === 'Alive' ? '#00dd55' : '#ff0000') : '#D3D3D3'};
  }

  span{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  
  span::after{
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width:1px;
    height: 20%;
    background-color: ${props =>
    props.status ? (props.status === 'Alive' ? '#00dd55' : '#ff0000') : '#D3D3D3'};
  }
  span::before{
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40%;
    height:1px;
    background-color: ${props =>
    props.status ? (props.status === 'Alive' ? '#00dd55' : '#ff0000') : '#D3D3D3'};
  }
`;

export const CharacterCardImage = styled.img`
  margin-top: 1rem;
  width: 80%;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
`;

export const CharacterInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const CharacterStatus = styled.p<CharacterCardStyledProps>`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.2rem;
  background-color: ${props =>
    props.status ? (props.status === 'Alive' ? '#00dd55' : '#ff0000') : '#D3D3D3'};
  padding: 0.2rem 1rem;
  color: #000;
  border-radius: 10px;
  margin: 10px;
`;

export const CharacterInfo = styled.p`
  font-size: 1.2rem;
  padding: 0.3rem;
  color: #fff;
  `