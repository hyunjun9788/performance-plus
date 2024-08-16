import MenuList from '@/components/community/MenuList';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full flex flex-col gap-9">
      <section className="flex flex-col items-center gap-8">
        <div className="font-bold text-5xl text-white">자유게시판</div>
        <MenuList />
      </section>
      {children}
    </main>
  );
}
