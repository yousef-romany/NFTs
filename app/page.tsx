import Agents from "@/components/index/Agents";
import Creators from "@/components/index/Creators";
import HowWork from "@/components/index/HowWork";
import Index from "@/components/index/Index";
import LiveAction from "@/components/index/LiveAction";
import Popular from "@/components/index/Popular";
import Ready from "@/components/index/Ready";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Index />      
      <Agents />
      <LiveAction />
      <HowWork />
      <Popular />
      <Creators />
      <Ready />
      <div className="w-full h-fit p-[20px] flex justify-center items-center"> 
        <h1 className="text-white">
          Created By : <Link href={"https://yousefromany-dev-93bn.onrender.com/"}>
            yousef romany.
          </Link>
        </h1>
      </div>
    </>
  );
}
