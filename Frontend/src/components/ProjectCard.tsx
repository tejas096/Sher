import { Link } from "lucide-react";

type PropType = {
  name: string;
  title: string;
  image: string;
  link: string;
};

const ProjectCard = ({ name, title, image, link }: PropType) => {
  return (
    <div className="group h-full cursor-pointer w-[320px] sm:w-[480px] md:w-[600px] p-[20px] flex flex-col justify-between gap-[20px] rounded-xl snap-center shrink-0 bg-[rgb(39,40,41)]">
      <div className="flex pr-[5px] sm:pr-[30px] justify-between items-center">
        <h1 className="group-hover:text-[rgb(145,75,241)] transition-all duration-300 ease-in-out text-[36px] sm:text-[44px] font-semibold leading-[1.1em]">
          {name}
        </h1>
        <a href={link} target="_blank" className="text-[rgb(217,217,217)]">
          <Link
            size={26}
            className="cursor-pointer hover:text-[rgb(145,75,241)] transition-all duration-300 ease-in-out"
          />
        </a>
      </div>
      <div className="flex max-sm:flex-col max-sm:justify-center max-sm:items-center gap-[10px]">
        <div className="overflow-hidden h-[150px] lg:h-[220px] rounded-lg w-[250px] sm:w-[200px] md:w-[300px] shrink-0">
          <img
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            src={image}
            loading="lazy"
            alt={name}
          />
        </div>
        <div className="text-[18px] text-[rgb(217,217,217)]">{title}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
