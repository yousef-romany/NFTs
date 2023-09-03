"use client";

import { usePathname } from "next/navigation";

const Lilist = (props: any) => {
  const pathname = usePathname();
  return (
    <>
      <li className="flex justify-center items-center">
        <a
          className={
            pathname == "/" && props.linkName == "Explore" 
              ? "flex justify-center items-center border-[#FFCE4E] text-[#FFCE4E] border-solid border-b cursor-pointer"
              : "flex justify-center items-center cursor-pointer"
          }
        >
          {props.linkName}
        </a>
      </li>
    </>
  );
};
export default Lilist;
