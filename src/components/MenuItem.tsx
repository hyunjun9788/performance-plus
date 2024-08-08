import { IconType } from '@/types/iconType';
import { Icon } from './Icon';

interface MenuItemProps {
  icon: IconType;
  text: string;
}
const MenuItem = ({ icon, text }: MenuItemProps) => (
  <li className="px-3 py-2">
    <button type="button" className="w-full flex items-center gap-4">
      <Icon name={icon} className="fill-gray-97 w-[20px]" />
      {text}
    </button>
  </li>
);

export default MenuItem;
