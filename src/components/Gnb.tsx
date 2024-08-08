import Link from 'next/link';
import Logo from '../../public/logo.svg';

function Gnb() {
  return (
    <header className="fixed top-0 left-0 w-full h-18 border-b border-gray-36 z-[999]">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <Logo className="w-[130px] h-[55px]" />
          </Link>
        </div>
        <button
          type="button"
          className="px-4 py-[6px] border border-white rounded-lg text-white"
        >
          로그인
        </button>
      </div>
    </header>
  );
}

export default Gnb;
