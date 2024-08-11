import Card from '@/components/common/Card';
import TitleContainer from '@/components/common/TitleContainer';

function Play() {
  return (
    <main className="mt-[87px] ml-60">
      <section className="flex justify-center p-8">
        <article className="flex flex-col gap-4 w-[1200px] justify-center items-center">
          <TitleContainer title="연극">
            연극은 배우들의 생생한 연기와 몰입감 있는 스토리로 관객과 직접
            소통하는 예술입니다.
            <br /> 무대 위에서 펼쳐지는 긴장감 넘치는 순간과 감동적인 이야기가
            관객에게 깊은 여운을 남깁니다. <br />
            연극의 진한 감동을 함께 경험해보세요!
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

export default Play;
