import ImageComponent from '@/components/common/ImageComponent';
import CommentBox from '@/components/community/CommentBox';

const BoardDetailPage = () => {
  return (
    <div className="flex flex-col gap-7 w-full mt-8">
      <div className="flex flex-col gap-5 text-white">
        <h1 className="">대만족!</h1>
        <div className="pb-4 flex items-center gap-4 border-b border-gray-bf">
          <ImageComponent
            type="profile"
            src="http://via.placeholder.com/180x244"
          />
          <div className="flex flex-col">
            <div className="text-white">닉네임</div>
            <div className="flex gap-2 text-gray-bf text-sm">
              <div>콘서트</div>
              <div>2024-08-15</div>
              <div>조회수 2</div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[800px] text-white">너무 재밌었어요!</div>
      <CommentBox />
    </div>
  );
};

export default BoardDetailPage;
