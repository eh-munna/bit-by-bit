import { cn } from '../../utils/cn';
export default function Button({ children, className, ...props }) {
  return (
    <>
      <button
        className={cn(
          `cursor-pointer px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors duration-300`,
          className
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
