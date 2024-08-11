const TitleContainer = () => {
  return (
    <div className="w-full h-[120px] flex flex-col justify-center gap-1 px-6 py-7 rounded-lg bg-gray-1e text-white">
      <div className="text-xl font-bold text-main">대중음악</div>
      <p className="text-[14px]">
        다가오는 콘서트 일정과 정보를 확인하고, 관심 있는 공연을 리스트에
        추가해보세요.
        <br /> 마음에 드는 공연을 발견했다면, 바로 예매하러 가기 기능을 통해
        손쉽게 티켓을 구매할 수 있습니다.
      </p>
    </div>
  );
};

export default TitleContainer;
