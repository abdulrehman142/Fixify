import React, { useState } from "react";
import wd from "/Fixify_images/discordicon.png";
import wtt from "/Fixify_images/tiktokicon.png";
import wyt from "/Fixify_images/youtubeicon.png";
import dd from "/Fixify_images/ddiscord.png";
import dtt from "/Fixify_images/dtiktok.png";
import dyt from "/Fixify_images/dyoutube.png";
import sun from "/Fixify_images/sun.png";
import moon from "/Fixify_images/moon.png";

interface FooterProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SocialIconProps {
  darkMode: boolean;
  lightImg: string;
  lightHover: string;
  darkImg: string;
  darkHover: string;
  alt: string;
}

const SocialIcon: React.FC<SocialIconProps& { className?: string }> = ({
  darkMode,
  lightImg,
  lightHover,
  darkImg,
  darkHover,
  alt,
  className,
}) => {
  const [hovered, setHovered] = useState(false);

  const src = darkMode
    ? hovered
      ? darkHover
      : darkImg
    : hovered
    ? lightHover
    : lightImg;

  return (
    <img
      src={src}
      alt={alt}
      className={`m-2 rounded cursor-pointer transition-all duration-300 hover:bg-[#231212] hover:scale-110 ${className || ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};

const Footer = ({ darkMode, setDarkMode }: FooterProps) => {
  const navLinkClass =
    "py-2 xl:px-0 hover:text-white hover:bg-[#231212] rounded w-max";
  const linkClass =
    "hover:underline text-[#98A1B4] text-xs block opacity-50 mx-2 font-ibm-plex-mono dark:text-[#FFFFFF] text-[#98A1B4]";

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Footer Top */}
      <div className="w-full bg-[#FFFFFF] dark:bg-[#101011] px-5">
        <div className="xl:mx-8 flex flex-col xl:flex-row justify-between items-stretch">
          {/* Navigation Links */}
          <div className="font-ibm-plex-mono dark:text-[#FFFFFF] text-#000001 flex flex-col xl:flex-row font-medium m-2">
            {/* First Column */}
            <div className="flex flex-col p-1 m-0 xl:m-4">
              <a href="#" className={navLinkClass}>
                Home
              </a>
              <a href="#" className={navLinkClass}>
                Services
              </a>
              <a href="#" className={navLinkClass}>
                How it works
              </a>
            </div>
            {/* Second Column */}
            <div className="flex flex-col p-1 m-0 xl:m-4">
              <a href="#" className={navLinkClass}>
                Contact Us
              </a>
              <a href="#" className={navLinkClass}>
                Pricing
              </a>
              <a href="#" className={navLinkClass}>
                Sign In
              </a>
            </div>
            {/* Third Column */}
            <div className="flex flex-col p-1 m-0 xl:m-4">
              <a href="#" className={navLinkClass}>
                About Us
              </a>
            </div>
          </div>

          {/* Right Section: Dark Mode + Social Icons */}
          <div className="flex flex-col justify-start xl:justify-between items-start xl:items-end mx-0 xl:m-2 gap-y-6">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative w-10 h-6 rounded-full flex items-center transition-colors duration-300 m-4 ${
                darkMode ? "bg-black" : "bg-[#F5F5F5]"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-4 h-4 rounded-full transform transition-transform duration-300 ${
                  darkMode
                    ? "translate-x-[16px] bg-[#484C5B]"
                    : "translate-x-0 bg-gray-200"
                }`}
              ></div>
              <img
                src={darkMode ? sun : moon}
                alt="Mode Icon"
                className={`absolute w-3 h-3 top-1/2 transform -translate-y-1/2 ${
                  darkMode ? "left-1" : "right-1"
                }`}
              />
            </button>

            {/* Social Icons */}
            <div className="m-2 flex flex-col">
              <div className="flex flex-row xl:justify-end gap-x-4">
                <div className="hover:bg-[#231212] rounded">
                  <SocialIcon
                    darkMode={darkMode}
                    lightImg={dtt}
                    lightHover={wtt} // use hover variant if you have
                    darkImg={wtt}
                    darkHover={wtt}
                    alt="TikTok"
                    className="w-6 h-6" 
                  />
                </div>
                <div className="hover:bg-[#231212] rounded">
                  <SocialIcon
                    darkMode={darkMode}
                    lightImg={dd}
                    lightHover={wd}
                    darkImg={wd}
                    darkHover={wd}
                    alt="Discord"
                    className="w-6 h-6" 
                  />
                </div>
                <div className="hover:bg-[#231212] rounded">
                  <SocialIcon
                    darkMode={darkMode}
                    lightImg={dyt}
                    lightHover={wyt}
                    darkImg={wyt}
                    darkHover={wyt}
                    alt="YouTube"
                    className="w-6 h-6" 
                  />
                </div>
              </div>

              {/* Social Text */}
              <div className="font-ibm-plex-mono dark:text-[#FFFFFF] text-[#000000] text-base leading-[32px] font-normal opacity-50 break-words whitespace-normal m-2 p-0">
                Fix it fast with Fixify.
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer + Links */}
        <div className="mx-0 xl:mx-10 flex flex-col xl:flex-row justify-between items-start gap-y-4">
          <div className="text-[#250843] mx-4 xl:mx-6">
            <p className="text-sm font-ibm-plex-mono dark:text-[#FFFFFF] text-[#250843]">
              © 2025 Fixify All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-row justify-between items-start mx-2 gap-y-4 mb-6 xl:mb-0">
            <a href="#" className={linkClass}>
              Privacy Policy
            </a>
            <a href="#" className={linkClass}>
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Footer Hero / Logo Section */}
      <div className="overflow-hidden bg-[#FFFFFF] dark:bg-[#101011]">
        <h1 className="tracking-tight font-jersey dark:text-[#FFFFFF] text-[#0F0F0F]  xl:text-[130px] text-[91.03px] text-center xl:leading-[180.24px] leading-[56.9px]">
          Fixify A Service Marketplace
        </h1>
      </div>
    </div>
  );
};

export default Footer;
