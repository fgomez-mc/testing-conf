import "../../helpers/test-helper";
import React from "react";
import { mount } from "enzyme";
import OrdersTable from "./OrdersTable";

describe("OrdersTable", () => {
  const wrapper = mount(<OrdersTable orders={[]} />);
  it("can be mounted", () => {
    expect(wrapper.find("table")).toHaveLength(1);
  });
  it("renders a table header for order id", () => {
    expect(wrapper.find("th.order-id")).toHaveLength(1);
  });
  it("renders a table header for order id", () => {
    expect(wrapper.find("th.order-status")).toHaveLength(1);
  });
});
