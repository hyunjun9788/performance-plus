import Link from 'next/link';

function FreeBoard() {
  return (
    <>
      <li className="relative flex items-center">
        <Link href="/board/concert">
          <span>콘서트</span>
        </Link>
      </li>
      <li className="relative flex items-center before:content-['|'] before:pr-[1.3rem]">
        <Link href="/board/musical">
          <span>뮤지컬</span>
        </Link>
      </li>
      <li className="relative flex items-center before:content-['|'] before:pr-[1.3rem]">
        <Link href="/board/play">
          <span>연극</span>
        </Link>
      </li>
    </>
  );
}

export default FreeBoard;
