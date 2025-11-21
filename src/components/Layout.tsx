import React, { type ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout: React.FC<LayoutProps> = ({ children, darkMode, setDarkMode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-1">{children}</main>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Layout;
