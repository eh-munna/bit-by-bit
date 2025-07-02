import { cn } from '../../utils/cn';

export default function Section({ children, className, ...props }) {
  return (
    <section className={cn(`p-4 flex flex-col`, className)} {...props}>
      {children}
    </section>
  );
}
