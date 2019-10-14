import "../../../helpers/test-helper";
import React from "react";
import OrdersTableHeader from "./OrdersTableHeader";
import { mount } from "enzyme";

describe("OrdersTableHeader", () => {
  const wrapper = mount(
    <table>
      <OrdersTableHeader />
    </table>
  );
  it("can be created", () => {
    expect(wrapper.find("OrdersTableHeader")).toHaveLength(1);
  });
  it("should render field for order id", () => {
    expect(wrapper.find("th.order-id")).toHaveLength(1);
  });
  it("should render field for order status", () => {
    expect(wrapper.find("th.order-status")).toHaveLength(1);
  });
});
