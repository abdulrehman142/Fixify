import type { Dispatch, SetStateAction } from "react";
import Hero from "../components/Hero";
import Whychooseus from "../components/Whychooseus";
import Services from "./Services";

type HomeProps = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

export default function Home({ darkMode }: HomeProps) {
  return (
    <>
      <Hero />
      <Services darkMode={darkMode} />
      <Whychooseus darkMode={darkMode} />
    </>
  );
}
