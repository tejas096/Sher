import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import myImage from "../assests/tejas.webp";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="bg-[rgb(39,40,41)] pointer-events-none lg:fixed h-full lg:h-[580px] w-[350px] xs:w-full sm:w-[560px] lg:w-[350px] rounded-xl flex justify-evenly items-center flex-col">
      <img
        className="rounded-xl object-cover object-center"
        src={myImage}
        alt="Tejas Jain"
        loading="eager"
        width={240}
        height={241}
      />
      <div>
        <h1 className="name text-[36px] text-center font-bold">Tejas Jain</h1>
        <div className="w-full flex text-[rgb(217,217,217)] justify-center text-[16px] items-center flex-col">
          <span>Full Stack Developer & DSA Enthusiast</span>
          <span>Bhopal, India</span>
        </div>
      </div>

      <div className="w-full flex justify-center items-center text-[rgb(217,217,217)] gap-[25px]">
        <a href="https://www.linkedin.com/in/tejas096/" target="_blank">
          <div className="bg-[rgb(39,40,41)] pointer-events-auto cursor-pointer h-[35px] w-[35px] flex items-center hover:text-white transition-all duration-300 ease-in-out justify-center rounded-lg hover:bg-[rgb(145,75,241)]">
            <Linkedin size={20} />
          </div>
        </a>
        <a href="https://github.com/tejas096" target="_blank">
          <div className="bg-[rgb(39,40,41)] pointer-events-auto cursor-pointer h-[35px] w-[35px] flex items-center hover:text-white transition-all duration-300 ease-in-out justify-center rounded-lg hover:bg-[rgb(145,75,241)]">
            <Github size={20} />
          </div>
        </a>
        <a href="https://www.instagram.com/_tejas_jain/" target="_blank">
          <div className="bg-[rgb(39,40,41)] pointer-events-auto cursor-pointer h-[35px] w-[35px] flex items-center hover:text-white transition-all duration-300 ease-in-out justify-center rounded-lg hover:bg-[rgb(145,75,241)]">
            <Instagram size={20} />
          </div>
        </a>
        <a href="mailto:tejasjain096@gmail.com">
          <div className="bg-[rgb(39,40,41)] pointer-events-auto cursor-pointer h-[35px] w-[35px] flex items-center hover:text-white transition-all duration-300 ease-in-out justify-center rounded-lg hover:bg-[rgb(145,75,241)]">
            <Mail size={20} />
          </div>
        </a>
      </div>
      <Link
        to={"/contact"}
        className="h-[44px] pointer-events-auto font-semibold w-[180px] rounded-lg flex justify-center items-center bg-[rgb(145,75,241)]"
      >
        Let's Talk
      </Link>
    </div>
  );
};

export default Profile;
