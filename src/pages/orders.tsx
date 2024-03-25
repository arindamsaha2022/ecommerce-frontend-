import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC"; 
import {Column} from "../components/admin/TableHOC"; 
import { Link } from "react-router-dom";

type DataType ={
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
}

const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id", // Corrected spelling
  },
  {
    Header: "Quantity",
    accessor: "quantity", // Corrected spelling
  },
  {
    Header: "Discount",
    accessor: "discount", // Corrected spelling
  },
  {
    Header: "Status",
    accessor: "status", // Corrected spelling
  },
  {
    Header: "Amount",
    accessor: "amount", // Corrected spelling
  },
  {
    Header: "Action",
    accessor: "action", // Corrected spelling
  },
];

const Orders = () => {
  const [rows] = useState<DataType[]>([
    {
      _id: "string",
      amount: 213,
      quantity: 213,
      discount: 23231,
      status: <span className="red">Processing</span>,
      action: <Link to={`/order/str`}>View</Link>, // You haven't defined id, so assuming it's a placeholder
    }
  ]);

  const Table = TableHOC<DataType>(
    column,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length > 6
  )();

  return (
    <div className="container">
      <h1>My Orders</h1>
      {Table}
    </div>
  );
}

export default Orders;
