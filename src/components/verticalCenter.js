import ContainerAbsolute from './containerAbsolute';
import ContainerRelative from './containerRelative';

const styleVerticalCenter = {
  margin: '0',
  top: '30%',
};

const ContainerVerticalAlign = ({
  width,
  height,
  children,
  centerHorizontal,
}) => {
  let styleAbsolute = centerHorizontal ? { textAlign: 'center' } : {};

  return (
    <ContainerRelative width={width} height={height}>
      <ContainerAbsolute
        width="100%"
        heigth="100px"
        style={{ ...styleVerticalCenter, ...styleAbsolute }}
      >
        {children}
      </ContainerAbsolute>
    </ContainerRelative>
  );
};

export default ContainerVerticalAlign;
