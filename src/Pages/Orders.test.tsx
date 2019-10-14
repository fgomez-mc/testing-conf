import "../helpers/test-helper";
import React from "react";
import { mount } from "enzyme";
import Orders from "./Orders";
import OrdersTable from "../Components/Orders/OrdersTable";

describe("Orders", () => {
  const wrapper = mount(<Orders orders={[]} />);
  it("can be mounted", () => {
    expect(wrapper.find(".Orders")).toHaveLength(1);
  });
  it("renders 1 orders table component", () => {
    expect(wrapper.find(OrdersTable)).toHaveLength(1);
  });
});
