import React from "react";

const OrdersTableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <th className="order-id">Order #</th>
        <th className="order-status">Status</th>
      </tr>
    </thead>
  );
};

export default OrdersTableHeader;
