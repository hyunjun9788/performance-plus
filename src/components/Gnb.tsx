import Link from 'next/link';
import Image from 'next/image';

const Gnb = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-18 border-b border-gray-36 z-[999] bg-black">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex justify-center">
          <Link href="/">
            <Image width={130} height={55} src="/logo.png" alt="로고 이미지" />
          </Link>
        </div>
        <Link href={'/login'}>
          <button
            type="button"
            className="px-4 py-[6px] border border-white rounded-lg text-white"
          >
            로그인
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Gnb;
