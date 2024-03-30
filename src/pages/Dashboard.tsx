import { FaRegBell, FaUser } from "react-icons/fa";
import AdminSideBar from "../components/AdminSideBar";
import { BsSearch } from "react-icons/bs";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../data/dummyData.json";
import { BarChartGraph, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import DashBoardTable from "./../components/DashBoardTable";
import transactionData from "../data/dummyData.json";

const Dashboard = () => {
  const data_1 = [300, 144, 433, 654, 237, 755, 199, 354, 578, 954, 124, 123];
  const data_2 = [200, 444, 556, 354, 578, 954, 124, 123, 778, 455, 438, 999];

  interface widgetItemProps {
    heading: string;
    value: number;
    percent: number;
    color: string;
    amount?: boolean;
  }

  interface inventoryItemProps {
    name: string;
    value: number;
    color: string;
  }

  const WidgetItem = ({
    heading,
    value,
    percent,
    color,
    amount = false,
  }: widgetItemProps) => (
    <article className="widget">
      <div className="widget-info">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className="green">
            {<HiTrendingUp />} +{percent}%
          </span>
        ) : (
          <span className="red">
            {<HiTrendingDown />}
            {percent}%
          </span>
        )}
      </div>

      <div
        className="widget-circle"
        style={{
          background: `conic-gradient( 
          ${color} ${(Math.abs(percent) / 100) * 360}deg ,rgb(255,255,255) 0`,
        }}
      >
        <span style={{ color }}>{percent}%</span>
      </div>
    </article>
  );

  const InventoryItem = ({ name, value, color }: inventoryItemProps) => (
    <div className="inventory-area">
      <h5>{name}</h5>
      <div className="stock-indicator-bcg">
        <div
          style={{ backgroundColor: color, width: `${value}%` }}
          className="stock-indicator"
        ></div>
      </div>
      <span>{value}%</span>
    </div>
  );

  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data,users,docs" />
          <FaRegBell />
          <FaUser />
        </div>

        <section className="widget-container">
          <WidgetItem
            heading="Revenue"
            value={300000}
            percent={40}
            color="var(--sidebar-select-color)"
            amount={true}
          />

          <WidgetItem
            heading="Users"
            value={500}
            percent={-14}
            color="rgb(255 0 0)"
            // color="rgb(0 198 202)"
          />

          <WidgetItem
            heading="Transactions"
            value={75000}
            percent={80}
            color="rgb(255 196 0)"
          />

          <WidgetItem
            heading="Product"
            value={654}
            percent={55}
            color="rgb(76 0 255)"
          />
        </section>

        <section className="graph-container">
          <div className="graph-section">
            <h2>Revenue & Transactions</h2>
            <BarChartGraph
              horizantal={false}
              data_1={data_1}
              data_2={data_2}
              title_1="Revenue"
              title_2="Transactions"
              bgColor_1={`hsl(${80 * 4},${100}%,50%)`}
              bgColor_2={`hsl(${20 * 4},${100}%,50%)`}
            />
          </div>
          <div className="inventory-section">
            <h2>Inventory</h2>
            {data.inventoryData.map((item) => (
              <InventoryItem
                key={item.name}
                name={item.name}
                value={item.value}
                color={`hsl(${item.value * 4},${item.value * 8}%,50%)`}
              />
            ))}
          </div>
        </section>

        <section className="gender-transaction-container">
          <div className="gender-section">
            <h2>Gender Ratio</h2>
            <p className="mf-icon">
              <BiMaleFemale />
            </p>
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={80}
            />
          </div>
          <div className="transaction-section">
            <DashBoardTable data={transactionData.transactionData} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

/*
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "quantity", headerName: "Quantity", type: "number", width: 120 },
    { field: "discount", headerName: "Discount", type: "number", width: 120 },
    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      width: 120,
    },
    {
      field: "status",
      headerName: "Order Status",
      type: "string",
      width: 200,
    },
  ];

  interface DataType {
    id: number;
    quantity: number;
    discount: number;
    amount: number;
    status: string;
  }


*/
