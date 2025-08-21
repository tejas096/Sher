import BlogCard from "./BlogCard";
import Blog1 from "../assests/blog1.webp";
import Blog2 from "../assests/blog2.webp";
import Blog3 from "../assests/blog3.webp";
import Blog4 from "../assests/blog4.webp";

const HomeBlogs = () => {
  return (
    <div className="h-full lg:ml-auto w-[320px] xs:w-full md:w-[600px] xl:w-[700px] 2xl:w-[820px] flex flex-col gap-[35px] items-start">
      <h1 className="max-lg:w-full max-lg:text-center text-[36px] xs:text-[48px] xl:text-[68px] font-semibold leading-[1.1em]">
        Design Thoughts
        <br /> and <span className="text-[rgb(145,75,241)]">Perspectives</span>
      </h1>
      <div className="flex h-full overflow-y-hidden items-start xs:w-full w-[320px] md:w-[600px] xl:w-[700px] 2xl:w-[800px] scrollbar-hide overflow-x-auto gap-[20px] snap-x snap-mandatory">
        <BlogCard
          name={
            "The Rise of AI Agents: How They’re Transforming Everyday Tasks"
          }
          date={"Mar 10, 2025"}
          image={Blog1}
        />
        <BlogCard
          name={
            "The Future of Cloud Computing: Serverless, Edge, and AI Integration"
          }
          date={"Apr 10, 2025"}
          image={Blog2}
        />
        <BlogCard
          name={
            "The State of Cybersecurity in 2025: AI Defenses and New Threats"
          }
          date={"May 10, 2025"}
          image={Blog3}
        />
        <BlogCard
          name={
            "5G and Beyond: How Ultra-Fast Networks are Powering the Next Internet"
          }
          date={"June 10, 2025"}
          image={Blog4}
        />
      </div>
    </div>
  );
};

export default HomeBlogs;
