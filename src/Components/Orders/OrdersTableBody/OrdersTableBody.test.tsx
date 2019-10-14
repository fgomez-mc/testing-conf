import "../../../helpers/test-helper";
import React from "react";
import OrdersTableBody from "./OrdersTableBody";
import { mount } from "enzyme";

import { testOrders } from "../../../helpers/seeds";

describe("OrdersTableBody", () => {
  const wrapper = mount(
    <table>
      <OrdersTableBody orders={testOrders} />
    </table>
  );
  it("can be created", () => {
    expect(wrapper.find("OrdersTableBody")).toHaveLength(1);
  });
  it("should render td for each order", () => {
    expect(wrapper.find("td").length).toBeGreaterThan(0);
  });
});
