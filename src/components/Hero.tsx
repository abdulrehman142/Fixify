import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "/Fixify_images/searchicon.png";
import cleanerServiceImg from "/Fixify_images/cleaner.png";
import electricianServiceImg from "/Fixify_images/electrician.svg";
import plumberServiceImg from "/Fixify_images/plumber.svg";
import mechanicServiceImg from "/Fixify_images/mechanic.png";
import painterServiceImg from "/Fixify_images/painter.svg";
import carpenterServiceImg from "/Fixify_images/carpenter.svg";
import loadMoreIcon from "/Fixify_images/loading.png";

const Hero = () => {
  const [search, setSearch] = useState("Search for any service...");
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [bgLoaded, setBgLoaded] = useState(false);
  const navigate = useNavigate();

  // Preload background image
  useEffect(() => {
    const img = new Image();
    img.src = "/Fixify_images/herobg.png";
    img.onload = () => setBgLoaded(true);
  }, []);

  // Function to render your editable box
  const renderEditableBox = (
    id: string,
    text: string,
    setText: (val: string) => void
  ) => {
    const placeholder = "Search for services";

    return (
      <div
        className={`ml-4 mr-4 mt-2 rounded-2xl transition-all duration-200 w-200 cursor-text ${
          isFocused === id
            ? "bg-[#231212] dark:bg-black"
            : "bg-white dark:bg-white"
        }`}
      >
        <div
          id={id}
          className={`font-ibm-plex-mono p-2 m-2 text-base outline-none transition-all duration-200 focus:outline-none ${
            isFocused === id
              ? "text-white dark:text-white"
              : text === ""
              ? "text-white"
              : "text-[#908787] dark:text-black"
          }`}
          contentEditable
          suppressContentEditableWarning
          onFocus={() => {
            setIsFocused(id);
            const el = document.getElementById(id);
            if (el && el.innerText === placeholder) {
              el.innerText = "";
              setText("");
            }
          }}
          onBlur={(e) => {
            setIsFocused(null);
            // Restore placeholder if empty
            if (e.currentTarget.innerText.trim() === "") {
              e.currentTarget.innerText = placeholder;
              setText("");
            } else {
              setText(e.currentTarget.innerText);
            }
          }}
          onClick={(e) => {
            const el = e.currentTarget;
            if (el.innerText === placeholder) {
              el.innerText = "";
              setText("");
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSend();
            }
          }}
        >
          {text || placeholder}
        </div>
      </div>
    );
  };

  // Function to send the data (you can replace with API call)
  const handleSend = () => {
    console.log("Sending data:", search);
    alert(`Data sent: ${search}`);
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col text-white transition-all duration-500"
      style={{ 
        backgroundImage: bgLoaded ? "url('/Fixify_images/herobg.png')" : "none",
        backgroundColor: "#231212"
      }}
    >
      <div className="flex flex-col p-30">
        {/* Hero Heading */}
        <div className="font-ibm-plex-mono font-bold text-5xl py-4">
          Our experts will take <br /> it from here
        </div>

        {/* Editable Box + Button */}
        <div className="bg-white rounded-full py-3 px-6 flex items-center w-fit">
          <div className="text-black w-full">
            {renderEditableBox("editableDiv1", search, setSearch)}
          </div>

          <button
            onClick={handleSend}
            className="p-2 m-2 bg-black text-white font-ibm-plex-mono rounded-2xl hover:opacity-80 transition-all duration-200"
          >
            <img src={searchIcon} alt="search" className="h-6 w-6" loading="lazy" />
          </button>
        </div>
        <div className="font-ibm-plex-mono flex gap-2 p-2 m-2 flex-wrap">
          <div className="flex bg-[#231212] hover:bg-[#422727] dark:hover:bg-gray-800 dark:bg-black p-3 rounded items-center gap-1 transition-all duration-200">
            <img src={cleanerServiceImg} alt="cleaner" className="w-5 h-5" loading="lazy" />
            <button className="text-white text-sm">Cleaner</button>
          </div>
          <div className="flex bg-[#231212] hover:bg-[#422727] dark:hover:bg-gray-800 dark:bg-black p-3 rounded items-center gap-1 transition-all duration-200">
            <img src={plumberServiceImg} alt="plumber" className="w-5 h-5" loading="lazy" />
            <button className="text-white text-sm">Plumber</button>
          </div>
          <div className="flex bg-[#231212] hover:bg-[#422727] dark:hover:bg-gray-800 dark:bg-black p-3 rounded items-center gap-1 transition-all duration-200">
            <img src={painterServiceImg} alt="painter" className="w-5 h-5" loading="lazy" />
            <button className="text-white text-sm">Painter</button>
          </div>
          <div className="flex bg-[#231212] hover:bg-[#422727] dark:hover:bg-gray-800 dark:bg-black p-3 rounded items-center gap-1 transition-all duration-200">
            <img src={carpenterServiceImg} alt="carpenter" className="w-5 h-5" loading="lazy" />
            <button className="text-white text-sm">Carpenterr</button>
          </div>
          <div className="flex bg-[#231212] hover:bg-[#422727] dark:hover:bg-gray-800 dark:bg-black p-0 rounded items-center transition-all duration-200">
            <img src={electricianServiceImg} alt="electrician" className="w-8 h-8" loading="lazy" />
            <button className="text-white text-center text-sm pr-3">Electrician</button>
          </div>
          <div className="flex bg-[#231212] hover:bg-[#422727] dark:hover:bg-gray-800 dark:bg-black p-3 rounded items-center gap-1 transition-all duration-200">
            <img src={mechanicServiceImg} alt="mechanic" className="w-5 h-5" loading="lazy" />
            <button className="text-white text-sm">Mechanic</button>
          </div>
          <div className="flex items-center bg-[#231212] dark:hover:bg-gray-800 dark:bg-black rounded hover:bg-[#422727] ">
            <img src={loadMoreIcon} alt="load" className="w-6 h-5 pl-1" loading="lazy" />
            <button 
            onClick={() => navigate("/services")}
            className="text-white pl-2 p-3 transition-all duration-200 text-sm"
          >
            Load More
          </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
