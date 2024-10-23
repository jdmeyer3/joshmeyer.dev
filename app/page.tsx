export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white select-none">Hello, I&apos;m <span className="text-blue-600 dark:text-blue-500">Joshua Meyer</span></h1>
        <p> Software Engineer | Backend | DevOps </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://bsky.app/profile/jdmeyer.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-primarycolor text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://drive.google.com/file/d/18ySkD-PgFZC4YYFwmCrZW-Et6u-KQ6zh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>

        </div>
      </main>
      <footer className="pb-5 row-start-3 flex gap-8 flex-wrap items-center justify-center">
        <p className="text-xs text-gray-500">© 2024 Joshua Meyer</p>
      </footer>
    </div>
  );
}
