import { IconType } from '@/types/iconType';
import Link from 'next/link';
import { Icon } from './common/Icon';

interface MenuItemProps {
  icon: IconType;
  text: string;
  path: string;
  isClicked: boolean;
}
const MenuItem = ({ icon, text, path, isClicked }: MenuItemProps) => {
  const clickedMenuStyle = isClicked ? 'bg-gray-36' : '';

  return (
    <li className="hover:bg-gray-36 rounded-lg duration-150">
      <Link
        href={path}
        className={`w-full flex items-center px-3 py-3 gap-4 rounded-lg ${clickedMenuStyle} $`}
      >
        <Icon name={icon} className="fill-gray-97 w-[20px]" />
        <span className="leading-[2px]">{text}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
