import React from 'react';
import ReactDOM from 'react-dom';
import { MdPlusOne, MdAdd, MdAccessAlarm } from 'react-icons/md';

import Fab, { ActionButton } from './fab';
import './styles.css';

const App = () => (
  <Fab position="bottom-left" component={<MdPlusOne />}>
    <ActionButton text="This is React" onClick={(e) => console.log(e)}>
      <MdAdd/>
    </ActionButton>
    <ActionButton text="This is cool" onClick={() => alert('Second one!')}>
      <MdAccessAlarm/>
    </ActionButton>
    <ActionButton text="This is another one!!" onClick={() => alert('Third one!')}>
      <MdAdd/>
    </ActionButton>
    <ActionButton text="And again" onClick={() => alert('Fourth one!')}>
      <MdAccessAlarm/>
    </ActionButton>
  </Fab>
);

ReactDOM.render(<App />, document.getElementById('root'));
