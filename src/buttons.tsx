import * as React from 'react';


const cx = (className: string, prevClassName?: string): string => Boolean(prevClassName)
  ? `${className} ${prevClassName}`
  : `${className}`;

export interface IActionButton {
  children: any;
  text?: string;
}

export const ActionButton: React.SFC<IActionButton> = ({children, ...props}) => (
  <button type="button" {...props}>
    {children}
  </button>
);

interface IMainButton {
  children: any;
  isOpen: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const MainButton: React.SFC<IMainButton> = ({children, isOpen, className, style, ...props}) => (
  <button
    type="button"
    className={cx(isOpen ? 'open' : 'closed', className)}
    style={style}
    {...props}
  >
    {children}
  </button>
);
