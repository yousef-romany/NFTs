import coinbase from "../../app/img/coinbase.png";
import binance from "../../app/img/binance.png";
import blockchain from "../../app/img/blockchain.png";
import bitmex from "../../app/img/bitmex.png";
import Image from "next/image";
let data: any = [
    {
        name: "Agents",
        img: coinbase
    },
    {
        name: "Agents",
        img: binance
    },
    {
        name: "Agents",
        img: blockchain
    },
    {
        name: "Agents",
        img: bitmex
    },
]
const Agents = () => {
    return <>
        <div className="w-full h-fit pt-[150px] pb-[150px] flex justify-evenly items-center flex-wrap gap-[40px]">
            {
                data?.map((item: any, key: any) => {
                    return <>
                        <Image src={item.img} alt={item.name} key={key} className="max-h-[40px] w-[auto] cursor-pointer" />
                    </>
                })
            }
        </div>
    </>;
}

export default Agents;