import * as React from 'react';

import { ActionButton, MainButton } from './buttons';
import './styles.sass';

class Fab extends React.Component {
  static MAX_ACTIONS = 6;

  static defaultProps = {
    position: { bottom: 0, right: 0 },
  };

  state = {
    isOpen: false,
  };

  enter = () => {
    this.setState({ isOpen: true });
  };

  leave = () => {
    this.setState({ isOpen: false });
  };

  renderChildren() {
    const { children: c, actionButtonStyles: a, position: p } = this.props;
    const childCount = React.Children.count(c);
    if (childCount > Fab.MAX_ACTIONS) {
      console.warn(
        `react-tiny-fab only supports up to ${
          Fab.MAX_ACTIONS
        } action buttons and you have ${childCount}.`
      );
    }
    return React.Children.map(c, ch => (
      <li className={p.hasOwnProperty('top') && 'top'}>
        {React.cloneElement(ch, { style: a })}
        {ch.props.text && (
          <span className={p.hasOwnProperty('right') && 'right'}>{ch.props.text}</span>
        )}
      </li>
    ));
  }

  render() {
    const { isOpen } = this.state;
    const { position, component, mainButtonStyles } = this.props;

    return (
      <ul
        onMouseEnter={this.enter}
        onMouseLeave={this.leave}
        className="react-tiny-fab"
        style={position}
      >
        <li>
          <MainButton isOpen={isOpen} style={mainButtonStyles}>
            {component}
          </MainButton>
          <ul className={isOpen ? 'open' : 'closed'}>{this.renderChildren()}</ul>
        </li>
      </ul>
    );
  }
}

export { Fab, ActionButton };
