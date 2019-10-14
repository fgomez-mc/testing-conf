import "./helpers/test-helper";
import React from "react";
import { mount } from "enzyme";
import App from "./App";
import Orders from "./Pages/Orders";

describe("App", () => {
  const wrapper = mount(<App />);

  it("can be mounted", () => {
    expect(wrapper.find(".App")).toHaveLength(1);
    expect(wrapper.find("h1").text()).toBe("Order Manager");
  });
  it("should contain the render panel", () => {
    expect(wrapper.find(Orders)).toHaveLength(1);
  });
});
