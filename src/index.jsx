import React from 'react';

import './styles.sass';

let e;

const cl = (click, fn) => {
  e = document.body.addEventListener('click', () => click && fn());
};

const AB = p => (
  <button type="button" {...p} className="rtf--ab">
    {p.children}
  </button>
);

const MB = p => (
  <button type="button" className="rtf--mb" {...p}>
    {p.children}
  </button>
);

class Fab extends React.Component {
  static defaultProps = {
    position: { bottom: 0, right: 0 },
    event: 'hover',
  };

  state = { open: false };

  componentDidMount() {
    cl(this.props.event === 'click', this.close);
  }

  componentWillUnmount() {
    document.removeEventListener('click', e);
  }

  get h() {
    return this.props.event === 'hover';
  }

  enter = () => this.h && this.open();

  leave = () => this.h && this.close();

  open = () => this.setState({ open: true });

  close = () => this.setState({ open: false });

  toggle = () =>
    this.props.event === 'click' ? (this.state.open ? this.close() : this.open()) : null;

  rc() {
    const { children: c, actionButtonStyles: a, position: p } = this.props;
    const cc = React.Children.count(c);
    if (cc > 6) console.warn('react-tiny-fab only supports up to 6 action buttons');
    return React.Children.map(c, ch => (
      <li className={`rtf--ab__c ${'top' in p ? 'top' : ''}`}>
        {React.cloneElement(ch, { style: a })}
        {ch.props.text && <span className={'right' in p ? 'right' : ''}>{ch.props.text}</span>}
      </li>
    ));
  }

  render() {
    const { position, component, mainButtonStyles } = this.props;
    return (
      <ul
        onMouseEnter={this.enter}
        onMouseLeave={this.leave}
        className={`rtf ${this.state.open ? 'open' : 'closed'}`}
        style={position}
      >
        <li className="rtf--mb__c">
          <MB onClick={this.toggle} style={mainButtonStyles}>
            {component}
          </MB>
          <ul>{this.rc()}</ul>
        </li>
      </ul>
    );
  }
}

export { Fab, AB as ActionButton };
