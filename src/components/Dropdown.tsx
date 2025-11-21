interface DropdownProps {
  darkMode: boolean;
}

const Dropdown = ({ darkMode }: DropdownProps) => {
  return (
    <div className="flex flex-col bg-[#231212] dark:bg-black shadow-lg rounded-md p-4 border-2 dark:border-[#231212]">
      <div className="border-[#231212] m-1 rounded-md bg-white dark:bg-[#231212] hover:bg-[#422727]">
        <div className="font-ibm-plex-mono text-sm text-center text-black dark:text-white p-2 hover:text-white">
          Cleaner
        </div>
      </div>
      <div className="border-[#231212] m-1 rounded-md bg-white dark:bg-[#231212] hover:bg-[#422727]">
        <div className="font-ibm-plex-mono text-sm text-center text-black dark:text-white p-2 hover:text-white">
          Electrician
        </div>
      </div>
      <div className="border-[#231212] m-1 rounded-md bg-white dark:bg-[#231212] hover:bg-[#422727]">
        <div className="font-ibm-plex-mono text-sm text-center text-black dark:text-white p-2 hover:text-white">
          Plumber
        </div>
      </div>
      <div className="border-[#231212] m-1 rounded-md bg-white dark:bg-[#231212] hover:bg-[#422727]">
        <div className="font-ibm-plex-mono text-sm text-center text-black dark:text-white p-2 hover:text-white">
          Mechanic
        </div>
      </div>
      <div className="border-[#231212] m-1 rounded-md bg-white dark:bg-[#231212] hover:bg-[#422727]">
        <div className="font-ibm-plex-mono text-sm text-center text-black dark:text-white p-2 hover:text-white">
          Mover
        </div>
      </div>
      <div className="border-[#231212] m-1 rounded-md bg-white dark:bg-[#231212] hover:bg-[#422727]">
        <div className="font-ibm-plex-mono text-sm text-center text-black dark:text-white p-2 hover:text-white">
          Technician
        </div>
      </div>
      <div className="border-[#231212] m-1 rounded-md bg-white dark:bg-[#231212] hover:bg-[#422727]">
        <div className="font-ibm-plex-mono text-sm text-center text-black dark:text-white p-2 hover:text-white">
          Painter
        </div>
      </div>
      <div className="border-[#231212] m-1 rounded-md bg-white dark:bg-[#231212] hover:bg-[#422727]">
        <div className="font-ibm-plex-mono text-sm text-center text-black dark:text-white p-2 hover:text-white">
          Gardener
        </div>
      </div>
      <div className="border-[#231212] m-1 rounded-md bg-white dark:bg-[#231212] hover:bg-[#422727]">
        <div className="font-ibm-plex-mono text-sm text-center text-black dark:text-white p-2 hover:text-white">
          Mechanic
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
