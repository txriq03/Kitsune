"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./Banner";
import { useQuery } from "@tanstack/react-query";
import { getTrending } from "@/lib/queries";

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

  const { data: trending } = useQuery({
    queryKey: ['trendingData'],
    queryFn: () => getTrending()
  })


  return (
    <Slider {...settings}>
        {trending?.map((anime: any) => (
          <Banner key={anime.id} cover={anime.cover} />
        ))}
    </Slider>

  );
};

export default Carousel;
