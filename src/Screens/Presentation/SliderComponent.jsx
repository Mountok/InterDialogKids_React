// SliderComponent.jsx
import React from 'react';
import Slider from 'react-slick';
import { useSpring, animated } from 'react-spring';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './mianSlider.css'; // файл для кастомных стилей

const SliderComponent = () => {
  const settings = {
    dots: false, // Убираем точки
    infinite: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    pauseOnHover: false,
    autoplay: true, // Включаем автоматическое переключение
    autoplaySpeed: 7000, // Интервал в миллисекундах (3 секунды)
    arrows: false, // Убираем кнопки навигации
  };

  const slides = [
    {
      id: 1,
      imageUrl: '/images/kids.jpg',
    },
    {
      id: 2,
      imageUrl: '/images/children_22.jpeg',

    },
    {
      id: 3,
      imageUrl: '/images/children_33.jpeg',
    },
    {
        id: 4,
        imageUrl: '/images/children_44.jpeg',
      },
      {
        id: 5,
        imageUrl: '/images/children_55.jpeg',
      },
  ];

  return (
    <Slider className='main_slider' {...settings}>
      {slides.map(slide => (
        <Slide key={slide.id} imageUrl={slide.imageUrl} />
      ))}
    </Slider>
  );
};

const Slide = ({ imageUrl }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 }
  });

  return (
    <animated.div style={props} className="slide">
      <img className="slide_image"  src={imageUrl} alt="slide" />
    </animated.div>
  );
};

export default SliderComponent;
