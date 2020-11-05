import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Button from './Button';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Button {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe('Button', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('renders without error', () => {
    const button = findByTestAttr(wrapper, 'button');
    expect(button.length).toBe(1);
  });

  test('Button label is not empty', () => {
    const button = findByTestAttr(wrapper, 'button');
    expect(button.text().length).not.toBe(0);
  });
  test('Button can receive label', () => {
    wrapper = setup({ label: 'Hello' });
    const button = findByTestAttr(wrapper, 'button');
    expect(button.text()).toBe('Hello');
  });
  test('Button can trigger action on click', () => {
    const logMessage = 'Hello';
    wrapper = setup({ onClick: () => console.log(logMessage) });
    const button = findByTestAttr(wrapper, 'button');
    console.log = jest.fn();
    button.simulate('click');
    expect(console.log).toHaveBeenCalledWith(logMessage);
  });
});
