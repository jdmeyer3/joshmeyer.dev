import Intro from "./Intro";
// import Skills from "./Skills";

export default function Home() {
  return (
    <div className="min-h-screen dotted-background overflow-scroll	font-[family-name:var(--font-geist-sans)]">
      <Intro/>
      {/* <Skills/> */}
      <footer className="pb-5 row-start-3 flex gap-8 flex-wrap items-center justify-center">
        <p className="text-xs text-gray-200">© 2024 Joshua Meyer</p>
      </footer>
    </div>
  );
}
