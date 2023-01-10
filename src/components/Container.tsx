type Props = {
  color?: string;
  children: React.ReactNode;
};

export default function Container({ color = "090C15", children }: Props) {
  return (
    <>
      <div className="h-2" style={{ background: `#${color}` }} />
      <section className="w-full max-w-2xl px-4 mx-auto my-10 space-y-8 sm:px-6 md:my-12 lg:px-8">
        {children}
      </section>
      <div className="h-2" style={{ background: `#${color}` }} />
    </>
  );
}
