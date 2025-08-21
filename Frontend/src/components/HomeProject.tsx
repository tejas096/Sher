import ProjectCard from "./ProjectCard";
import Google from "../assests/project1.webp";
import Airbnb from "../assests/project2.webp";
import Amazon from "../assests/project3.webp";
import ChatGPT from "../assests/project4.webp";

const HomeSecond = () => {
  return (
    <div className="h-full lg:ml-auto w-[320px] xs:w-full md:w-[600px] xl:w-[700px] 2xl:w-[820px] flex flex-col gap-[35px] items-start">
      <h1 className="max-lg:w-full max-lg:text-center text-[36px] xs:text-[48px] xl:text-[68px] font-semibold leading-[1.1em]">
        Recent Projects
        <br /> and <span className="text-[rgb(145,75,241)]">Achievements</span>
      </h1>
      <div className="flex items-start xs:w-full w-[320px] md:w-[600px] xl:w-[700px] 2xl:w-[800px] scrollbar-hide overflow-y-hidden overflow-x-auto gap-[20px] snap-x snap-mandatory">
        <ProjectCard
          name={"Google Clone"}
          image={Google}
          title={
            "Responsive Google Search replica with minimalist UI, functional search bar, API integration, and optimized performance for a clean, fast, and user-friendly search experience."
          }
          link={"https://www.google.com/"}
        />
        <ProjectCard
          name={"Airbnb Clone"}
          image={Airbnb}
          title="Responsive Airbnb-style platform with property listings, advanced filters, booking system, and modern UI for seamless browsing and booking across devices."
          link={"https://www.airbnb.co.in/"}
        />
        <ProjectCard
          name={"Amazon Clone"}
          image={Amazon}
          title="E-commerce platform replicating Amazon with product listings, category filters, search, cart, and checkout, built for smooth, responsive, and optimized shopping experiences."
          link={"https://www.amazon.in/"}
        />
        <ProjectCard
          name={"ChatGPT Clone"}
          image={ChatGPT}
          title="Conversational AI app replicating ChatGPT with responsive design, smooth UI/UX, and real-time intelligent chat experiences across devices."
          link={"https://chatgpt.com/"}
        />
      </div>
    </div>
  );
};

export default HomeSecond;
