import styled from 'styled-components';

const Base = styled('div')`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  position: relative;
`;

const ContainerRelative = ({ width, height, style, children }) => (
  <Base width={width} height={height} style={style}>
    {children}
  </Base>
);

export default ContainerRelative;
