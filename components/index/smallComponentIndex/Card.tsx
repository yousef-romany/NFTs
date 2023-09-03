import Image from "next/image";
import hurt from "../../../app/img/hurt.svg";

const Card = ({ Love, ETH, Email, Name, ImageUser, ImageMain, Time }: any) => {
  return (
    <>
      <div className="flex flex-col h-fit w-[500px] max-[600px]:w-[100%] bg-[#3D2942] items-center p-2 pt-[40px] pb-[40px]">
        <div className={`max-[600px]:w-fit h-fit flex justify-center items-center relative before:content-[Time] before:absolute before:bottom-0 before:left-0 before:w-[194px] before:h-[66px] before:bg-[#8613A5] before:bg-opacity-20 before:backdrop-blur-sm before:flex before:justify-center before:items-center text-[25px] `}>
          <Image src={ImageMain} alt="img" className="w-[100%] max-h-[auto]" />
        </div>
        <div className="flex justify-between flex-col items-center h-fit w-full pt-[20px] p-[20px]">
          <div className="w-full h-fit flex gap-3 justify-between max-[600px]:flex-col max-[600px]:justify-center max-[600px]:items-center">
            <div className="w-full h-fit flex gap-3">
                <Image src={ImageUser} alt="profile" />
                <div className="flex flex-col">
                    <p className="text-[white]">
                        { Name }
                    </p>
                    <p className="text-[#C6BFC8]">
                        { Email }
                    </p>
                </div>
            </div>
            <div className="flex gap-2 items-center w-fit h-fit"> 
                <Image src={hurt} alt="hurt" />
                <p className="text-[28px] text-[#76607A]">
                    {Love}
                </p>
            </div>
          </div>
          <div className="flex justify-between w-full pt-[20px]"> 
            <p className="text-[#C6BFC8]">
                Current Bid
            </p>
            <p className="text-white">
              {ETH} ETH  
            </p>
          </div>
        </div>
        <div className="w-full h-fit flex justify-center items-center">
            <button className="text-[24px] font-medium p-5 pt-2 pb-2 border border-white tracking-[4px]">Place a Bid</button>
        </div>
      </div>
    </>
  );
};

export default Card;
