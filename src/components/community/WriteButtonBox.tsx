'use client';

import Link from 'next/link';
import Button, { ButtonKind } from '../common/Button';
import { usePathname } from 'next/navigation';

const WriteButtonBox = () => {
  const pathname = usePathname();

  return (
    <div className="relative">
      <Link href={`/write/${pathname}`} className="absolute right-0 top-4 ">
        <Button kind={ButtonKind.tertiary}>글쓰기</Button>
      </Link>
    </div>
  );
};

export default WriteButtonBox;
