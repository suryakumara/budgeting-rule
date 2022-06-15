import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },
  {
    label: "4",
    value: "4",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Sliders = () => {
  return (
    <div>
      <h1>Ini Slider</h1>
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item}>
            <div>{item.label}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
