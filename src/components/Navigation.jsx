import { IoTrendingDownOutline } from "react-icons/io5";
import { MdLocalMovies } from "react-icons/md";
import { PiFilmStripFill } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";

const Navigation = () => {
  const btnCls = "flex items-center flex-col  p-2 text-white cursor-pointer transition-transform ease-linear duration-150 hover:-translate-y-1";

  const [activeTab, setActiveTab] = useState("trending");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-around bg-[#1976d2] py-2 fixed bottom-0 w-full">
      <button className={btnCls+" "+(activeTab === "trending" ? "bg-[#165fa7]":"bg-transparent")} onClick={() => handleTabClick("trending")}>
        <IoTrendingDownOutline className="text-2xl" />
        <span className="text-xs mt-1">Trending</span>
      </button>
      <button className={btnCls +" "+(activeTab ==="Movies"  ? "bg-[#165fa7]":"bg-transparent")} onClick={() => handleTabClick("movies")}>
        <MdLocalMovies className="text-2xl" />
        <span className="text-xs mt-1">Movies</span>
      </button>
      <button className={btnCls +" "+(activeTab === "series"  ? " bg-[#165fa7]":"bg-transparent")} onClick={() => handleTabClick("series")}>
        <PiFilmStripFill className="text-2xl" />
        <span className="text-xs mt-1">Series</span>
      </button>
      <button className={btnCls +" "+(activeTab === "search"  ? " bg-[#165fa7]":"bg-transparent")} onClick={() => handleTabClick("search")}>
        <IoMdSearch className="text-2xl" />
        <span className="text-xs mt-1">Search</span>
      </button>
    </div>
  );
};

export default Navigation;
