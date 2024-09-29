'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getTrending } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";

const Banner = () => {
  
  const { data: trending } = useQuery({
    queryKey: ['trendingData'],
    queryFn: () => getTrending()
  })


  return (
      <>
        {trending?.results?.map((anime: any) => {
          return <div>{anime.title.english}</div>
        })}
      </>

  );
};

export default Banner;
