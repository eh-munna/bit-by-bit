export default function Hero() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-slate-200 transition-colors duration-300 py-16 px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Awesome Videos
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover, watch, and share amazing videos from creators around the
            world. Dive into tutorials, entertainment, and more — all in one
            place!
          </p>
          <div className="flex space-x-4 justify-center items-center">
            <a
              href="#videos"
              className="inline-block bg-gray-900 dark:bg-slate-200 text-white dark:text-gray-900 font-semibold py-3 px-6 rounded hover:bg-gray-700 dark:hover:bg-slate-300 transition-colors duration-300"
            >
              Browse Videos
            </a>
            <a
              href="#upload"
              className="inline-block border border-gray-900 dark:border-slate-200 text-gray-900 dark:text-slate-200 font-semibold py-3 px-6 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              Upload Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
