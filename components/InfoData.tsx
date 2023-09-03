const InfoData = (props: any) => {
    return <>
        <div className="p-[10px] flex flex-col gap-3 w-full">
            <h1 className="font-extrabold text-4xl max-[600px]:text-[18px]">
                {props.number}
            </h1>
            <h6>
                {props.text}
            </h6>
        </div>
    </>;
};

export default InfoData;