import React, { useState } from "react";
import logo from "/Fixify_images/fixifylogo.jpg";
import wdd from "/Fixify_images/dropdown.jpg";

// 🟢 Light mode icons
import wi from "/Fixify_images/winstagram.jpg";
import wyt from "/Fixify_images/youtubeicon.jpg";
import wd from "/Fixify_images/discordicon.jpg";
import wdm from "/Fixify_images/wdarkmodeicon.jpg";

// ⚫ Dark mode icons
import di from "/Fixify_images/dinstagram.jpg";
import dyt from "/Fixify_images/dyoutube.jpg";
import dd from "/Fixify_images/ddiscord.jpg";
import ddm from "/Fixify_images/ddarkmodeicon.jpg";
import ddd from "/Fixify_images/ddropdown.jpg";
// 🌙 Moon icon for hover state
import wmoon from "/Fixify_images/wmoon.jpg";

import "../index.css";

interface NavbarProps {
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
  onClick?: () => void;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  darkMode,
  lightImg,
  lightHover,
  darkImg,
  darkHover,
  alt,
  onClick,
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
    <div
      className="p-2 rounded cursor-pointer transition-all duration-300 hover:bg-[#231212] hover:scale-110 flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <img src={src} alt={alt} className="w-5 h-5 pointer-events-none" />
    </div>
  );
};

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex dark:bg-black bg-white items-center justify-between pl-4 ">
        {/* 🟢 Left: Logo + Brand */}
        <div className="flex">
          <div className="flex items-center p-2">
            <img src={logo} alt="Fixify Logo" className="h-6 w-6" />
            <div className="font-jersey dark:text-white text-black text-2xl ml-1">
              Fixify
            </div>
          </div>

          {/* 🟣 Middle: Nav Links */}
          <div className="flex p-6">
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "How it works", href: "/how-it-works" },
              { name: "About Us", href: "/about" },
              { name: "Contact Us", href: "/contact" },
              { name: "Pricing", href: "/pricing" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group flex items-center justify-center hover:bg-[#231212] rounded p-2 m-2 font-ibm-plex-mono font-medium text-sm dark:text-white text-black transition-all duration-200 whitespace-nowrap"
              >
                <span className="flex items-center group-hover:text-white">
                  {item.name}
                  {item.name === "Services" && (
                    <img
                      src={darkMode ? wdd : ddd}
                      alt="Dropdown"
                      className="h-3 w-3 ml-1 mt-0.5 group-hover:brightness-0 group-hover:invert transition-all duration-200"
                    />
                  )}
                </span>
              </a>
            ))}
          </div>

          {/* 🔵 Right: Social Icons + Dark Mode Toggle + Buttons */}
          <div className="flex justify-between p-4 m-4">
            {/* Social Icons */}
            <div className="flex">
              <a
                  href="https://www.instagram.com/gofixify/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
              <SocialIcon
                darkMode={darkMode}
                lightImg={di}
                lightHover={wi}
                darkImg={wi}
                darkHover={wi}
                alt="Instagram"
              />
              </a>
               <a
                  href="https://www.youtube.com/@FixifySupport"
                  target="_blank"
                  rel="noopener noreferrer"
                >
              <SocialIcon
                darkMode={darkMode}
                lightImg={dyt}
                lightHover={wyt}
                darkImg={wyt}
                darkHover={wyt}
                alt="YouTube"
              />
              </a>
              <a
                  href="https://discord.com/users/1441059991518842951"
                  target="_blank"
                  rel="noopener noreferrer"
                >
              <SocialIcon
                darkMode={darkMode}
                lightImg={dd}
                lightHover={wd}
                darkImg={wd}
                darkHover={wd}
                alt="Discord"
              />
              </a>
              {/* Dark Mode Toggle */}
              <SocialIcon
                darkMode={darkMode}
                lightImg={ddm}
                lightHover={wmoon}
                darkImg={wdm}
                darkHover={wdm}
                alt="Toggle Dark Mode"
                onClick={() => setDarkMode(!darkMode)}
              />
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex items-end gap-2 m-6">
          <button className="hover:underline bg-[#231212] font-ibm-plex-mono text-white text-sm px-4 py-2 rounded hover:opacity-90 transition-all">
            Sign In
          </button>
          <button className="hover:underline bg-[#231212] font-ibm-plex-mono text-white text-sm px-4 py-2 rounded hover:opacity-90 transition-all">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
