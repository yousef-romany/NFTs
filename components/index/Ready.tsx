const Ready = () => {
    return <>
        <div className="backgroundPattern w-full h-[500px] max-[600px]:h-fit bg-opacity-50 backdrop-blur-xl drop-shadow-lg flex flex-col gap-10 p-5 justify-center items-center"> 
            <h1 className="text-[64px] max-[600px]:text-[50px] max-[600px]:text-center">
                Ready for Next NFT Drop?
            </h1>
            <div className="flex h-[96px] w-fit max-[600px]:flex-col max-[600px]:h-fit max-[600px]:gap-[20px] justify-center items-center">
                <input type="email" placeholder="info@gmail.com" className=" max-[600px]:w-full max-[600px]:h-[100px] outline-none h-full w-[480px] border-[2px] border-[#E7B226] bg-transparent text-3xl p-4 pl-8" />
                <button className="h-full w-[200px] bg-[#E7B226] max-[600px]:h-[100px]">Subscribe</button>
            </div>
        </div>
    </>;
};

export default Ready;