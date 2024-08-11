import Card from '@/components/common/Card';
import TitleContainer from '@/components/common/TitleContainer';

function Musical() {
  return (
    <main className="mt-[87px] ml-60">
      <section className="flex justify-center p-8">
        <article className="flex flex-col gap-4 w-[1200px] justify-center items-center">
          <TitleContainer title="뮤지컬">
            뮤지컬은 음악, 연기, 춤이 조화를 이루며 감동적인 이야기를 전하는
            종합 예술입니다. <br /> 환상적인 무대와 배우들의 열정적인 퍼포먼스로
            관객에게 잊지 못할 경험을 선사합니다. <br />
            뮤지컬의 매력을 직접 느껴보세요!
          </TitleContainer>
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

export default Musical;
