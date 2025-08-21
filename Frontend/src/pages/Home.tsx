import { Suspense, lazy } from "react";
import Loading from "../components/Loading";
const HomeBlogs = lazy(() => import("../components/HomeBlogs"));
const HomeContact = lazy(() => import("../components/HomeContact"));
const HomeMain = lazy(() => import("../components/HomeMain"));
const HomeProject = lazy(() => import("../components/HomeProject"));
const HomeQue = lazy(() => import("../components/HomeQue"));
const HomeSkills = lazy(() => import("../components/HomeSkills"));
const Profile = lazy(() => import("../components/Profile"));

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="h-[calc(100vh-150px)] lg:h-[580px] w-full snap-y snap-mandatory overflow-y-scroll scrollbar-hide">
        <div className="lg:hidden flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]">
          <Profile />
        </div>
        <div className="h-full max-lg:items-center flex flex-col w-full snap-start max-lg:pb-[20px]">
          <div className="max-lg:hidden">
            <Profile />
          </div>
          <HomeMain />
        </div>
        <div className="flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]">
          <HomeProject />
        </div>
        <div className="flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]">
          <HomeSkills />
        </div>
        <div className="flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]">
          <HomeBlogs />
        </div>
        <div className="flex max-lg:items-center h-full flex-col w-full snap-start max-lg:pb-[20px]">
          <HomeQue />
        </div>
        <div className="flex max-lg:items-center h-full flex-col w-full snap-start">
          <HomeContact />
        </div>
      </div>
    </Suspense>
  );
};

export default Home;
