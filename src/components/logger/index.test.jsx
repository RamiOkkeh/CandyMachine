import { render, screen } from '@testing-library/react';
import Enzyme, {shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import Logger from "./index"

Enzyme.configure({adapter: new Adapter()})

test('renders logger component', () => {
  let wrapper = shallow(<Logger history="test test" />);
  let instance = wrapper.instance();
  expect(instance).toBeDefined();
});
