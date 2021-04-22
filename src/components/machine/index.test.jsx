import { render, screen } from '@testing-library/react';
import Enzyme, {shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Machine from "./index"
import Candy from "./Candy"
import MoneyDisplay from "./moneyDisplay"
import EarnedDisplay from "./earnedDisplay"

Enzyme.configure({adapter: new Adapter()})

test('renders machine component', () => {
  let methods = {currentMoney: 0, earned: 0}
  let wrapper = shallow(<Machine methods={methods}/>);
  let instance = wrapper.instance();
  expect(instance).toBeDefined();
});

test('it has a list of all candies', () => {
  let methods = {currentMoney: 0, earned: 0}
  let wrapper = shallow(<Machine methods={methods}/>);
  let instance = wrapper.instance();
  expect(instance.state.snacks).toHaveLength(25);
});

test('it has a method for selecting candies by id', () => {
  let methods = {currentMoney: 0, earned: 0}
  let wrapper = shallow(<Machine methods={methods}/>);
  let instance = wrapper.instance();
  expect(instance.selectItem).toBeDefined();
});

test('it renders 25 candy items (5 x 5)', () => {
  let methods = {currentMoney: 0, earned: 0}
  let wrapper = shallow(<Machine methods={methods}/>);
  expect(wrapper.find(Candy)).toHaveLength(25);
});

test('it displays a credit counter', () => {
  let methods = {currentMoney: 0, earned: 0}
  let wrapper = shallow(<Machine methods={methods}/>);
  expect(wrapper.find(MoneyDisplay)).toHaveLength(1);
});

test('it displays an earned money counter', () => {
  let methods = {currentMoney: 0, earned: 0}
  let wrapper = shallow(<Machine methods={methods}/>);
  expect(wrapper.find(EarnedDisplay)).toHaveLength(1);
});