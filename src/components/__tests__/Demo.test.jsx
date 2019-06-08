import React from 'react';
import ReactDOM from 'react-dom';
import Demo from '../Demo';

it('renders Demo.jsx without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Demo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
