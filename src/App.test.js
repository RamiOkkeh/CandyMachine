import { render, screen } from '@testing-library/react';
import Enzyme, {shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import App from './App';
import Machine from "./components/machine"
import Payments from "./components/payments"
import Logger from "./components/logger"

Enzyme.configure({adapter: new Adapter()})

test('renders machine component', () => {
  let wrapper = shallow(<App />);

  expect(wrapper.find(Machine)).toHaveLength(1);
});

test('renders payments component', () => {
  let wrapper = shallow(<App />);

  expect(wrapper.find(Payments)).toHaveLength(1);
});

test('renders logger component', () => {
  let wrapper = shallow(<App />);

  expect(wrapper.find(Logger)).toHaveLength(1);
});

test('has a method for purchasing items', () => {
  let wrapper = shallow(<App />);
  let instance = wrapper.instance()
  expect(instance.purchase).toBeDefined();
});

test('has three methods for depositing money', () => {
  let wrapper = shallow(<App />);
  let instance = wrapper.instance()
  expect(instance.addCoin).toBeDefined();
  expect(instance.addNote).toBeDefined();
  expect(instance.addCard).toBeDefined();
});
