"use client";
import Banner from "./Banner";
import { useQuery } from "@tanstack/react-query";
import { getTrending } from "@/lib/queries";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Carousel = () => {

  const { data: trending } = useQuery({
    queryKey: ["trendingData"],
    queryFn: () => getTrending(),
  });

  return (
    <Swiper
      autoplay={{ delay: 5000}}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >

      {trending?.map((anime: any, index: number) => (
        <SwiperSlide key={index}>
          <Banner cover={anime.cover} title={anime.title.english} description={anime.description}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
