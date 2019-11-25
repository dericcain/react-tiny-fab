import React, { useState } from 'react';

import './styles.scss';

const AB = p => (
  <button type="button" {...p} className="rtf--ab">
    {p.children}
  </button>
);

export const MB = p => (
  <button type="button" className="rtf--mb" {...p}>
    {p.children}
  </button>
);

const defaultPosition = { bottom: 24, right: 24 };

const Fab = ({
  event = 'hover',
  position = defaultPosition,
  alwaysShowTitle = false,
  children,
  icon,
  mainButtonStyles,
  onClick = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const enter = () => event === 'hover' && open();
  const leave = () => event === 'hover' && close();
  const toggle = e => {
    e.persist();
    onClick(e);
    return event === 'click' ? (isOpen ? close() : open()) : null;
  };

  const actionOnClick = userFunc => {
    setIsOpen(false);
    setTimeout(() => {
      userFunc();
    }, 1);
  };

  const rc = () => {
    if (React.Children.count(children) > 6)
      console.warn('react-tiny-fab only supports up to 6 action buttons');
    const ariaHidden = alwaysShowTitle || !isOpen;

    return React.Children.map(
      children,
      (ch, i) =>
        ch && (
          <li className={`rtf--ab__c ${'top' in position ? 'top' : ''}`}>
            {React.cloneElement(ch, {
              'data-testid': `action-button-${i}`,
              'aria-label': ch.props.text || `Menu button ${i + 1}`,
              'aria-hidden': ariaHidden,
              ...ch.props,
              onClick: () => actionOnClick(ch.props.onClick),
            })}
            {ch.props.text && (
              <span
                className={`${'right' in position ? 'right' : ''} ${
                  alwaysShowTitle ? 'always-show' : ''
                }`}
                aria-hidden={ariaHidden}
              >
                {ch.props.text}
              </span>
            )}
          </li>
        )
    );
  };

  return (
    <ul
      onMouseEnter={enter}
      onMouseLeave={leave}
      className={`rtf ${isOpen ? 'open' : 'closed'}`}
      data-testid="fab"
      style={position}
    >
      <li className="rtf--mb__c">
        <MB
          onClick={toggle}
          style={mainButtonStyles}
          data-testid="main-button"
          role="button"
          aria-label="Floating menu"
          tabIndex="0"
        >
          {icon}
        </MB>
        <ul>{rc()}</ul>
      </li>
    </ul>
  );
};

export { Fab, AB as Action };
