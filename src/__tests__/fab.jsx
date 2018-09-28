import 'jest-dom/extend-expect';
import React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';

import { Action, Fab, MB } from '../index';

describe('<Fab />', () => {
  afterEach(cleanup);

  describe('<MB />', () => {
    it('[snapshot] is loaded with default props', () => {
      const { container } = render(<MB>+</MB>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should open the menu when hovered and close when exited', async () => {
      const { getByTestId } = render(
        <Fab icon={<span>+</span>}>
          <Action>+</Action>
        </Fab>
      );

      const fab = getByTestId('fab');

      // Sanity check to make sure that it is in fact closed
      expect(fab).not.toHaveClass('rtf open');
      fireEvent.mouseEnter(getByTestId('fab'));
      expect(fab).toHaveClass('rtf open');
      fireEvent.mouseLeave(getByTestId('fab'));
      expect(fab).not.toHaveClass('rtf open');
    });

    it('should open the menu when clicked', () => {
      const { getByTestId } = render(
        <Fab icon={<span>+</span>} event="click">
          <Action>+</Action>
        </Fab>
      );

      const fab = getByTestId('fab');
      const mainButton = getByTestId('main-button');

      // Sanity check...
      expect(fab).not.toHaveClass('rtf open');
      fireEvent.click(mainButton);
      expect(fab).toHaveClass('rtf open');
    });

    it('should NOT open the menu when hovered if the event type is "click"', () => {
      const { getByTestId } = render(
        <Fab icon={<span>+</span>} event="click">
          <Action>+</Action>
        </Fab>
      );

      const fab = getByTestId('fab');

      fireEvent.mouseEnter(fab);
      expect(fab).not.toHaveClass('rtf open');
      expect(fab).toHaveClass('rtf closed');
    });

    it('should NOT open the menu when clicked if the event type is "hover"', () => {
      const { getByTestId } = render(
        <Fab icon={<span>+</span>} event="hover">
          <Action>+</Action>
        </Fab>
      );

      const fab = getByTestId('fab');
      const mainButton = getByTestId('main-button');

      fireEvent.click(mainButton);
      expect(fab).not.toHaveClass('rtf open');
      expect(fab).toHaveClass('rtf closed');
    });
  });

  describe('<Action />', () => {
    it('[snapshot] is loaded with the default props', () => {
      const { container } = render(<Action>+</Action>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should allow the onClick handler to fire', () => {
      const spy = jest.fn();
      const { getByTestId } = render(
        <Fab icon={<span>+</span>} event="click">
          <Action onClick={spy}>+</Action>
        </Fab>
      );

      const fab = getByTestId('fab');
      const action = getByTestId('action-button-0');

      fireEvent.click(fab);
      fireEvent.click(action);

      expect(spy).toHaveBeenCalled();
    });
  });
});
