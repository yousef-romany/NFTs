import Image from "next/image";
import scrollImage from "../app/img/Scroll button.png"
const Arrow = () => {
    return <>

        <Image src={scrollImage} className="cursor-pointer absolute top-[100%] z-[999] left-[50%] translate-x-[-50%] translate-y-[-50%] max-[1000px]:hidden" alt="scroll" />
    </>;
}
export default Arrow;