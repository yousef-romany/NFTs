import Agents from "@/components/index/Agents";
import Creators from "@/components/index/Creators";
import HowWork from "@/components/index/HowWork";
import Index from "@/components/index/Index";
import LiveAction from "@/components/index/LiveAction";
import Popular from "@/components/index/Popular";
import Ready from "@/components/index/Ready";

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
    </>
  );
}
