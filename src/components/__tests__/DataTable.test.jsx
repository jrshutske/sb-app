import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import DataTable from '../DataTable';

it('renders DataTable without crashing', () => {
  const div = document.createElement('div');
  const columns = [{ title: 'Display Name', field: 'displayname'}]
  const data = [{'displayname' : 'testname', 'os' : 'Windows', 'osVersioon': 'Win7'}]
  ReactDOM.render(
    <DataTable
      activeCard="Computers"
      columns={columns}
      data={data}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});
