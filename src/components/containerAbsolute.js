import styled from 'styled-components';

const Base = styled('div')`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  position: absolute;
`;

const ContainerAbsolute = ({ width, height, style, children }) => (
  <Base width={width} height={height} style={style}>
    {children}
  </Base>
);

export default ContainerAbsolute;
