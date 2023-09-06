import Image from "next/image";
import logo from "../app/img/logo_large.png";
import FooterSections from "./FooterSections";
import youtube from "../app/img/youtube.png";
import tiwtter from "../app/img/tiwtter.png";
import facebook from "../app/img/facebook.png";
import google from "../app/img/google.png";
import Link from "next/link";

let FooterSectionsData: any = [
  {
    title: "About Us",
    details: ["About NFTS", "Live Auctions", "NFT Blog", "Activity"],
  },
  {
    title: "Support",
    details: [
      "Help & Support",
      "Items Details",
      "Auther Profile",
      "Collection",
    ],
  },
];
let dataIcons: any = [
  {
    name: "Youtube",
    img: youtube,
  },
  {
    name: "Tiwtter",
    img: tiwtter,
  },
  {
    name: "FaceBook",
    img: facebook,
  },
  {
    name: "Google",
    img: google,
  },
];

const Footer = () => {
  return (
    <>
      <div className="overflow-hidden w-full h-fit flex gap-8 pl-10 pr-10 pt-20 pb-20 max-[1000px]:flex-col max-[1000px]:justify-center max-[1000px]:items-center  bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
        <Image src={logo} alt="logo NFT" className="w-[200px] max-h-[200px]" />
        <div className="flex flex-wrap justify-start pt-[6px] gap-x-[120px]	h-fit max-[1000px]:flex-col max-[1000px]:gap-y-[60px] max-[1000px]:justify-center max-[1000px]:items-center">
          <p className="text-[#96839B] max-w-[320px] text-left h-fit max-[1000px]:text-[12px]">
            Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla
            pharetra gravida est.
          </p>
          <div className="flex justify-center items-center gap-5">
          {FooterSectionsData?.map((item: any, key: any) => {
            return (
              <>
                <FooterSections
                  title={item.title}
                  details={item.details}
                  key={key}
                />
              </>
            );
          })}
          </div>
          <div className="w-[300px] h-fit gap-6 flex flex-col">
            <div className="flex gap-[60px]">
              {dataIcons?.map((item: any, key: any) => {
                return (
                  <>
                    <Link href={"/"}>
                      <Image src={item.img} alt={item.name} key={key} />
                    </Link>
                  </>
                );
              })}
            </div>
            <p className="text-[#96839B]">All rights reserved@2021</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
