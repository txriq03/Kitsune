'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTrending } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const Banner = ({ cover }: any) => {
  
  const { data: trending } = useQuery({
    queryKey: ['trendingData'],
    queryFn: () => getTrending()
  })


  return (
      <>
        <Image className="w-full" src={cover} width={1000} height={1000} priority alt='cover'/>
      </>

  );
};

export default Banner;
