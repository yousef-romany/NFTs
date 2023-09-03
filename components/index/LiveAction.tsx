"use client";
import BigText from "./smallComponentIndex/BigText";
import Card from "./smallComponentIndex/Card";
import card from "../../app/img/card.png";
import card2 from "../../app/img/unsplash_GfQEdpIkkuw.png";
import card3 from "../../app/img/image 10.png";
import profileImage from "../../app/img/Profile image1.png";

let data: any = [
  {
    Love: 92,
    ETH: 4.89,
    Email: "by @wzard",
    Name: "Virtual Art",
    ImageUser: profileImage,
    ImageMain: card,
    Time: "03:18:24",
  },
  {
    Love: 92,
    ETH: 4.89,
    Email: "by @wzard",
    Name: "Virtual Art",
    ImageUser: profileImage,
    ImageMain: card2,
    Time: "03:18:24",
  },
  {
    Love: 92,
    ETH: 4.89,
    Email: "by @wzard",
    Name: "Virtual Art",
    ImageUser: profileImage,
    ImageMain: card3,
    Time: "03:18:24",
  },
];

const LiveAction = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col gap-4 pt-[100px] pb-[100px]  bg-opacity-20 backdrop-blur-lg">
        <div className="w-full h-fit flex justify-center items-center ">
          <BigText title="Live Auctions" colorTitle="#8613A5" />
        </div>
        <div className="w-full h-fit pl-[100px] max-[1000px]:pl-[10px] flex gap-[50px] pt-[100px] pb-[100px] overflow-hidden max-[600px]:flex-col max-[600px]:pl-[0px]">
          {data?.map((item: any, key: any) => {
            return (
              <>
                <Card
                  Love={item.Love}
                  ETH={item.ETH}
                  Email={item.Email}
                  Name={item.Name}
                  ImageUser={item.ImageUser}
                  ImageMain={item.ImageMain}
                  Time={item.Time}
                />
              </>
            );
          })}
        </div>
        <div className="w-full h-fit flex justify-center items-center">
          <button className="p-6 pt-[10px] pb-[10px] border text-[20px] border-[#FFCE4E]">View All</button>
        </div>
      </div>
    </>
  );
};

export default LiveAction;
