import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon2Fill,
  RiDashboardFill,
  RiShoppingBagFill,
} from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";

const AdminSideBar = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100 ? true : false
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal((prev) => !prev)}>
          {/* <HiMenuAlt1 /> */}
          {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
          <GiHamburgerMenu/>
        </button>
      )}
      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.3s ease",
              }
            : {}
        }
      >
        <h2>TSM Admin...</h2>

        <DivOne location={location} />

        <DivTwo location={location} />

        <DivThree location={location} />

        {phoneActive ? (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        ) : (
          ""
        )}
      </aside>
    </>
  );
};

const DivOne = ({ location }: { location: Location }) => (
  <div>
    <h5>Dashboard</h5>
    <ul>
      <DashBoardList
        url="/admin/dashboard"
        text="Dashboard"
        location={location}
        Icon={RiDashboardFill}
      />

      <DashBoardList
        url="/admin/product"
        text="Product"
        location={location}
        Icon={RiShoppingBagFill}
      />

      <DashBoardList
        url="/admin/customer"
        text="Customer"
        location={location}
        Icon={IoIosPeople}
      />

      <DashBoardList
        url="/admin/transaction"
        text="Transaction"
        location={location}
        Icon={AiFillFileText}
      />
    </ul>
  </div>
);

const DivTwo = ({ location }: { location: Location }) => (
  <div>
    <h5>Charts</h5>
    <ul>
      <DashBoardList
        url="/admin/chart/bar"
        text="Bar"
        location={location}
        Icon={FaChartBar}
      />

      <DashBoardList
        url="/admin/chart/pie"
        text="Pie"
        location={location}
        Icon={FaChartPie}
      />

      <DashBoardList
        url="/admin/chart/line"
        text="Line"
        location={location}
        Icon={FaChartLine}
      />
    </ul>
  </div>
);

const DivThree = ({ location }: { location: Location }) => (
  <div>
    <h5>Apps</h5>
    <ul>
      <DashBoardList
        url="/admin/apps/stopwatch"
        text="StopWatch"
        location={location}
        Icon={FaStopwatch}
      />

      <DashBoardList
        url="/admin/apps/coupon"
        text="Coupon"
        location={location}
        Icon={RiCoupon2Fill}
      />

      <DashBoardList
        url="/admin/apps/toss"
        text="Toss"
        location={location}
        Icon={FaGamepad}
      />
    </ul>
  </div>
);

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const DashBoardList = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "var(--sidebar-bg-select-color)"
        : "var(--supporting-white-color)",
    }}
  >
    <a>
      <Icon />
      <Link
        style={{
          color: location.pathname.includes(url)
            ? "var(--sidebar-select-color)"
            : "var(--supporting-black-color)",
        }}
        to={url}
      >
        {text}
      </Link>
    </a>
  </li>
);

export default AdminSideBar;
