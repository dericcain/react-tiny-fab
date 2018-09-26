import React from 'react';
import ReactDOM from 'react-dom';
import {
  MdAdd,
  MdEmail,
  MdNotifications,
  MdPages,
  MdSearch,
  MdCode,
  MdFavorite,
} from 'react-icons/md';

import { ActionButton, Fab } from './fab';
import './styles.css';

const components = [
  {
    position: {
      bottom: 0,
      left: 0,
    },
    event: 'hover',
    mainButtonStyles: {
      backgroundColor: '#27ae60',
    },
    actionButtonStyles: {
      backgroundColor: '#16a085',
    },
  },
  {
    position: {
      top: 0,
      right: 0,
    },
    event: 'click',
    mainButtonStyles: {
      backgroundColor: '#9b59b6',
    },
    actionButtonStyles: {
      backgroundColor: '#8e44ad',
    },
  },
  {
    position: {
      top: 0,
      left: 0,
    },
    event: 'hover',
    mainButtonStyles: {
      backgroundColor: '#95a5a6',
      color: '#34495e',
    },
    actionButtonStyles: {
      backgroundColor: '#696969',
      color: '#27ae60',
    },
  },
  {
    position: {
      bottom: 0,
      right: 0,
    },
    event: 'click',
    mainButtonStyles: {
      backgroundColor: '#e74c3c',
    },
    actionButtonStyles: {
      backgroundColor: '#ffffff',
      color: '#34495e',
    },
  },
];

const renderComponents = c =>
  c.map(({ mainButtonStyles, actionButtonStyles, position, event }, i) => (
    <Fab
      mainButtonStyles={mainButtonStyles}
      actionButtonStyles={actionButtonStyles}
      position={position}
      component={<MdAdd />}
      event={event}
      key={i}
    >
      <ActionButton
        text="Email"
        onClick={e => {
          alert('I printed the event to the console.');
          console.log(e);
        }}
      >
        <MdEmail />
      </ActionButton>
      <ActionButton text="Notifications" onClick={() => alert('Here is your notification.')}>
        <MdNotifications />
      </ActionButton>
      <ActionButton text="Fullscreen" onClick={() => alert('What?')}>
        <MdPages />
      </ActionButton>
      <ActionButton text="Search" onClick={() => alert('No search...')}>
        <MdSearch />
      </ActionButton>
      <ActionButton text="Editor" onClick={e => console.log(e)}>
        <MdCode />
      </ActionButton>
      <ActionButton text="Like it!" onClick={() => alert('This is fantastic!')}>
        <MdFavorite />
      </ActionButton>
    </Fab>
  ));

const App = () => <React.Fragment>{renderComponents(components)}</React.Fragment>;

ReactDOM.render(<App />, document.getElementById('root'));
