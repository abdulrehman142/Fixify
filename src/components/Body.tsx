import React from "react";
import eimage from "/Fixify_images/electrician.jpg";
import pimage from "/Fixify_images/plumber.jpg";
import cimage from "/Fixify_images/cleaner.jpg";
import gimage from "/Fixify_images/gardener.jpg";
import mimage from "/Fixify_images/mechanic.jpg";
import timage from "/Fixify_images/technician.jpg";
import dl from "/Fixify_images/dleft.jpg";
import wl from "/Fixify_images/wleft.jpg";
import wr from "/Fixify_images/wright.jpg";
import dr from "/Fixify_images/dright.jpg";
import we from "/Fixify_images/welectrician.jpg";
import de from "/Fixify_images/delectrician.jpg";
import wp from "/Fixify_images/wplumber.jpg";
import dp from "/Fixify_images/dplumber.jpg";
import wg from "/Fixify_images/wgardener.jpg";
import dg from "/Fixify_images/dgardener.jpg";
import wm from "/Fixify_images/wmechanic.jpg";
import dm from "/Fixify_images/dmechanic.jpg";
import wt from "/Fixify_images/wtechnician.jpg";
import dt from "/Fixify_images/dtechnician.jpg";
import wc from "/Fixify_images/wcleaner.jpg";
import dc from "/Fixify_images/dcleaner.jpg";
interface BodyProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Body = ({ darkMode }: BodyProps) => {
  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className="h-screen bg-cover bg-center flex  text-white"
        style={{ backgroundImage: "url('/Fixify_images/bodybg.jpg')" }}
      >
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="font-ibm-plex-mono pl-4  mt-4 ml-4">
              Your fix is just one click away!
            </div>
            <div className="bg-[#231212] text-center rounded-xl w-20  m-2 p-2">
              <button>View All</button>
            </div>
          </div>

          <div className="flex justify-center items-center flex-wrap">
            <div className="flex items-center bg-white dark:bg-black w-75 h-75 rounded-2xl p-4 mx-8 my-1">
              <div className="flex flex-col h-max">
                <div className="flex mt-4 p-2">
                  <div className="py-8 px-2">
                    <img src={darkMode ? wl : dl} alt="left" />
                  </div>
                  <div>
                    <img src={eimage} alt="Electrician" className="w-52" />
                  </div>
                  <div className="py-8 px-2">
                    <img src={darkMode ? wr : dr} alt="right" />
                  </div>
                </div>
                <div className="flex flex-col mx-4 items-center justify-center ">
                  <div className="flex items-center justify-center mx-4">
                    <div className="flex items-center justify-center bg-[#ABAEBB] dark:bg-white w-8 h-8 rounded-xl">
                      <img
                        src={darkMode ? de : we}
                        alt="Electrician"
                        className="h-7 w-7"
                      />
                    </div>
                    <div className="px-2 text-black dark:text-white text-center font-ibm-plex-mono font-medium text-sm">
                      Electrician
                    </div>
                  </div>

                  <div className="bg-[#ABAEBB] dark:bg-[#231212]  m-2 my-4 p-2 w-60 rounded-2xl">
                    <div className="font-ibm-plex-mono text-black dark:text-white text-xs">
                      Wiring,Installations &amp; Repairs.
                    </div>
                  </div>
                  <div className="bg-[#FF9800] mb-2 p-2 w-30 rounded-2xl flex items-center justify-center">
                    <button className="font-ibm-plex-mono text-black text-xs text-center">
                      Book Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center bg-white dark:bg-black w-75 h-75 rounded-2xl p-4 mx-8 my-1">
              <div className="flex flex-col h-max">
                <div className="flex mt-4 p-2">
                  <div className="py-8 px-2">
                    <img src={darkMode ? wl : dl} alt="left" />
                  </div>
                  <div>
                    <img src={pimage} alt="Electrician" className="w-52" />
                  </div>
                  <div className="py-8 px-2">
                    <img src={darkMode ? wr : dr} alt="right" />
                  </div>
                </div>
                <div className="flex flex-col mx-4 items-center justify-center ">
                  <div className="flex items-center justify-center mx-4">
                    <div className="flex items-center justify-center bg-[#ABAEBB] dark:bg-white w-8 h-8 rounded-xl">
                      <img
                        src={darkMode ? dp : wp}
                        alt="Plumber"
                        className="h-7 w-7"
                      />
                    </div>
                    <div className="px-2 text-black dark:text-white text-center font-ibm-plex-mono font-medium text-sm">
                      Plumber
                    </div>
                  </div>

                  <div className="bg-[#ABAEBB] dark:bg-[#231212]  m-2 my-4 p-2 w-60 rounded-2xl">
                    <div className="font-ibm-plex-mono text-black dark:text-white text-xs">
                     Leaks,Fittings &amp; Pipe Repairs.
                    </div>
                  </div>
                  <div className="bg-[#FF9800] mb-2 p-2 w-30 rounded-2xl flex items-center justify-center">
                    <button className="font-ibm-plex-mono text-black text-xs text-center">
                      Book Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center bg-white dark:bg-black w-75 h-75 rounded-2xl p-4 mx-8 my-1">
              <div className="flex flex-col h-max">
                <div className="flex mt-4 p-2">
                  <div className="py-8 px-2">
                    <img src={darkMode ? wl : dl} alt="left" />
                  </div>
                  <div>
                    <img src={cimage} alt="Electrician" className="w-52" />
                  </div>
                  <div className="py-8 px-2">
                    <img src={darkMode ? wr : dr} alt="right" />
                  </div>
                </div>
                <div className="flex flex-col mx-4 items-center justify-center ">
                  <div className="flex items-center justify-center mx-4">
                    <div className="flex items-center justify-center bg-[#ABAEBB] dark:bg-white w-8 h-8 rounded-xl">
                      <img
                        src={darkMode ? dc : wc}
                        alt="Cleaner"
                        className="h-7 w-7"
                      />
                    </div>
                    <div className="px-2 text-black dark:text-white text-center font-ibm-plex-mono font-medium text-sm">
                      Cleaner
                    </div>
                  </div>

