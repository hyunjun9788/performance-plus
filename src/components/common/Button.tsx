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
    button:
      'bg-transparent border border-solid border-gray-9F disabled:border-gray-35',
    p: 'text-gray-9F group-disabled:text-gray-6E',
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
