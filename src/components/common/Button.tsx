import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export enum ButtonKind {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind: ButtonKind;
}

export const buttonStyle = {
  [ButtonKind.primary]: {
    button: 'bg-main w-[400px] h-12 rounded-lg font-bold hover:bg-dark-main',
  },
  [ButtonKind.secondary]: {
    button: 'py-2 px-5 bg-gray-1e text-main rounded-lg hover:bg-gray-36',
  },
  [ButtonKind.tertiary]: {
    button: 'px-4 py-2 text-white border border-white',
  },
};

const Button = ({ kind, children }: PropsWithChildren<ButtonProps>) => {
  return (
    <button type="button" className={buttonStyle[kind].button}>
      {children}
    </button>
  );
};

export default Button;
