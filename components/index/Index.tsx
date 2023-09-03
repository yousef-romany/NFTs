import Image from "next/image";
import heroImage from "../../app/img/Hero image.png";
import InfoData from "../../components/InfoData";
import Arrow from "@/components/Arrow";
let InfoDataArray = [
  {
    number: "32k+",
    text: "Artworks",
  },
  {
    number: "20k+",
    text: "Auctions",
  },
  {
    number: "12k+",
    text: "Creators",
  },
];
const Index = () => {
  return (
    <>
      <main className="flex min-h-screen h-fit relative items-center justify-between px-10 py-5 max-[1000px]:flex-col max-[1000px]:h-fit">
        <div className="w-[50%] h-full max-[1000px]:h-[50%] max-[1000px]:w-[100%] max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:justify-center max-[1000px]:gap-[10px]">
          <h1 className="text-7xl	text-left leading-[150px] max-[1000px]:leading-[50px] max-[1000px]:text-[45px] max-[1000px]:text-center">
            Explore, Buy and Sell the
            <span className="text-[#FFCE4E]">
              {" "}
              Best <br /> NFTs!
            </span>
          </h1>
          <div className="flex justify-between w-fit gap-6">
            <button className="w-[250px] h-[80px] font-black rounded-sm bg-[#FFCE4E] text-black max-[1000px]:h-[40px] max-[1000px]:w-[125px]">
              Explore
            </button>
            <button className="w-[250px] h-[80px] font-black rounded-sm border-[1px] border-[#FFCE4E] bg-opacity-20 backdrop-blur-lg bg-[#E9D7A7] max-[1000px]:h-[40px] max-[1000px]:w-[125px]">
              Create
            </button>
          </div>
          <div className="flex gap-5 justify-between items-center pr-[100px] pt-[40px] max-[1000px]:pt-[20px] max-[1000px]:pr-[0] overflow-hidden">
            {InfoDataArray?.map((item: any, key: any) => {
              return (
                <>
                  <InfoData number={item.number} text={item.text} key={key} />
                </>
              );
            })}
          </div>
        </div>
        <div className="w-[50%] h-full relative flex justify-center items-center max-[1000px]:h-[50%] max-[1000px]:w-[100%]">
          <div className="bg-[#4F464E] bg-opacity-20 backdrop-blur-lg absolute top-[-120px] z-[-999]	right-[-45px] h-[810px] w-full max-[1000px]:top-0 max-[1000px]:left-0 max-[1000px]:h-[405px]"></div>
          <Image
            src={heroImage}
            alt="hero Image"
            className="max-w-[400px] max-[1000px]:max-w-[250px]"
          />
        </div>
        <Arrow />
      </main>
    </>
  );
};
export default Index;
