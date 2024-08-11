import Card from '@/components/common/Card';
import TitleContainer from '@/components/common/TitleContainer';

function Music() {
  return (
    <main className="mt-[87px] ml-60">
      <section className="flex justify-center p-8">
        <article className="flex flex-col gap-4 w-[1200px] justify-center items-center">
          <TitleContainer title="콘서트">
            콘서트는 라이브 음악의 에너지와 열정을 직접 느낄 수 있는 최고의
            무대입니다.
            <br /> 아티스트와 관객이 하나 되어 즐기는 순간, 강렬한 사운드와
            퍼포먼스가 더해져 잊지 못할 추억을 만듭니다. <br />
            콘서트의 생동감 넘치는 현장을 함께 경험해보세요!
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

export default Music;
