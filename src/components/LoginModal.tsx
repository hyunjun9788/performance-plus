import { Icon } from './common/Icon';
import ImageComponent from './common/ImageComponent';

const LoginModal = () => {
  return (
    <div className="flex flex-col gap-3 justify-between pt-3 px-[34px]">
      <div className="w-full text-white text-base text-left">SIGN IN</div>
      <div className="flex flex-col gap-6">
        <div className="text-3xl font-bold leading-snug text-white">
          지금 로그인하고
          <br />
          <span className="text-main">공연플러스의 모든 기능</span>을
          <br />
          사용해 보세요.
        </div>
        <div className="w-full flex justify-center">
          <ImageComponent src="/playing.png" type="login" />
        </div>
      </div>
      <button className="relative mt-6 bg-white p-3 text-center rounded-lg">
        <div className="flex justify-center">
          <Icon name="GoogleIcon" className="absolute left-2 w-6" />
          <div>Google로 로그인하기</div>
        </div>
      </button>
    </div>
  );
};

export default LoginModal;
