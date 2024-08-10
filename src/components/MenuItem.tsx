import { IconType } from '@/types/iconType';
import Link from 'next/link';
import { Icon } from './common/Icon';

interface MenuItemProps {
  icon: IconType;
  text: string;
  path: string;
  isClicked: boolean;
  isClickedFoldButton: boolean;
}
const MenuItem = ({
  icon,
  text,
  path,
  isClicked,
  isClickedFoldButton,
}: MenuItemProps) => {
  const clickedMenuStyle = isClicked ? 'bg-gray-36' : '';
  return (
    <li className="hover:bg-gray-36 rounded-lg duration-150">
      <Link
        href={path}
        className={`w-full flex items-center px-3 py-2 gap-4 rounded-lg ${clickedMenuStyle}`}
      >
        <Icon name={icon} className="fill-gray-97 w-[20px]" />
        <span className={`${isClickedFoldButton ? 'hidden' : ''}`}>{text}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
