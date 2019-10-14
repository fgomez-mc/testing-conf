import React from "react";
import { Order } from "../../../Pages/Orders";

interface OTBProps {
  orders: Array<Order>;
}

const OrdersTableBody: React.FC<OTBProps> = (props: OTBProps) => {
  const orders = props.orders.map(el => (
    <tr key={el.id}>
      <td className="order-id">{el.id}</td>
      <td className="order-status">{el.status}</td>
    </tr>
  ));
  return <tbody>{orders}</tbody>;
};

export default OrdersTableBody;
