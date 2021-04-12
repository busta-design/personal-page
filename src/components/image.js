const Image = ({ title, image, height, width, sizeTitle, hasBorder }) => {
  let styledImage = { border: '#c2d6d6 5px solid' };
  styledImage = hasBorder ? styledImage : { ...styledImage, border: '' };

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={image}
        alt="Avatar"
        style={styledImage}
        width={width}
        height={height}
      />
      <br />
      {sizeTitle === undefined && (
        <h3 style={{ textTransform: 'capitalize' }}>{title}</h3>
      )}
      {sizeTitle === 'lg' && (
        <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>
      )}
      {sizeTitle === 'md' && (
        <h3 style={{ textTransform: 'capitalize' }}>{title}</h3>
      )}
      {sizeTitle === 'sm' && (
        <h5 style={{ textTransform: 'capitalize' }}>{title}</h5>
      )}
    </div>
  );
};
export default Image;
