import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Boilerplate = () => {
  return (
    <div className="font-['Outfit'] gap-[19px] min-h-screen select-none cursor-default bg-[rgb(16,17,18)] text-white w-full xs:px-[40px] pt-[20px] sm:px-[60px] lg:px-[40px] cen:px-[100px] flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Boilerplate;
