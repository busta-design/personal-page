import styled from 'styled-components';

const DivStyled = styled('div')`
  text-align: center;
`;

const ImgStyled = styled('img')`
  border-radius: 50%;
`;

const CircularImage = ({ image, size }) => (
  <DivStyled>
    <ImgStyled src={image} alt="Working" width={size} height={size} />
  </DivStyled>
);

export default CircularImage;
