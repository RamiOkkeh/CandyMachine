import { render, screen } from '@testing-library/react';
import Enzyme, {shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Pad from "./index"

Enzyme.configure({adapter: new Adapter()})

test('renders Pad component', () => {
  let wrapper = shallow(<Pad />);
  let instance = wrapper.instance();
  // console.log(instance)
  expect(instance).toBeDefined();
});

test('it has a list of numpad values', () => {
  let wrapper = shallow(<Pad/>);
  let instance = wrapper.instance();
  expect(instance.state.vals).toHaveLength(12);
});

test('it has a method for handling user onClick events', () => {
  let wrapper = shallow(<Pad/>);
  let instance = wrapper.instance();
  expect(instance.onPress).toBeDefined();
});