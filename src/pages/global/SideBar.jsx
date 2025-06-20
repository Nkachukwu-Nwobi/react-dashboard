import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

function Item({ title, to, icon, selected, setSelected }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();
  
  return (
    <MenuItem
      component={<Link to={to} />}
      active={location.pathname === to}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <h6>{title}</h6>
    </MenuItem>
  );
}

function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const location = useLocation();

  return (
    <div style={{ display: "flex", }} className="overflow-y-auto">
      <Sidebar
        collapsed={isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
        backgroundColor={colors.primary[400]}
      >
        <Menu 
        iconShape="square"
        menuItemStyles={{
          button: ({ level, active }) => ({
            backgroundColor:
              level === 0
                ? active
                  ? colors.greenAccent[500]
                  : undefined
                : colors.primary[400], // 👈 this is the submenu background
            color: colors.grey[100],
            '&:hover': {
              backgroundColor: active
                ? colors.greenAccent[500]
                : colors.greenAccent[700],
              color: '#ffffff',
            },
            margin: '0px 0 0px 0',
          }),
        }}
        >
          {/* COMPANY LOGO */}
          <MenuItem
            icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              color: colors.grey[200],
            }}
          >
            {
              !isCollapsed && (
                <div className=" flex justify-between mx-auto items-center">
              <h3>ADMINIS</h3>
              <button>
                <MenuOutlinedIcon style={{ color: colors.grey[100] }} />
              </button>
            </div>
              )

            }
          </MenuItem>

          {/* USER INFO */}
          {!isCollapsed && (
            <div className=" flex my-3 flex-col justify-center items-center gap-2">
              <img
                style={{ color: colors.grey[100] }}
                src="/assets/user.png"
                alt="profile user"
                className=" size-[100px] cursor-pointer rounded-[50%]"
              />
              <div className=" text-center">
                <h2 className=" font-bold">Ed Roh</h2>
                <h5 style={{ color: colors.greenAccent[500] }}>
                  VP Fancy Admin
                </h5>
              </div>
            </div>
          )}
          {/* DASHBOARD */}

          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          {/* DATA SEGMENT */}
          { !isCollapsed && (<h6 className="ml-4 mt-5">Data</h6>)}
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* PAGES SEGMENT */}
            { !isCollapsed && (<h6 className="ml-4 mt-5">Pages</h6>)}
          <Item
            title="Profile Form"
            to="/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="FAQ Page"
            to="/faq"
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
      

          <SubMenu label="Charts">
          <Item
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Geography Chart"
            to="/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          </SubMenu>

          {/* <Link to="/" style={{ textDecoration: "none" }}>
            <MenuItem
              icon={<HomeOutlinedIcon />}
              active={isSelected === "Dashboard"}
              onClick={() => setIsSelected("Dashboard")}
              style={{
                color: colors.grey[100],
              }}
            >
              Dashboard
            </MenuItem>
          </Link> */}
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideBar;
