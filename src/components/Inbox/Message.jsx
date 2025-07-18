import { cn } from '../../utils/cn';

export default function Message({ justify, message }) {
  return (
    <li
      className={cn('flex w-full', {
        'justify-end': justify === 'end',
        'justify-start': justify !== 'end',
      })}
    >
      <div className="relative max-w-xl px-4 py-2 dark:text-gray-200 text-gray-800 rounded shadow">
        <span className="block">{message}</span>
      </div>
    </li>
  );
}
