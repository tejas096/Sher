import {
  House,
  Folder,
  Wrench,
  Briefcase,
  Newspaper,
  Mail,
  GraduationCap,
  ArrowDownToLine,
} from "lucide-react";
import WrapIcons from "./WrapIcons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[rgb(39,40,41)] lg:h-[48px] md:w-[760px] lg:w-[800px] xl:w-[1200px] self-center rounded-xl flex py-[5px] px-[30px] items-center">
      <NavLink className="hidden mr-auto lg:block" to="/">
        <div className="font-['Righteous'] text-[rgb(145,75,241)] hover:scale-110 text-[32px]">
          TJ.
        </div>
      </NavLink>
      <ul className="flex gap-[8px] lg:mx-auto">
        <li>
          <WrapIcons
            link="/"
            tooltip="Home"
            children={<House size={20} className="cursor-pointer" />}
          />
        </li>
        <li>
          <WrapIcons
            link="/projects"
            tooltip="Projects"
            children={<Folder size={20} className="cursor-pointer" />}
          />
        </li>
        <li>
          <WrapIcons
            link="/tools"
            tooltip="Skills"
            children={<Wrench size={20} className="cursor-pointer" />}
          />
        </li>
        <li>
          <WrapIcons
            link="/experience"
            tooltip="Experience"
            children={<Briefcase size={20} className="cursor-pointer" />}
          />
        </li>
        <li>
          <WrapIcons
            link="/education"
            tooltip="Eductaion"
            children={<GraduationCap size={20} className="cursor-pointer" />}
          />
        </li>
        <li>
          <WrapIcons
            link="/blogs"
            tooltip="Blogs"
            children={<Newspaper size={20} className="cursor-pointer" />}
          />
        </li>
        <li>
          <WrapIcons
            link="/contact"
            tooltip="Contact"
            children={<Mail size={20} className="cursor-pointer" />}
          />
        </li>
      </ul>
      <div className="md:flex hidden gap-[30px] ml-auto items-center">
        <div className="flex gap-[5px] items-center cursor-pointer transition-all duration-300 ease-in-out hover:text-[rgb(145,75,241)]">
          <div>
            <ArrowDownToLine size={16} />
          </div>
          <p className="text-[18px] font-['Roboto+Slab']">RESUME</p>
        </div>
        <div className="flex gap-[5px] items-center cursor-pointer transition-all duration-300 ease-in-out hover:text-[rgb(145,75,241)]">
          <div>
            <ArrowDownToLine size={16} />
          </div>
          <p className="text-[18px] font-['Roboto+Slab']">CV</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
