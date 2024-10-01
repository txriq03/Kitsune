import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Banner = ({ cover }: any) => {

  return (
      <>
        <div className="w-full h-[350px] lg:h-[400px] xl:h-[450px] flex items-center">
          <Image className="w-full object-cover h-[350px] lg:h-[400px] xl:h-[450px]  blur-md brightness-[80%]" src={cover} width={1000} height={1000} priority alt='cover'/>          
        </div>
      </>

  );
};

export default Banner;