                  <div className="bg-[#ABAEBB] dark:bg-[#231212]  m-2 my-4 p-2 w-60 rounded-2xl">
                    <div className="font-ibm-plex-mono text-black dark:text-white text-xs">
                     Home &amp; Office Deep Cleaning.
                    </div>
                  </div>
                  <div className="bg-[#FF9800] mb-2 p-2 w-30 rounded-2xl flex items-center justify-center">
                    <button className="font-ibm-plex-mono text-black text-xs text-center">
                      Book Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center bg-white dark:bg-black w-75 h-75 rounded-2xl p-4 mx-8 my-2">
              <div className="flex flex-col h-max">
                <div className="flex mt-4 p-2">
                  <div className="py-8 px-2">
                    <img src={darkMode ? wl : dl} alt="left" />
                  </div>
                  <div>
                    <img src={gimage} alt="Electrician" className="w-52" />
                  </div>
                  <div className="py-8 px-2">
                    <img src={darkMode ? wr : dr} alt="right" />
                  </div>
                </div>
                <div className="flex flex-col mx-4 items-center justify-center ">
                  <div className="flex items-center justify-center mx-4">
                    <div className="flex items-center justify-center bg-[#ABAEBB] dark:bg-white w-8 h-8 rounded-xl">
                      <img
                        src={darkMode ? dg : wg}
                        alt="Gardener"
                        className="h-7 w-7"
                      />
                    </div>
                    <div className="px-2 text-black dark:text-white text-center font-ibm-plex-mono font-medium text-sm">
                     Gardener
                    </div>
                  </div>

                  <div className="bg-[#ABAEBB] dark:bg-[#231212]  m-2 my-4 p-2 w-60 rounded-2xl">
                    <div className="font-ibm-plex-mono text-black dark:text-white text-xs">
                      Lawn Care &amp; Gardening Repairs.
                    </div>
                  </div>
                  <div className="bg-[#FF9800] mb-2 p-2 w-30 rounded-2xl flex items-center justify-center">
                    <button className="font-ibm-plex-mono text-black text-xs text-center">
                      Book Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center bg-white dark:bg-black w-75 h-75 rounded-2xl p-4 mx-8 my-2">
              <div className="flex flex-col h-max">
                <div className="flex mt-4 p-2">
                  <div className="py-8 px-2">
                    <img src={darkMode ? wl : dl} alt="left" />
                  </div>
                  <div>
                    <img src={mimage} alt="Electrician" className="w-52" />
                  </div>
                  <div className="py-8 px-2">
                    <img src={darkMode ? wr : dr} alt="right" />
                  </div>
                </div>
                <div className="flex flex-col mx-4 items-center justify-center ">
                  <div className="flex items-center justify-center mx-4">
                    <div className="flex items-center justify-center bg-[#ABAEBB] dark:bg-white w-8 h-8 rounded-xl">
                      <img
                        src={darkMode ? dm : wm}
                        alt="Mechanic"
                        className="h-7 w-7"
                      />
                    </div>
                    <div className="px-2 text-black dark:text-white text-center font-ibm-plex-mono font-medium text-sm">
                      Mechanic
                    </div>
                  </div>

                  <div className="bg-[#ABAEBB] dark:bg-[#231212]  m-2 my-4 p-2 w-60 rounded-2xl">
                    <div className="font-ibm-plex-mono text-black dark:text-white text-xs">
                      Car Services &amp; Engine Repairs.
                    </div>
                  </div>
                  <div className="bg-[#FF9800] mb-2 p-2 w-30 rounded-2xl flex items-center justify-center">
                    <button className="font-ibm-plex-mono text-black text-xs text-center">
                      Book Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center bg-white dark:bg-black w-75 h-75 rounded-2xl p-4 mx-8 my-2">
              <div className="flex flex-col h-max">
                <div className="flex mt-4 p-2">
                  <div className="py-8 px-2">
                    <img src={darkMode ? wl : dl} alt="left" />
                  </div>
                  <div>
                    <img src={timage} alt="Electrician" className="w-52" />
                  </div>
                  <div className="py-8 px-2">
                    <img src={darkMode ? wr : dr} alt="right" />
                  </div>
                </div>
                <div className="flex flex-col mx-4 items-center justify-center ">
                  <div className="flex items-center justify-center mx-4">
                    <div className="flex items-center justify-center bg-[#ABAEBB] dark:bg-white w-8 h-8 rounded-xl">
                      <img
                        src={darkMode ? dt : wt}
                        alt="Technician"
                        className="h-7 w-7"
                      />
                    </div>
                    <div className="px-2 text-black dark:text-white text-center font-ibm-plex-mono font-medium text-sm">
                     Technician
                    </div>
                  </div>

                  <div className="bg-[#ABAEBB] dark:bg-[#231212]  m-2 my-4 p-2 w-60 rounded-2xl">
                    <div className="font-ibm-plex-mono text-black dark:text-white text-xs">
                      Appliance &amp; IT Support.
                    </div>
                  </div>
                  <div className="bg-[#FF9800] mb-2 p-2 w-30 rounded-2xl flex items-center justify-center">
                    <button className="font-ibm-plex-mono text-black text-xs text-center">
                      Book Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
