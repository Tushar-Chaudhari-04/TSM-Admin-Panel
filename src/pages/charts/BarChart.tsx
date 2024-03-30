import AdminSideBar from "../../components/AdminSideBar";
import { BarChartGraph } from "../../components/Charts";

const BarChart = () => {
  const data_1 = [300, 144, 433, 654, 237, 755, 199, 354, 578, 954, 124, 123];
  const data_2 = [200, 444, 556, 354, 578, 954, 124, 123, 778, 455, 438, 999];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChartGraph
            data_1={data_1}
            data_2={data_2}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(260,50%,30%)`}
            bgColor_2={`hsl(360,90%,90%)`}
          />
          <h2>Top Selling Products & Top Customers</h2>
        </section>
        <section>
          <BarChartGraph
            horizantal={true}
            data_1={data_1}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1={`hsl(180,100%,30%)`}
            bgColor_2={"#fff"}
            labels={months}
          />
          <h2>Orders throughout the year</h2>
        </section>
      </main>
    </div>
  );
};

export default BarChart;
