import { IconProps, IconType } from '@/types/iconType';
import HomeIcon from '../../../public/house-solid.svg';
import BoardIcon from '../../../public/comment-solid.svg';
import SearchIcon from '../../../public/magnifying-glass-solid.svg';
import MusicIcon from '../../../public/music-solid.svg';
import ReviewIcon from '../../../public/pen-solid.svg';
import MusicalIcon from '../../../public/people-pulling-solid.svg';
import PlayIcon from '../../../public/people-roof-solid.svg';
import MapIcon from '../../../public/map-solid.svg';

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
