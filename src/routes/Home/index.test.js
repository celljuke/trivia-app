import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from './index';
import store from '../../store';

describe('<Home />', () => {
  it('renders without crashing', () => {
    const component = shallow(<Home store={store} />);
    expect(component).toMatchSnapshot();
  });

  it('has welcome title', () => {
    const wrapper = mount(<Home store={store} />);
    const welcome = 'WELCOME TO THE TRIVIA CHALLENGE';
    expect(wrapper.find('.page-title')).toHaveText(welcome);
  });
});
