import cleanerImg from "/Fixify_images/cleaner.png";
import electricianImg from "/Fixify_images/electrician.svg";
import plumberImg from "/Fixify_images/plumber.svg";
import mechanicImg from "/Fixify_images/mechanic.png";
import moverImg from "/Fixify_images/mover.png";
import technicianImg from "/Fixify_images/technician.png";
import painterImg from "/Fixify_images/painter.svg";
import gardenerImg from "/Fixify_images/gardener.png";
import carpenterImg from "/Fixify_images/carpenter.svg";

interface ServicesProps {
  darkMode?: boolean;
}

const Services = ({ darkMode = false }: ServicesProps) => {
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="p-10 bg-white dark:bg-black min-h-screen">
        <div className="flex flex-col text-center">
          <div className="font-bold text-5xl text-[#231212] dark:text-white p-1 m-1">
            Services
          </div>
          <div className="text-md text-[#8e8e93] dark:text-gray-400 p-1 m-1">
            Choose from our wide range of services
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between gap-4 p-2 m-2 w-full">
            <button className="flex flex-col items-center justify-center dark:hover:bg-gray-800 p-2 rounded transition-colors">
              <img
                src={cleanerImg}
                alt={"cleaner"}
                className="w-20 h-20 object-cover rounded flex-shrink-0"
                loading="lazy"
              />
              <div className="text-center text-xl text-[#231212] dark:text-white">Cleaner</div>
            </button>
            <button className="flex flex-col items-center justify-center dark:hover:bg-gray-800 p-2 rounded transition-colors">
              <img
                src={electricianImg}
                alt={"electrician"}
                className="w-20 h-20 object-cover rounded flex-shrink-0"
                loading="lazy"
              />
              <div className="text-center text-xl text-[#231212] dark:text-white">Electrician</div>
            </button>
            <button className="flex flex-col items-center justify-center dark:hover:bg-gray-800 p-2 rounded transition-colors">
              <img
                src={plumberImg}
                alt={"plumber"}
                className="w-20 h-20 object-cover rounded flex-shrink-0"
                loading="lazy"
              />
              <div className="text-center text-xl text-[#231212] dark:text-white">Plumber</div>
            </button>
            <button className="flex flex-col items-center justify-center dark:hover:bg-gray-800 p-2 rounded transition-colors">
              <img
                src={mechanicImg}
                alt={"mechanic"}
                className="w-20 h-20 object-cover rounded flex-shrink-0"
                loading="lazy"
              />
              <div className="text-center text-xl text-[#231212] dark:text-white">Mechanic</div>
            </button>
            <button className="flex flex-col items-center justify-center dark:hover:bg-gray-800 p-2 rounded transition-colors">
              <img
                src={moverImg}
                alt={"mover"}
                className="w-20 h-20 object-cover rounded flex-shrink-0"
                loading="lazy"
              />
              <div className="text-center text-xl text-[#231212] dark:text-white">Mover</div>
            </button>
            <button className="flex flex-col items-center justify-center dark:hover:bg-gray-800 p-2 rounded transition-colors">
              <img
                src={technicianImg}
                alt={"technician"}
                className="w-20 h-20 object-cover rounded flex-shrink-0"
                loading="lazy"
              />
              <div className="text-center text-xl text-[#231212] dark:text-white">Technician</div>
            </button>
          </div>
          <div className="flex gap-4 p-2 m-2 w-full justify-center">
            <div className="flex justify-between gap-25 p-2 m-2">
            <button className="flex flex-col items-center justify-center p-2 m-2 dark:hover:bg-gray-800 rounded transition-colors">
              <img
                src={painterImg}
                alt={"painter"}
                className="w-20 h-20 object-cover rounded flex-shrink-0"
                loading="lazy"
              />
              <div className="text-center text-xl text-[#231212] dark:text-white">Painter</div>
            </button>
            <button className="flex flex-col items-center justify-center p-2 m-2 dark:hover:bg-gray-800 rounded transition-colors">
              <img
                src={gardenerImg}
                alt={"gardener"}
                className="w-20 h-20 object-cover rounded flex-shrink-0"
                loading="lazy"
              />
              <div className="text-center text-xl text-[#231212] dark:text-white">Gardener</div>
            </button>
            <button className="flex flex-col items-center justify-center p-2 m-2 dark:hover:bg-gray-800 rounded transition-colors">
              <img
                src={carpenterImg}
                alt={"carpenter"}
                className="w-20 h-20 object-cover rounded flex-shrink-0"
                loading="lazy"
              />
              <div className="text-center text-xl text-[#231212] dark:text-white">Carpenter</div>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
