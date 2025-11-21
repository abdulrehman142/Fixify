import type { Dispatch, SetStateAction } from "react";
import Hero from "../components/Hero";
import Body from "../components/Body";

type HomeProps = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

export default function Home({ darkMode, setDarkMode }: HomeProps) {
  return (
    <>
      <Hero />
      <Body darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
}
