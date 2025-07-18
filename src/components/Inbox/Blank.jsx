export default function Blank() {
  return (
    <div
      className="
        h-[calc(100vh_-_129px)]
        flex items-center justify-center
        text-gray-500 dark:text-gray-400
        px-4
      "
    >
      <span
        className="
          transform -rotate-90 md:rotate-0
          text-center
          text-sm md:text-base
          min-w-[130px] md:min-w-0
          font-medium
        "
      >
        No messages yet
      </span>
    </div>
  );
}
