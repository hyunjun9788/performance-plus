import ImageComponent from '../common/ImageComponent';

const CommentList = () => {
  return (
    <div className="flex items-center gap-3">
      <ImageComponent type="profile" src="http://via.placeholder.com/180x244" />
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2">
          <div className="text-[15px] text-white font-bold">HJ</div>
          <div className="text-[13px] text-gray-bf">2024-08-15 23:11</div>
        </div>
        <div className="text-white">너무 좋았어요!</div>
      </div>
    </div>
  );
};

export default CommentList;
