import TitleContainer from '@/components/common/TitleContainer';
import Card from '@/components/common/Card';

export default function ConcertPage() {
  return (
    <>
      <TitleContainer title="콘서트">
        콘서트는 라이브 음악의 에너지와 열정을 직접 느낄 수 있는 최고의
        무대입니다.
        <br />
        강렬한 사운드와 퍼포먼스가 더해져 잊지 못할 추억을 만듭니다.
        <br />
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
    </>
  );
}
