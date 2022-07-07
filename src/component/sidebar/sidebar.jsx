import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyIcon from "@mui/icons-material/Psychology";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="top">
        <Link to='/'>
        <span className="logo">Logo</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <Link to='/'  style={{textDecoration: "none"}}>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          </Link>

          <p className="title">LISTS</p>

          <Link to='/users' style={{textDecoration: "none"}}>
          <li>
            <PersonOutlineIcon className="icon"/>
            <span>Users</span>
          </li>
          </Link>

          <Link to='/products' style={{textDecoration: "none"}}>
          <li>
            <InventoryIcon className="icon"/>
            <span>Products</span>
          </li>
          </Link>

          <Link to='/orders' style={{textDecoration: "none"}}>
          <li>
            <CreditCardIcon className="icon"/>
            <span>Orders</span>
          </li>
          </Link>


          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>

          <p className="title">USEFUL</p>

          <li>
            <AssessmentIcon className="icon"/>
            <span>Stats</span>
          </li>

          <li>
            <NotificationsNoneIcon className="icon"/>
            <span>Notifications</span>
          </li>

          <p className="title">SERVICE</p>

          <li>
            <MonitorHeartIcon className="icon"/>
            <span>System Health</span>
          </li>

          <li>
            <PsychologyIcon className="icon"/>
            <span>Logs</span>
          </li>

          <li>
            <SettingsApplicationsIcon className="icon"/>
            <span>Settings</span>
          </li>

          <p className="title">USER</p>

          <li>
            <AccountCircleIcon className="icon"/>
            <span>Profile</span>
          </li>

          <li>
            <LogoutIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        {/* <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div> */}
      </div>
    </div>
  );
};

export default Sidebar;
