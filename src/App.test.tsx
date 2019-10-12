import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { mount } from "enzyme";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App", () => {
  const wrapper = mount(<App />);

  it("can be mounted", () => {
    expect(wrapper.find(".App")).toHaveLength(1);
    expect(wrapper.find("h1").text()).toBe("Order Manager");
  });
  it("should contain the render panel", () => {
    expect(wrapper.find(".OrderPanel")).toHaveLength(1);
  });
});
