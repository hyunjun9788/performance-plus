export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mt-[87px] ml-60">
      <section className="flex justify-center p-8">
        <article className="flex flex-col gap-4 w-[1200px] justify-center items-center">
          {children}
        </article>
      </section>
    </main>
  );
}
