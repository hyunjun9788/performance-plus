import Button, { ButtonKind } from './Button';
import ImageComponent from './ImageComponent';

const Card = () => {
  return (
    <div className="relative w-full py-5 px-5 bg-gray-1e rounded-lg cursor-pointer group">
      <div className="flex flex-col gap-7 brightness-100 group-hover:brightness-75">
        <ImageComponent type="music" src="http://via.placeholder.com/180x244" />
        <div className="flex flex-col gap-2 text-white">
          <div>공연명</div>
          <div>일정</div>
        </div>
      </div>
      <div className="absolute top-48 left-[85px] flex flex-col gap-2  invisible group-hover:visible">
        <Button kind={ButtonKind.secondary}>예매하기</Button>
        <Button kind={ButtonKind.secondary}>관심공연 추가</Button>
      </div>
    </div>
  );
};

export default Card;
