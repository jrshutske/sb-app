import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import InfoDialog from '../InfoDialog';

it('renders InfoDialog without crashing', () => {
  const div = document.createElement('div');
  const data = {'displayname' : 'testname', 'os' : 'Windows', 'osVersioon': 'Win7'}
  ReactDOM.render(
    <InfoDialog
      open
      rowData={data}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});
