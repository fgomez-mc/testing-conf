import React from "react";
import OrdersTable from "../Components/Orders/OrdersTable";

export interface Order {
  id: string;
  status: string;
}

interface OrdersProps {
  orders: Array<Order>;
}

const Orders: React.FC<OrdersProps> = (props: OrdersProps) => {
  return (
    <div className="Orders">
      <h3>Orders</h3>
      <OrdersTable orders={props.orders} />
    </div>
  );
};

export default Orders;
