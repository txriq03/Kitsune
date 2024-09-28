"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTrending } from "@/lib/queries";
import { useEffect, useState } from "react";

const Banner = () => {
  const [trending, setTrending] = useState();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  useEffect(() => {
    const data: any = getTrending();
    setTrending(data);
    console.log(trending);
  }, []);

  return (
    // <Slider {...settings}>
    //   {/* <div>
    //     <h3>1</h3>
    //   </div>
    //   <div>
    //     <h3>2</h3>
    //   </div>
    //   <div>
    //     <h3>3</h3>
    //   </div>
    //   <div>
    //     <h3>4</h3>
    //   </div>
    //   <div>
    //     <h3>5</h3>
    //   </div>
    //   <div>
    //     <h3>6</h3>
    //   </div> */}

    //   {trending?.map((anime: any) => (
    //     <div>{anime.title}</div>
    //   ))}
    // </Slider>

    <h1> {trending} </h1>
  );
};

export default Banner;
