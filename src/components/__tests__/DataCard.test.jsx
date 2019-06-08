import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import DataCard from '../DataCard';

it('renders DataCard.jsx without crashing', () => {
  const div = document.createElement('div');
  let wrapper = shallow(
    <DataCard
      title="Computers"
      count={1000}
      icon="computer"
    />);
  expect(wrapper.text()).toMatch('Computers');
  ReactDOM.unmountComponentAtNode(div);
});
