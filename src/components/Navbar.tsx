import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import fixifyLogo from "/Fixify_images/fixifylogo.png";
import dropdownArrowLight from "/Fixify_images/dropdown.png";

// 🟢 Light mode social icons
import instagramWhite from "/Fixify_images/winstagram.png";
import youtubeWhite from "/Fixify_images/youtubeicon.png";
import discordWhite from "/Fixify_images/discordicon.png";
import darkModeIconWhite from "/Fixify_images/wdarkmodeicon.jpg";

// ⚫ Dark mode social icons
import instagramDark from "/Fixify_images/dinstagram.png";
import youtubeDark from "/Fixify_images/dyoutube.png";
import discordDark from "/Fixify_images/ddiscord.png";
import darkModeIconDark from "/Fixify_images/ddarkmodeicon.png";
import dropdownArrowDark from "/Fixify_images/ddropdown.png";
// 🌙 Moon icon for hover state
import moonHoverIcon from "/Fixify_images/wmoon.png";

import "../index.css";
import Dropdown from "../components/Dropdown";
import registerIcon from "/Fixify_images/register.png";
import loginIcon from "/Fixify_images/login.png";

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
      className="p-2 rounded cursor-pointer transition-all duration-300 hover:bg-[#231212] dark:hover:bg-gray-800 hover:scale-110 flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-5 h-5 pointer-events-none"
        loading="lazy"
      />
    </div>
  );
};

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex dark:bg-black bg-white items-center justify-between pl-4 ">
        {/* 🟢 Left: Logo + Brand */}
        <div className="flex">
          <div className="flex items-center p-2">
            <img src={fixifyLogo} alt="Fixify Logo" className="h-6 w-6" loading="lazy" />
            <div className="font-jersey dark:text-white text-black text-2xl ml-1">
              Fixify
            </div>
          </div>

          {/* 🟣 Middle: Nav Links */}
          <div className="flex p-6 relative">
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "How it works", href: "/how-it-works" },
              { name: "About Us", href: "/about" },
              { name: "Contact Us", href: "/contact" },
              { name: "FAQs", href: "/faqs" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative"
                ref={item.name === "Services" ? dropdownRef : null}
              >
                {item.name === "Services" ? (
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="group flex items-center justify-center hover:bg-[#231212] dark:hover:bg-gray-800 rounded p-2 m-2 font-ibm-plex-mono font-medium text-sm dark:text-white text-black transition-all duration-200 whitespace-nowrap cursor-pointer"
                  >
                    <span className="flex items-center group-hover:text-white">
                      {item.name}
                      <img
                        src={darkMode ? dropdownArrowLight : dropdownArrowDark}
                        alt="Dropdown"
                        className={`h-3 w-3 ml-1 mt-0.5 group-hover:brightness-0 group-hover:invert transition-all duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                        loading="lazy"
                      />
                    </span>
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="group flex items-center justify-center hover:bg-[#231212] dark:hover:bg-gray-800 rounded p-2 m-2 font-ibm-plex-mono font-medium text-sm dark:text-white text-black transition-all duration-200 whitespace-nowrap"
                  >
                    <span className="flex items-center group-hover:text-white">
                      {item.name}
                    </span>
                  </Link>
                )}
                {/* Dropdown positioned below Services link - shows on click */}
                {item.name === "Services" && isDropdownOpen && (
                  <div className="absolute top-full left-0 z-50 mt-1">
                    <Dropdown darkMode={darkMode} />
                  </div>
                )}
              </div>
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
                  lightImg={instagramDark}
                  lightHover={instagramWhite}
                  darkImg={instagramWhite}
                  darkHover={instagramWhite}
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
                  lightImg={youtubeDark}
                  lightHover={youtubeWhite}
                  darkImg={youtubeWhite}
                  darkHover={youtubeWhite}
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
                  lightImg={discordDark}
                  lightHover={discordWhite}
                  darkImg={discordWhite}
                  darkHover={discordWhite}
                  alt="Discord"
                />
              </a>
              {/* Dark Mode Toggle */}
              <SocialIcon
                darkMode={darkMode}
                lightImg={darkModeIconDark}
                lightHover={moonHoverIcon}
                darkImg={darkModeIconWhite}
                darkHover={darkModeIconWhite}
                alt="Toggle Dark Mode"
                onClick={() => setDarkMode(!darkMode)}
              />
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex items-end gap-2 m-6">
          <div className="flex items-center bg-[#231212] rounded ">
            <img src={registerIcon} alt="register" className="pl-1 h-5 w-6" loading="lazy" />
            <button className="hover:underline font-ibm-plex-mono text-center text-white text-sm p-2 hover:opacity-90 transition-all">
              Register
            </button>
          </div>
          <div className="flex items-center bg-[#231212] rounded ">
            <img src={loginIcon} alt="login" className="pl-1 h-5 w-6" loading="lazy" />
            <button className="hover:underline font-ibm-plex-mono text-center text-white text-sm p-2 hover:opacity-90 transition-all">
              Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
