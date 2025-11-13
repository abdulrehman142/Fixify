import React, { useState } from "react";
import si from "/Fixify_images/searchicon.png";
const Hero = () => {
  const [search, setSearch] = useState("Search for any service...");
  const [isFocused, setIsFocused] = useState<string | null>(null);

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
          onFocus={(e) => setIsFocused(id)}
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
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col text-white"
      style={{ backgroundImage: "url('/Fixify_images/headerbg.jpg')" }}
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
        <div className="font-ibm-plex-mono flex p-2 m-2 gap-x-4">
          <div className="text-white bg-[#231212] dark:bg-black p-2 m-2 rounded">
            Cleaner
          </div>
          <div className="text-white bg-[#231212] dark:bg-black p-2 m-2 rounded">
            Plumber
          </div>
          <div className="text-white bg-[#231212] dark:bg-black p-2 m-2 rounded">
            Painter
          </div>
          <div className="text-white bg-[#231212] dark:bg-black p-2 m-2 rounded">
            Carpenter
          </div>
          <div className="text-white bg-[#231212] dark:bg-black p-2 m-2 rounded">
            Electrician
          </div>
          <div className="text-white bg-[#231212] dark:bg-black p-2 m-2 rounded">
            Mechanic
          </div>
          <div className="text-white bg-[#231212] dark:bg-black p-2 m-2 rounded">
            <button
  className="transition-all duration-200"
>
  Load More...
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
