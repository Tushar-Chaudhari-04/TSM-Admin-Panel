import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loader from "./components/Loader";

//!Lazy loading to load pages only when needed..
//? WHY?--->To optimize our code for performance

//DashBoard Tabs
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Customers = lazy(() => import("./pages/Customers"));

//Charts Tabs
const BarChart = lazy(() => import("./pages/charts/BarChart"));
const PieChart = lazy(() => import("./pages/charts/PieChart"));
const LineChart = lazy(() => import("./pages/charts/LineChart"));

//Mgmt Tabs
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const TransactionManagement = lazy(
  () => import("./pages/management/TransactionManagement")
);
const ProductManagement = lazy(
  () => import("./pages/management/ProductManagement")
);

//Apps Tabs
const StopWatch = lazy(() => import("./pages/apps/StopWatch"));
const Toss = lazy(() => import("./pages/apps/Toss"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={<Link to="/admin/dashboard"><button className="admin-btn">TSM Admin Section</button></Link>}
          />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="/admin/transaction" element={<Transactions />} />
          <Route path="/admin/customer" element={<Customers />} />

          {/*Charts Routes */}
          <Route path="/admin/chart/bar" element={<BarChart />} />
          <Route path="/admin/chart/pie" element={<PieChart />} />
          <Route path="/admin/chart/line" element={<LineChart />} />

          {/*Management Routes */}
          <Route path="/admin/product/new" element={<NewProduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagement />}
          />

          {/*Apps Routes */}
          <Route path="/admin/apps/stopwatch" element={<StopWatch />} />
          <Route path="/admin/apps/coupon" element={<Coupon />} />
          <Route path="/admin/apps/toss" element={<Toss />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
