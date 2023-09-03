"use client"
import Image from 'next/image'
import logo from "../app/img/logo.png";
import menu from "../app/img/menu.svg";
import Lilist from './Lilist';
import ButtonComponent from "./ButtonComponent";
import { useRef } from 'react';

const  Header = () => {
    const MenuBarElement: any = useRef();
    const handleMenuBar = () => {
        MenuBarElement.current.classList.toggle("max-[600px]:left-[-100%]");
    };
    return <>
        <div className="h-24 px-10	py-5 flex items-center justify-between"> 
            <Image src={ logo } alt="logo" />
            <Image src={ menu } alt='menu' className="hidden cursor-pointer max-[600px]:block" onClick={handleMenuBar} />
            <div className='h-full w-fit flex justify-between gap-[90px] max-[600px]:gap-[0px] max-[600px]:justify-around left-0 max-[600px]:left-[-100%] max-[600px]:absolute max-[600px]:top-24 max-[600px]:flex-col max-[600px]:w-full max-[600px]:bg-black max-[600px]:p-4 z-[999999]' ref={ MenuBarElement }>
                <ul className='flex gap-10 h-full justify-center max-[600px]:flex-col max-[600px]:w-full max-[600px]:h-fit'>
                    <Lilist linkName="Explore" />
                    <Lilist linkName="Creators" />
                    <Lilist linkName="Community" />
                </ul>
                <ButtonComponent />
            </div>
        </div>
    </>;
}
export default Header;