
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = ({children}) => {


  return (
    <Carousel>
        {children}
    </Carousel>
  );
};

export default Slider;