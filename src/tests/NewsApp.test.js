import React from "react";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";

import { shallow, mount, configure } from "enzyme";
import App from "../App";

configure({ adapter: new Adapter() });

// eslint-disable-next-line no-undef

//Mocha used to define the test cases collection
//Enzyme used to load the control and interact with props and status
//Chai is assertion library to conduct behavioral driven test.

describe("Test Suit for App component", function() {
  it("renders without crashing", function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App")).length(1); //Chai assertion function
  });

  // we can author what ever scenario which can be translated as a test case using Mocha
  //, then we can mount, shallow components using enzyme and wite the assertion functions which
  // we need to execute using chai
  it("New list has items", function() {
    const wrapper = mount(<App />);
  });
});
