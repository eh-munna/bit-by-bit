import Section from '../Section';

export default function Feature({ children, ...props }) {
  return (
    <>
      <Section
        className="flex flex-col gap-3 text-center items-center"
        {...props}
      >
        {children}
      </Section>
    </>
  );
}
