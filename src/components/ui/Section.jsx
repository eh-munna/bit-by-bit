export default function Section({ children, ...props }) {
  return (
    <section className="p-4 flex flex-col" {...props}>
      {children}
    </section>
  );
}
