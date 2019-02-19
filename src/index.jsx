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

const Fab = ({ event, children, position, icon, mainButtonStyles }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const enter = () => event === 'hover' && open();
  const leave = () => event === 'hover' && close();
  const toggle = () => (event === 'click' ? (isOpen ? close() : open()) : null);

  const actionOnClick = userFunc => {
    setIsOpen(false);
    setTimeout(() => {
      userFunc();
    }, 1);
  };

  const rc = () => {
    if (React.Children.count(children) > 6)
      console.warn('react-tiny-fab only supports up to 6 action buttons');
    return React.Children.map(children, (ch, i) => (
      <li className={`rtf--ab__c ${'top' in position ? 'top' : ''}`}>
        {React.cloneElement(ch, {
          'data-testid': `action-button-${i}`,
          'aria-label': ch.props.text || `Menu button ${i + 1}`,
          'aria-hidden': !isOpen,
          ...ch.props,
          onClick: () => actionOnClick(ch.props.onClick),
        })}
        {ch.props.text && (
          <span className={'right' in position ? 'right' : ''} aria-hidden={!isOpen}>
            {ch.props.text}
          </span>
        )}
      </li>
    ));
  }

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
}

Fab.defaultProps = {
  position: { bottom: 0, right: 0 },
  event: 'hover',
};

export { Fab, AB as Action };
