import { IconProps, IconType } from '@/types/iconType';
import HomeIcon from '../../../public/svg/house-solid.svg';
import BoardIcon from '../../../public/svg/comment-solid.svg';
import SearchIcon from '../../../public/svg/magnifying-glass-solid.svg';
import MusicIcon from '../../../public/svg/music-solid.svg';
import ReviewIcon from '../../../public/svg/pen-solid.svg';
import MusicalIcon from '../../../public/svg/people-pulling-solid.svg';
import PlayIcon from '../../../public/svg/people-roof-solid.svg';
import MapIcon from '../../../public/svg/map-solid.svg';

export const iconTypes: Record<
  IconType,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  HomeIcon,
  ReviewIcon,
  BoardIcon,
  MusicIcon,
  SearchIcon,
  PlayIcon,
  MusicalIcon,
  MapIcon,
};

export const Icon = ({ name, className, onClick }: IconProps) => {
  const IconComponent = iconTypes[name];

  return <IconComponent className={className} onClick={onClick} />;
};
