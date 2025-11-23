import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from "/Fixify_images/searchicon.png";
import phoneImg from "/Fixify_images/phone.png";

const Hero = () => {
  const [search, setSearch] = useState("Search for any service...");
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const navigate = useNavigate();

  // Hero section images carousel
  const heroImages = [
    "/Fixify_images/team.png",
    "/Fixify_images/plumber.webp",
    "/Fixify_images/painter.jpg"
  ];

  // Auto-scroll images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  // Function to render your editable box
  const renderEditableBox = (
    id: string,
    text: string,
    setText: (val: string) => void
  ) => {
    const placeholder = "Search for services";

    return (
      <div
        className={`ml-4 mr-4 mt-2 rounded-2xl transition-all duration-200 cursor-text ${
          isFocused === id
            ? "bg-[#422727] dark:bg-gray-800"
            : "bg-white dark:bg-[#231212]"
        }`}
      >
        <div
          id={id}
          className={`font-ibm-plex-mono p-2 m-2 text-base outline-none transition-all duration-200 focus:outline-none ${
            isFocused === id
              ? "text-white dark:text-white"
              : text === ""
              ? "text-white"
              : "text-[#908787] dark:text-white"
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
    <div className="bg-white dark:bg-black">
    <div className="flex flex-col md:flex-row text-white transition-all duration-500 min-h-screen md:min-h-screen min-h-auto">
      <div className="flex flex-col p-4 md:p-10 flex-1 justify-center md:justify-center">
        {/* Hero Heading */}
        <div className="font-ibm-plex-mono text-[#231212] dark:text-white font-bold text-3xl md:text-5xl py-2 md:py-4">
          Our experts <br/>will take <br /> it from here
        </div>
<div className="font-ibm-plex-mono text-black dark:text-white text-base md:text-xl py-2 md:py-4" >
  Trusted professionals,<br/>reliable service,every time.
</div>
        {/* Editable Box + Button */}
        <div className="bg-[#231212] border-4 border-[#231212] dark:bg-black rounded-full py-3 px-4 md:px-6 flex items-center w-fit">
          <div className="text-black w-full">
            {renderEditableBox("editableDiv1", search, setSearch)}
          </div>

          <button
            onClick={handleSend}
            className="p-2 m-2 bg-white dark:bg-[#231212] text-white font-ibm-plex-mono rounded-2xl hover:bg-[#422727] dark:hover:bg-gray-800 transition-all duration-200"
          >
            <img src={searchIcon} alt="search" className="h-6 w-6" loading="lazy" />
          </button>
        </div>
        
          <div className="flex flex-col md:flex-row items-center p-2 m-2 gap-2">
            <button
            onClick={() => navigate("/services")}
            className="text-white p-3 m-2 md:m-3 mx-4 md:mx-8 px-6 md:px-8 border-4 rounded-4xl border-[#231212] transition-all duration-200 text-sm bg-[#231212] dark:hover:bg-gray-800 dark:bg-black rounded hover:bg-[#422727] w-full md:w-auto"
          >
            Book Now
          </button>
          <a href="tel:03225455658" className="bg-[#231212] p-2 m-2 md:m-2 border-4 rounded-4xl border-[#231212] dark:hover:bg-gray-800 dark:bg-black rounded hover:bg-[#422727] flex items-center justify-center transition-all duration-200 cursor-pointer">
            <img src={phoneImg} alt="phone" className="w-7 h-7" loading="lazy" />
          </a>
          </div>
      </div>

      {/* Right Side Image Carousel - Full Height and Half Width */}
      <div className="hidden md:flex flex-1 h-screen">
        <div className="relative w-full h-full rounded-l-full overflow-hidden shadow-2xl">
          {heroImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`hero-${idx}`}
              loading="lazy"
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                idx === imageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          
          {/* Image indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === imageIndex ? "bg-white w-6" : "bg-white opacity-50"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
