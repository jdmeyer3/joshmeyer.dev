import Image from "next/image";
import Intro from "./Intro";
// import Skills from "./Skills";

export default function Home() {
  
  return (
    <div nonce="" className="min-h-screen dotted-background overflow-scroll	font-[family-name:var(--font-geist-sans)]">
      <Intro/>
      {/* <Skills/> */}
      <footer className="pb-5 row-start-3 flex flex-col gap-8 flex-wrap items-center justify-center">
        <div className="flex gap-8">
        <a aria-label="github profile" href="https://github.com/jdmeyer3"><Image src="icons8-github.svg" height={38} width={38} alt="github-logo"></Image></a>
        <a aria-label="linkedin profile" href="https://linkedin.com/in/joshuadmeyer"><Image src="icons8-linkedin.svg" height={38} width={38} alt="linkedin-logo"></Image></a>
        </div>
        <p className="text-xs text-gray-200">© 2024 Joshua Meyer</p>
      </footer>
    </div>
  );
}
