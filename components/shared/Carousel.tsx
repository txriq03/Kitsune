"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTrending } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";
import Banner from "./Banner";

const Carousel = () => {
  // const [trending, setTrending] = useState();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  // useEffect(() => {
  //   const data: any = getTrending();
  //   setTrending(data);
  //   console.log(trending);
  // }, []);


  return (
    <Slider {...settings}>
        <Banner />
    </Slider>


  );
};

export default Carousel;
