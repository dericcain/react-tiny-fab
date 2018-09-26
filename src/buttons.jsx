import React from 'react';

const cx = (className, prevClassName) =>
  prevClassName ? `${className} ${prevClassName}` : `${className}`;

export const ActionButton = ({ children, ...props }) => (
  <button type="button" {...props}>
    {children}
  </button>
);

export const MainButton = ({ children, isOpen, className = '', style, ...props }) => (
  <button
    type="button"
    className={cx(isOpen ? 'open' : 'closed', className)}
    style={style}
    {...props}
  >
    {children}
  </button>
);
