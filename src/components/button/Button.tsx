import React, {FC} from 'react';

export enum ButtonVariant {
  navbar = '__navbar',
  list = '__list'
}

interface Props {
  children?: JSX.Element | JSX.Element[] | string | string[],
  onClick?: () => void,
  variant?: ButtonVariant
}

export const Button: FC<Props> = ({onClick, variant, children}) => (
    <button
        className={`button button${variant}`}
        onClick={onClick}
    >
        {children}
    </button>
);
