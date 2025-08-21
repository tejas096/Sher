type PropType = {
  name: string;
  date: string;
  image: string;
};
const BlogCard = ({ name, date, image }: PropType) => {
  return (
    <div className="group h-full md:h-[380px] cursor-pointer w-[320px] sm:w-[480px] md:w-[600px] flex flex-col overflow-hidden gap-[15px] max-sm:gap-[10px] rounded-xl snap-center shrink-0 bg-[rgb(39,40,41)]">
      <div className="h-[250px] w-full overflow-hidden rounded-t-lg shrink-0">
        <img
          className="h-full w-full transition-all duration-300 ease-in-out rounded-t-lg object-cover object-center group-hover:scale-110"
          src={image}
          alt={name}
        />
      </div>
      <div className="px-[20px] flex flex-col gap-[10px]">
        <p className="text-[18px] text-[rgb(217,217,217)]">{date}</p>
        <h2 className="text-[28px] xs:text-[30px] font-semibold leading-[1.1em] transition-all duration-300 ease-in-out group-hover:text-[rgb(145,75,241)]">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default BlogCard;
