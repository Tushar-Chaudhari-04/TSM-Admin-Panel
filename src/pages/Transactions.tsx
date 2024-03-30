import { Link } from "react-router-dom";
import AdminSideBar from "../components/AdminSideBar";
import { ReactElement, useCallback, useState } from "react";
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaPencilAlt } from "react-icons/fa";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

const arr: DataType[] = [
  {
    user: "Jack Smith",
    amount: 5000,
    discount: 40,
    quantity: 3,
    status: <span className="blue">Shipped</span>,
    action: (
      <Link to="/admin/transaction/kjkjj">
        <FaPencilAlt />
      </Link>
    ),
  },
  {
    user: "Brown Dony",
    amount: 8000,
    discount: 20,
    quantity: 10,
    status: <span className="green">Delivered</span>,
    action: (
      <Link to="/admin/transaction/sdcdfdfd">
        <FaPencilAlt />
      </Link>
    ),
  },
  {
    user: "Ching Ming Xi",
    amount: 1000,
    discount: 10,
    quantity: 15,
    status: <span className="red">Cancelled</span>,
    action: (
      <Link to="/admin/transaction/fdfdfd">
        <FaPencilAlt />
      </Link>
    ),
  },
];

const Transactions = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Transactions",
      true
    ),
    []
  );

  return (
    <div className="admin-container">
      <AdminSideBar />
      <main>{Table()}</main>
    </div>
  );
};

export default Transactions;
