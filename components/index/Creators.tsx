import BigText from "./smallComponentIndex/BigText";
import profileImage1 from "../../app/img/Profile image1 (1).png";
import profileImage2 from "../../app/img/Ellipse 2 (1).png";
import profileImage3 from "../../app/img/Ellipse 14.png";
import profileImage4 from "../../app/img/Mask Group.png";
import Image from "next/image";

let data: any = [
  {
    Love: 92,
    ETH: 4.89,
    Email: "by @wzard",
    Name: "Virtual Art",
    ImageUser: profileImage1,
    Time: "03:18:24",
  },
  {
    Love: 92,
    ETH: 4.89,
    Email: "by @wzard",
    Name: "Virtual Art",
    ImageUser: profileImage2,
    Time: "03:18:24",
  },
  {
    Love: 92,
    ETH: 4.89,
    Email: "by @wzard",
    Name: "Virtual Art",
    ImageUser: profileImage3,
    Time: "03:18:24",
  },
  {
    Love: 92,
    ETH: 4.89,
    Email: "by @wzard",
    Name: "Virtual Art",
    ImageUser: profileImage4,
    Time: "03:18:24",
  }
];

const Creators = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col gap-4 pt-[100px] pb-[100px]  bg-opacity-20 backdrop-blur-lg">
        <div className="w-full h-fit flex justify-center items-center ">
          <BigText title="Top Creators" colorTitle="#8613A5" />
        </div>
        <div className="w-full h-fit pl-[100px] max-[1000px]:pl-[10px] flex gap-[100px] pt-[100px] pb-[100px] overflow-hidden max-[600px]:flex-col  max-[600px]:pl-[0px] flex-wrap p-7 justify-center items-center pr-0">
          {data?.map((item: any, key: any) => {
            return (
              <>
                <div className="w-[600px] max-[600px]:w-full h-[auto] p-4 flex bg-[#302034] border-l border-[#E03054] gap-2">
                  <div className="w-[70%] h-full flex gap-4 border-r">
                    <Image src={item.ImageUser} alt="Creators" />
                    <div className="flex flex-col justify-center items-start">
                      <p className="text-[20px] text-left">Wzard Dee</p>
                      <p className="text-[16px] text-[#BDAAC1] text-left">4.89 ETH</p>
                    </div>
                  </div>
                  <div className="h-full w-[30%] flex flex-col gap-2 justify-center items-center max-[600px]:h-auto ">
                    <p className="text-[20px]">33</p>
                    <p className="text-[16px] text-[#BDAAC1]">items</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="w-full h-fit flex justify-center items-center">
          <button className="p-6 pt-[10px] pb-[10px] border text-[20px] border-[#FFCE4E]">
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default Creators;
