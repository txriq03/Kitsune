import Image from "next/image";

interface bannerProps {
  cover: string,
  title: string,
  description: string
}

const Banner = ({ cover, title, description}: bannerProps) => {

  return (
      <>
        <div className="w-full h-[350px] lg:h-[400px] xl:h-[450px] flex items-center relative">

          {/* Anime cover */}
          <Image className="w-full object-cover h-[350px] lg:h-[400px] xl:h-[450px] blur-sm brightness-[70%]" src={cover} width={1000} height={1000} priority alt='cover'/>    

          {/* Content on anime cover */}
          <div className="absolute p-10 w-[800px] xl:w-[950px] 2xl:w-[1280px] h-full left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <h1 className="text-[3rem] font-bold">{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </>

  );
};

export default Banner;
