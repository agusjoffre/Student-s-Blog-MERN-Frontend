import './hero.css';

export default function ImageCircleContainer({ position, image }) {
  const postImgSrc = image;
  const rightImgSrc = '/logo.png';

  const containerStyle = {
    width: '796px',
    height: '403px',
    background: `url(${postImgSrc}) center/cover no-repeat`,
  };

  if (position === 'left') {
    containerStyle.borderTopRightRadius = '201px';
    containerStyle.borderBottomRightRadius = '201px';
  } else if (position === 'right') {
    containerStyle.borderTopLeftRadius = '201px';
    containerStyle.borderBottomLeftRadius = '201px';
    containerStyle.width = '350px';
    containerStyle.position = 'relative';
    containerStyle.left = '100px';
    containerStyle.right = '0';
    containerStyle.background = `url(${rightImgSrc}) center repeat`;
  }

  return (
    <div className="circle-container" style={containerStyle} />
  );
}
