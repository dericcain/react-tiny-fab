![React Tiny FAB](https://raw.githubusercontent.com/dericgw/react-tiny-fab/master/logo.png)

> A tiny (~700 byte gzip) WAI-ARIA compliant Floating Action Button for React

> `react-tiny-fab` v3 now relies on React version 16.8 and up because it is implemented using [React Hooks](https://reactjs.org/docs/hooks-intro.html)

Want to use a Floating Action Button without having to import the whole Material Design Components library? Weighing in
at only around 671 bytes gzipped, React Tiny FAB is a great solution. It is a lightweight, fast, and flexible component.

![React Tiny FAB](https://raw.githubusercontent.com/dericgw/react-tiny-fab/master/fab.gif)

## Install

```
npm install react-tiny-fab
yarn add react-tiny-fab
```

## Usage
There are two components available for import - `Fab` and `Action`. You import them like this:

```js
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
```

Here is an example of how you would use the components:
```js
// The Fab is the main button. Pass any component to the icon prop and choose 
// either click or hover for the event (default is hover)
<Fab
  mainButtonStyles={mainButtonStyles}
  actionButtonStyles={actionButtonStyles}
  position={position}
  icon={<MdAdd />}
  event={event}
>
  // The Action components are the "buttons" that appear when the Fab is open. You can use the out-of-the-box Action 
  // component or you can use a custom component of any type and style it any way that you'd like. The "text" prop
  // is the popup label that appears when the Action component is hovered.
  <Action
    text="Email"
    onClick={handleEmailOnClick}
  />
  <Action
      text="Help"
      onClick={handleHelpOnClick}
    >
    <i className="fa fa-help" />
  </Action>
  // Using a custom component for this one. See another example in "example/src/index.js"
  <SomeCustomComponent
    text="Foobar!"
    onClick={handleTheFooBarOnClick}
  >
      <i className="fa fa-foo-bar-fa-foo" />
    </SomeCustomComponent>
</Fab>
```

## Components
### `<Fab />`
This is the main component that controls the Floating Action Button.

#### Props
| Prop                 | Type                       | Default                   | Required | Description                                                                                                                                |
|----------------------|----------------------------|-------------------------- |----------|--------------------------------------------------------------------------------------------------------------------------------------------|
| `mainButtonStyles`   | React.CSSProperties object | {}                        | false    | This object is passed to the main button's `style` prop so use React styles to style the button.                                           |
| `position`           | object                     | `{ bottom: 24, right: 24 }` | false    | Where do you want your FAB to be located? Use `top`, `left`, `bottom`, `right` properties to declare where you want the FAB to be positioned. |
| `icon`               | React Element/Component    |                           | true     | This element/component will be used as the icon for the main button. This can be text, or a Font Awesome icon, or any other component. |
| `event`              | string                     | 'hover'                   | false    | What type of event do you want to make the FAB menu active? This can be either `click` or `hover`.                                         |
| `children`           | React Element/Component    |                           | false    | This is the children that will be mapped and rendered. This can be anything. There can be up to 6, but no more than 6. An `Action` component is provided out of the box.           |
| `onClick`            | function                   | null                      | false    | If you only need to use the main button for something, then you can attach an `onClick` handler to the main button. The React Synthetic Event will be passed in just like a normal `onClick` |
| `text`               | string                     | null                      | false    | If you attach an `onClick` handler to the main button, then the original `Action` components would not show. Instead you can attach `text` to display while user hover the FAB |

> Based on the `position` prop, the FAB will figure out the direction of the `<Action />` `text` and also which way to 
> expand when hovered/clicked (up or down).

### `<Action />` 
This component represents the smaller buttons that appear when the main button is hovered/clicked. Now, you do not have 
to use this component. You can use your own custom component(s) and create something totally different than a Floating
Action Button. For instance, you could create your own "Support Button" that when clicked, will display a chat box or 
some type of form that submits a contact request.

#### Props
| Prop       | Type                    | Default | Required | Description                                                                  |
|------------|-------------------------|---------|----------|------------------------------------------------------------------------------|
| `text`     | string                  | ""      | false    | This is the text that will be displayed when one of the actions is hovered.  |
| `children` | React Element/Component |         | false    | This will be the icon/text for the action.                                   |
| `...props` | Anything                |         | false    | Anything you can add to a React component, you can add here, e.g. (`onClick`, `style`, etc.) |

## Demo
Check out the [index.js](./example/index.html) file in the example folder for an example of the traditional FAB and 
also a form pop-up that could be used to send contact information, or something else. 

## Contributing
If you find a bug, submit an issue with enough information to reproduce the bug. If you have a fix, please do not 
hesitate to submit a PR. If you feel that the API needs to be modified, open an issue so that we can discuss it first.

### Running the dev environment
1. Clone the repo - `git clone https://github.com/dericgw/react-tiny-fab.git` && `cd react-tiny-fab`
2. Install the dependencies - `npm i`
3. Run the example - `npm start` _Visit http://localhost:5000_

Once you get that going, you should be able to make changes and the page should refresh automatically when those changes
are saved.

### Testing
This package is only one JS file and it is tested pretty good. Make sure that none of the tests are breaking if changes
are made. Also, if you add new functionality and it *warrants* testing, please add tests. If you need help with this, I
will gladly help.


## Issues
If you find an issue, head over to the [Issues](https://github.com/dericgw/react-tiny-fab/issues) section and let me 
know about it. If you want to be super cool, you can submit a PR that fixes the issue.

## License (MIT)
[Check it out here.](./LICENSE.md)
