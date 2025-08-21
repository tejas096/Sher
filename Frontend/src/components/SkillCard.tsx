type PropType = {
  name: string;
  title: string;
  image: string;
  addClass?: string;
};
const SkillCard = ({ name, title, image, addClass }: PropType) => {
  return (
    <div
      className={`${
        addClass && `${addClass}`
      } bg-[rgb(39,40,41)] hover:bg-[rgb(145,75,241)] hover:cursor-pointer transition-all duration-300 ease-in-out items-center gap-[20px] justify-start h-[85px] lg:h-[100px] w-[450px] sm:w-[250px] xl:w-[320px] rounded-lg p-[15px] flex`}
    >
      <div className="flex justify-center items-center bg-white h-[70px] w-[70px] rounded-lg">
        <img
          src={image}
          className="h-[70px] rounded-lg w-[70px] object-contain object-center"
          loading="lazy"
          alt={name}
        />
      </div>
      <div className="text-[26px] font-semibold leading-[1em]">
        {name} <br />
        <span className="text-[rgb(217,217,217)] [line-height:0rem] text-[16px] font-normal">
          {title}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
