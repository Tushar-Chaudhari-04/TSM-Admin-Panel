import { ReactElement, useCallback, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Column } from "react-table";
import AdminSideBar from "../components/AdminSideBar";
import TableHOC from "../components/TableHOC";

interface DataType {
  avtar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avtar",
    accessor: "avtar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img = "https://randomuser.me/api/portraits/men/40.jpg";

const img2 = "https://randomuser.me/api/portraits/men/43.jpg";

const arr: DataType[] = [
  {
    avtar: (
      <img
        src={img}
        alt="Shoes"
        style={{
          borderRadius: "50%",
        }}
      />
    ),
    name: "Tushar Chaudhari",
    email: "t@gmail.com",
    gender: "Male",
    role: "Admin",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },

  {
    avtar: (
      <img
        src={img2}
        alt="Shoes"
        style={{
          borderRadius: "50%",
        }}
      />
    ),
    name: "Pawan Chaudhari",
    email: "p@gmail.com",
    gender: "Male",
    role: "POS Head",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Customers = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Customers",
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

export default Customers;
