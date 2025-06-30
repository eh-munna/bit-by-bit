import Section from '@/components/ui/Section';

export default function Feature({ children, ...props }) {
  return (
    <>
      <Section
        className="flex flex-col gap-3 text-center items-center mt-12"
        {...props}
      >
        {children}
      </Section>
    </>
  );
}
