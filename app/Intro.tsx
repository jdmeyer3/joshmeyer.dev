export default function Intro() {
  return (
    <div className="grid grid-rows-1 items-center justify-items-center h-[calc(100vh-36px)]">
      <div className="flex flex-col gap-8 items-center justify-items-center">
        <h1 className="flex flex-col items-center mb-4 gap-3 text-4xl sm:text-5xl font-extrabold leading-none tracking-tight text-gray-300 dark:text-white select-none">Hello, I&apos;m <span className="bg-gradient-to-r from-blue-700 via-purple-300 to-purple-600 text-transparent bg-clip-text text-5xl sm:text-6xl">Joshua Meyer</span></h1>
        <p> Software Engineer | Backend | DevOps </p>
        <div>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-purple-600 text-foreground gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://drive.google.com/file/d/18ySkD-PgFZC4YYFwmCrZW-Et6u-KQ6zh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
