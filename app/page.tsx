import Intro from "./Intro";
// import Skills from "./Skills";

export default function Home() {
  return (
    <div className="min-h-screen dotted-background overflow-scroll	font-[family-name:var(--font-geist-sans)]">
      <Intro/>
      {/* <Skills/> */}
      <footer className="pb-5 row-start-3 flex flex-col gap-8 flex-wrap items-center justify-center">
        <div className="flex gap-8">
        <a href="https://github.com"><img src="icons8-github.svg" height={38} width={38}></img></a>
        <a href="https://github.com"><img src="icons8-linkedin.svg" height={38} width={38}></img></a>
        </div>
        <p className="text-xs text-gray-200">© 2024 Joshua Meyer</p>
      </footer>
    </div>
  );
}
