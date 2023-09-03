import BigText from "./smallComponentIndex/BigText";
import profileImage from "../../app/img/Ellipse 2.png";
import card from "../../app/img/card.png";
import CardSmall from "./smallComponentIndex/CardSmall";
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
    ImageMain: card,
    Time: "03:18:24",
  },
  {
    Love: 92,
    ETH: 4.89,
    Email: "by @wzard",
    Name: "Virtual Art",
    ImageUser: profileImage,
    ImageMain: card,
    Time: "03:18:24",
  },
];
const Popular = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col gap-4 pt-[100px] pb-[100px]  bg-opacity-20 backdrop-blur-lg">
        <div className="w-full h-fit flex justify-center items-center ">
          <BigText title="Popular Collections" colorTitle="#E03054" />
        </div>
        <div className="w-full h-fit pl-[0px] max-[1000px]:pl-[0px] flex gap-[50px] pt-[100px] pb-[100px] overflow-hidden max-[600px]:flex-col max-[600px]:pl-[0px] justify-center items-center">
          {data?.map((item: any, key: any) => {
            return (
              <>
                <CardSmall
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
          <button className="p-6 pt-[10px] pb-[10px] border text-[20px] border-[#FFCE4E]">
            View All
          </button>
        </div>
      </div>
    </>
  );
};

export default Popular;
