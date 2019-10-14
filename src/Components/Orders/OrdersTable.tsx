import React from "react";
import OrdersTableHeader from "./OrdersTableHeader/OrdersTableHeader";
import OrdersTableBody from "./OrdersTableBody/OrdersTableBody";
import { Order } from "../../Pages/Orders";

interface OrdersTableProps {
  orders: Array<Order>;
}

const OrdersTable: React.FC<OrdersTableProps> = (props: OrdersTableProps) => {
  return (
    <table className="OrdersTable">
      <OrdersTableHeader />
      <OrdersTableBody orders={props.orders} />
    </table>
  );
};

export default OrdersTable;
