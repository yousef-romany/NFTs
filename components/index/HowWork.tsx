import Image from "next/image";
import arrow2 from "../../app/img/arrow2.svg";

import wallet from "../../app/img/Wallet.png";
import wallet2 from "../../app/img/Group 36711.png";
import wallet3 from "../../app/img/Group 36712.png";
import wallet4 from "../../app/img/Group 36713.png";

const HowWork = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col justify-center items-center gap-2">
        <h1 className="text-4xl p-3">How it Works</h1>
        <div className="flex p-7 justify-evenly items-center max-[600px]:flex-col">
            <div className="flex flex-col gap-3 justify-center items-center">
                <Image src={wallet} alt="Set up Your Wallet" /> 
                <h2 className="text-[#FFCE4E]">
                    Set up Your Wallet
                </h2>
            </div>
            <Image src={arrow2} alt="arrow" className="max-[600px]:rotate-90 max-[600px]:h-[200px]" />
            <div className="flex flex-col gap-3 justify-center items-center">
                <Image src={wallet2} alt="Set up Your Wallet" /> 
                <h2 className="text-[#FFCE4E]">
                    Create Your Collection
                </h2>
            </div>
            <Image src={arrow2} alt="arrow" className="max-[600px]:rotate-90 max-[600px]:h-[200px]" />
            <div className="flex flex-col gap-3 justify-center items-center">
                <Image src={wallet3} alt="Set up Your Wallet" /> 
                <h2 className="text-[#FFCE4E]">
                    Add Your NFTS
                </h2>
            </div>
            <Image src={arrow2} alt="arrow" className="max-[600px]:rotate-90 max-[600px]:h-[200px]" />
            <div className="flex flex-col gap-3 justify-center items-center">
                <Image src={wallet4} alt="Set up Your Wallet" /> 
                <h2 className="text-[#FFCE4E]">
                    List Them For Sale
                </h2>
            </div>
        </div>
      </div>
    </>
  );
};

export default HowWork;
