const BigText = ({ colorTitle, title }: any) => {
  return (
    <>
      <h1 className="max-[600px]:text-[40px] before:content-[''] before:w-[110px] before:h-[110px] before:rounded-full before:absolute before:left-[-10%] before:top-[50%] before:re:translate-x-[-50%] before:translate-y-[-50%] text-[64px] relative text-white before:bg-[#E03054] before:z-[-999]">
        {title}
      </h1>
    </>
  );
};
export default BigText;
