import Card from '@/components/common/Card';
import TitleContainer from '@/components/TitleContainer';

function Music() {
  return (
    <main className="mt-[87px] ml-60">
      <section className="flex justify-center p-8">
        <article className="flex flex-col gap-4 w-[1200px] justify-center items-center">
          <TitleContainer />
          <div className="w-full grid grid-cols-4 gap-3 place-items-center">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </article>
      </section>
    </main>
  );
}

export default Music;
