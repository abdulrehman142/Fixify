import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import si from "/Fixify_images/searchicon.jpg";
import cleanerImg from "/Fixify_images/cleaner.png";
import electricianImg from "/Fixify_images/electrician.svg";
import plumberImg from "/Fixify_images/plumber.svg";
import mechanicImg from "/Fixify_images/mechanic.png";
import painterImg from "/Fixify_images/painter.svg";
import carpenterImg from "/Fixify_images/carpenter.svg";
import load from "/Fixify_images/loading.png";

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
        onClick={() => {
          const el = document.getElementById(id);
          if (el) {
            el.focus();
            if (el.innerText === placeholder) el.innerText = "";
          }
        }}
      >
        <div
          id={id}
          className={`font-ibm-plex-mono p-2 m-2 text-base outline-none transition-all duration-200 ${
            isFocused === id
              ? "text-white dark:text-white"
              : text === ""
              ? "text-white"
              : "text-[#908787] dark:text-black"
          }`}
          contentEditable
          suppressContentEditableWarning
          onFocus={() => setIsFocused(id)}
          onBlur={(e) => {
            if (isFocused === id) setIsFocused(null);
            // Restore placeholder if empty
            if (e.currentTarget.innerText.trim() === "") {
              e.currentTarget.innerText = placeholder;
              setText(""); // clear state
            } else {
              setText(e.currentTarget.innerText); // update state with user text
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
            <img src={si} alt="search" className="h-6 w-6" />
          </button>
        </div>
        <div className="font-ibm-plex-mono flex gap-2 p-2 m-2 flex-wrap">
          <div className="flex bg-[#231212] hover:bg-[#422727] dark:bg-black p-3 rounded items-center gap-1 transition-all duration-200">
            <img src={cleanerImg} alt="cleaner" className="w-5 h-5" loading="lazy" />
            <button className="text-white text-sm">Cleaner</button>
          </div>
          <div className="flex bg-[#231212] hover:bg-[#422727] dark:bg-black p-3 rounded items-center gap-1 transition-all duration-200">
            <img src={plumberImg} alt="plumber" className="w-5 h-5" loading="lazy" />
            <button className="text-white text-sm">Plumber</button>
          </div>
          <div className="flex bg-[#231212] hover:bg-[#422727] dark:bg-black p-3 rounded items-center gap-1 transition-all duration-200">
            <img src={painterImg} alt="painter" className="w-5 h-5" loading="lazy" />
            <button className="text-white text-sm">Painter</button>
          </div>
          <div className="flex bg-[#231212] hover:bg-[#422727] dark:bg-black p-3 rounded items-center gap-1 transition-all duration-200">
            <img src={carpenterImg} alt="carpenter" className="w-5 h-5" loading="lazy" />
            <button className="text-white text-sm">Carpenterr</button>
          </div>
          <div className="flex bg-[#231212] hover:bg-[#422727] dark:bg-black p-3 rounded items-center gap-1 transition-all duration-200">
            <img src={electricianImg} alt="electrician" className="w-5 h-5" loading="lazy" />
            <button className="text-white text-sm">Electrician</button>
          </div>
          <div className="flex bg-[#231212] hover:bg-[#422727] dark:bg-black p-3 rounded items-center gap-1 transition-all duration-200">
            <img src={mechanicImg} alt="mechanic" className="w-5 h-5" loading="lazy" />
            <button className="text-white text-sm">Mechanic</button>
          </div>
          <div className="flex items-center bg-[#231212] dark:bg-black rounded hover:bg-[#422727] ">
            <img src={load} alt="load" className="w-6 h-5 pl-1" loading="lazy" />
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
