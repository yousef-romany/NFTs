import Link from "next/link";

const FooterSections = (props : any) => {
    let DetailsData: [] = props.details;
    return <>
        <div className="flex flex-col w-[300px] gap-5 max-[600px]:w-fit">
            <h1 className="text-white pb-[10px]">
                {props.title}
            </h1>
            {
                DetailsData?.map((item: any, key: any) => {
                    return <>
                        <Link href={"/"} key={key} className="text-[#96839B] text-sm tracking-wide">
                            {item}
                        </Link>
                    </>;
                })
            }
        </div>
    </>;
}
export default FooterSections;

// title, details