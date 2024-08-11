import ImageComponent from './ImageComponent';

const Card = () => {
  return (
    <div className="w-full py-5 px-5 bg-gray-1e rounded-lg cursor-pointer">
      <div className="flex flex-col gap-7">
        <ImageComponent type="music" src="http://via.placeholder.com/180x244" />
        <div className="flex flex-col gap-2 text-white">
          <div>공연명</div>
          <div>일정</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
