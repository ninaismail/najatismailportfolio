import Popup from './Popup'
import Slider from './Slider'
export default function Gallery({images, isOpen, onClose}) {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
    <div className="relative z-20 lg:w-[900px] md:w-[748px] sm:w-[620px] w-[270px] h-auto aspect-video">
    <Slider>
    {Array.isArray(images)&&images.map((item, i) => (
    <img
      key={i}
      className="w-full aspect-video mx-auto"
      //className="absolute w-full h-full top-0 left-0 rounded-[30px]"
      src={item.src}
      alt="Najat Ismail Projects"
      loading="lazy"
    />
    ))}
    </Slider>
    </div>
    </Popup>
  )
 }
 //width="1223" height="688"