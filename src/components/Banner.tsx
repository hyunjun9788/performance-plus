const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[450px] w-[calc(-240px+100vw)] bg-no-repeat bg-cover bg-center bg-opacity-50 bg-black bg-[url('../assets/images/banner.jpg')]">
      <div className="h-[450px] absolute inset-0 mt-[87px] bg-black opacity-50" />
      <div className="flex flex-col items-center gap-6 z-10 text-center">
        <h1 className="text-white font-bold">
          공연 정보가 필요한 사람들을 위한 <br /> 풍성한 공연 정보 큐레이션
        </h1>
        <p className="text-gray-300">
          사용자들과 함께 공연 일정과 후기를 통해 <br /> 더욱 깊이 있는 문화
          경험과 새로운 영감을 얻아가세요.
        </p>
        <button
          type="button"
          className="bg-main w-[400px] h-12 rounded-lg font-bold text-black hover:bg-dark-main"
        >
          로그인하고 공연 후기 등록하러 가기
        </button>
      </div>
    </div>
  );
};

export default Banner;
