import * as React from 'react';

import { ActionButton, IActionButton, MainButton } from './buttons';
import './styles.sass';

type PositionString = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface IPositionPropObject {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

type IPosition = PositionString | IPositionPropObject;

const calculatePosition = (positionProp: IPosition): IPositionPropObject => {
  const rootStyles = document.documentElement.style;
  if (typeof positionProp === 'string') {
    switch (positionProp) {
      case 'top-left':
        if (rootStyles) {
          rootStyles.setProperty('--react-fab-text-percent', 'none');
          rootStyles.setProperty('--react-fab-position-multiplier', '-1');
        }
        return { top: 0, left: 0 };
      case 'top-right':
        if (rootStyles) {
          rootStyles.setProperty('--react-fab-position-multiplier', '-1');
        }
        return { top: 0, right: 0 };
      case 'bottom-left':
        if (rootStyles) {
          rootStyles.setProperty('--react-fab-text-percent', 'z');
        }
        return { bottom: 0, left: 0 };
      case 'bottom-right':
      default:
        return { bottom: 0, right: 0 };
    }
  }
  if (Boolean(positionProp.left && rootStyles)) {
    rootStyles.setProperty('--react-fab-text-percent', 'none');
  }
  return positionProp;
};

interface IFabProps {
  position: IPosition;
  component: any;
  mainButtonStyles?: React.CSSProperties;
  actionButtonStyles?: React.CSSProperties;
}

interface IFabState {
  isOpen: boolean;
}

class Fab extends React.Component<IFabProps, IFabState> {

  public static defaultProps = {
    mainButtonStyles: {},
    actionButtonStyles: {},
  };

  public state = {
    isOpen: false,
  };

  public render() {
      const { isOpen } = this.state;
      const { position, component, mainButtonStyles } = this.props;

      return (
      <ul
        onMouseEnter={this.handleOnMouseEnter}
        onMouseLeave={this.handleOnMouseLeave}
        className="react-fab"
        style={calculatePosition(position)}
      >
        <li>
          <MainButton isOpen={isOpen} style={mainButtonStyles}>
            {component}
          </MainButton>
          <ul className={isOpen ? 'open' : 'closed'}>
            {this.renderChildren()}
          </ul>
        </li>
      </ul>
    );
  }

  private handleOnMouseEnter = (): void => {
    this.setState({ isOpen: true });
  }

  private handleOnMouseLeave = (): void => {
    this.setState({ isOpen: false });
  }

  private static MAX_ACTION_BUTTONS = 6;

  private renderChildren() {
    const { children, actionButtonStyles } = this.props;
    const childCount = React.Children.count(children);
    if (childCount > Fab.MAX_ACTION_BUTTONS) {
      console.warn(`react-tiny-fab only supports up to ${Fab.MAX_ACTION_BUTTONS} action buttons and you have ${childCount}.`);
    }
    return React.Children.map(children, (child: React.ReactElement<IActionButton | any>) => (
      <li>
        {React.cloneElement(child, { style: actionButtonStyles })}
        {child.props.text && <span>{child.props.text}</span>}
      </li>
    ));
  }
}

export { Fab as default, ActionButton };
