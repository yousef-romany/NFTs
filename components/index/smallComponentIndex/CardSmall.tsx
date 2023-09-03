import Image from "next/image";

const CardSmall = ({ Love, ETH, Email, Name, ImageUser, ImageMain, Time }: any) => {
  return (
    <>
      <div className="flex flex-col h-fit w-[400px] max-[300px]:w-[100%] bg-[#3D2942] items-center p-2 pt-[40px] pb-[40px]">
        <div
          className={`max-[600px]:w-fit h-fit flex justify-center items-center relative before:content-[Time] before:absolute before:bottom-0 before:left-0 before:w-[194px] before:h-[66px] before:bg-[#8613A5] before:bg-opacity-20 before:backdrop-blur-sm before:flex before:justify-center before:items-center text-[25px] `}
        >
          <Image src={ImageMain} alt="img" className="w-[100%] max-h-[auto]" />
        </div>
        <div className="flex justify-between flex-col items-center h-fit w-full pt-[20px] p-[20px]">
          <div className="w-full h-fit flex gap-3 justify-between max-[600px]:flex-col max-[600px]:justify-center max-[600px]:items-center">
            <div className="w-full h-fit flex gap-3">
              <Image src={ImageUser} alt="profile" />
              <div className="flex justify-center items-center">
                <p className="text-[white]">{Name}</p>
              </div>
            </div>
            <div className="flex justify-center items-center w-fit h-fit">
              <p className="text-[20px] text-[#76607A]">{"ERC-721"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardSmall;
