interface DropdownProps {
  darkMode: boolean;
}

const Dropdown = ({ darkMode }: DropdownProps) => {
  const services = [
    "Cleaner",
    "Electrician",
    "Plumber",
    "Mechanic",
    "Mover",
    "Technician",
    "Painter",
    "Gardener",
  ];

  return (
    <div className={`flex flex-col shadow-lg rounded-md p-2 border-2 ${
      darkMode 
        ? "bg-black border-[#231212]" 
        : "bg-[#231212] border-[#231212]"
    }`}>
      {services.map((service, index) => (
        <div 
          key={index}
          className={`border-[#231212] m-1 rounded-md transition-all duration-200 cursor-pointer ${
            darkMode
              ? "bg-[#231212] hover:bg-[#422727] text-white"
              : "bg-white hover:bg-[#422727] text-black"
          }`}
        >
          <div className="font-ibm-plex-mono text-sm p-2 hover:text-white">
            {service}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
