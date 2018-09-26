import React from 'react';
import ReactDOM from 'react-dom';
import { MdAdd, MdAccessAlarm } from 'react-icons/md';

import { ActionButton, Fab } from './fab';
import './styles.css';

const components = [
  {
    mainButtonStyles: {
      backgroundColor: '#27ae60',
    },
    actionButtonStyles: {
      backgroundColor: '#16a085',
    },
  },
  {
    mainButtonStyles: {
      backgroundColor: '#9b59b6',
    },
    actionButtonStyles: {
      backgroundColor: '#8e44ad',
    },
  },
  {
    mainButtonStyles: {
      backgroundColor: 'white',
      color: 'black',
    },
    actionButtonStyles: {
      backgroundColor: '#ddd',
      color: 'red',
    },
  },
  {
    mainButtonStyles: {
      backgroundColor: '#27ae60',
    },
    actionButtonStyles: {
      backgroundColor: '#16a085',
    },
  },
  {
    mainButtonStyles: {
      backgroundColor: '#9b59b6',
    },
    actionButtonStyles: {
      backgroundColor: '#8e44ad',
    },
  },
  {
    mainButtonStyles: {
      backgroundColor: 'white',
      color: 'black',
    },
    actionButtonStyles: {
      backgroundColor: '#ddd',
      color: 'red',
    },
  },
  {
    mainButtonStyles: {
      backgroundColor: '#27ae60',
    },
    actionButtonStyles: {
      backgroundColor: '#16a085',
    },
  },
  {
    mainButtonStyles: {
      backgroundColor: '#9b59b6',
    },
    actionButtonStyles: {
      backgroundColor: '#8e44ad',
    },
  },
  {
    mainButtonStyles: {
      backgroundColor: 'white',
      color: 'black',
    },
    actionButtonStyles: {
      backgroundColor: '#ddd',
      color: 'red',
    },
  },
];

const p = n =>
  n % 2
    ? {
        top: 0,
        right: n * 60 - 60,
      }
    : {
        bottom: 0,
        left: n * 60,
      };

const renderComponents = c =>
  c.map(({ mainButtonStyles, actionButtonStyles }, i) => (
    <Fab
      mainButtonStyles={mainButtonStyles}
      actionButtonStyles={actionButtonStyles}
      position={p(i)}
      component={<MdAdd />}
    >
      <ActionButton text="This is React" onClick={e => console.log(e)}>
        <MdAdd />
      </ActionButton>
      <ActionButton text="This is cool" onClick={() => alert('Second one!')}>
        <MdAccessAlarm />
      </ActionButton>
      <ActionButton text="This is another one!!" onClick={() => alert('Third one!')}>
        <MdAdd />
      </ActionButton>
      <ActionButton text="And again" onClick={() => alert('Fourth one!')}>
        <MdAccessAlarm />
      </ActionButton>
    </Fab>
  ));

const App = () => renderComponents(components);

ReactDOM.render(<App />, document.getElementById('root'));
