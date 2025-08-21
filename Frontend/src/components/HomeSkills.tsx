import Java from "../assests/java.webp";
import React from "../assests/react.webp";
import NextJs from "../assests/next.webp";
import Typescript from "../assests/typescript.webp";
import NodeJs from "../assests/node.webp";
import Sql from "../assests/sql.webp";
import SkillCard from "./SkillCard";

const HomeSkills = () => {
  return (
    <div className="h-full lg:ml-auto w-[320px] xs:w-full md:w-[600px] xl:w-[700px] 2xl:w-[820px] max-sx:pb-[10px] flex flex-col gap-[20px] sx:gap-[45px] items-start">
      <h1 className="max-lg:w-full max-lg:text-center text-[36px] sm:text-[48px] xl:text-[68px] font-semibold leading-[1.1em]">
        Top-Tier Tools for
        <br /> Exceptional{" "}
        <span className="text-[rgb(145,75,241)]">Results</span>
      </h1>
      <div className="flex flex-wrap w-full gap-[10px] xs:gap-[20px]">
        <SkillCard name={"Java"} title={"Powerful Programming"} image={Java} />
        <SkillCard name={"NextJs"} title={"Web Framework"} image={NextJs} />
        <SkillCard name={"React"} title={"Dynamic Interfaces"} image={React} />
        <SkillCard
          name={"Typescript"}
          title={"Typed JavaScript"}
          image={Typescript}
        />
        <SkillCard name={"NodeJs"} title={"Backend Runtime"} image={NodeJs} />
        <SkillCard
          addClass="max-sm:hidden"
          name={"Sql"}
          title={"Data Management"}
          image={Sql}
        />
      </div>
    </div>
  );
};

export default HomeSkills;
