import Image from "next/image";

const Banner = ({ cover }: any) => {

  return (
      <>
        <div className="w-full h-[350px] lg:h-[400px] xl:h-[450px] flex items-center relative">

          {/* Anime cover */}
          <Image className="w-full object-cover h-[350px] lg:h-[400px] xl:h-[450px] blur-sm brightness-[70%]" src={cover} width={1000} height={1000} priority alt='cover'/>    

          {/* Content on anime cover */}
          <div className="absolute p-10 bg-green-300 w-[800px] xl:w-[950px] 2xl:w-[1280px] h-full left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <h2>Test</h2>
          </div>
        </div>
      </>

  );
};

export default Banner;
