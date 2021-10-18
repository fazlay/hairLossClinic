import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  {
    url: 'https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/260/2018/05/03020437/Before-After-03.jpg',
  },
  {
    url: 'https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/260/2018/05/03020436/Before-After-04.jpg',
  },
  {
    url: 'https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/260/2018/05/03020438/Before-After-01.jpg',
  },
  {
    url: 'https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/260/2018/05/03020437/Before-After-02.jpg',
  },
];

const Slider = () => {
  return (
    <div className=' flex justify-center '>
     
      <SimpleImageSlider
        width={672}
        height={378}
        images={images}
        navStyle={1}
        navSize={50}
        navMargin={30}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};
export default Slider;
