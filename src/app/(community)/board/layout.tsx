import MenuList from '@/components/community/MenuList';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <section className="flex flex-col gap-8">
        <div className="font-bold text-5xl text-white">자유게시판</div>
        <MenuList />
      </section>
      {children}
    </main>
  );
}
