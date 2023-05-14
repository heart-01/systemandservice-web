import { useState } from "react";
import { NavLink } from "react-router-dom";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import { Menu, Layout } from "antd";
import { useSelector } from "react-redux";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const { Sider } = Layout;

const Sidebar = () => {
  const profileInfo = useSelector((state) => state.account.info);
  const [collapsed, setCollapsed] = useState(false);

  let items = [];

  const getItem = (label, key, icon, children) => {
    return { key, icon, children, label };
  };

  if (profileInfo?.role === "admin") {
    items = [
      getItem(
        "ข้อมูลติดต่อเรา",
        "1",
        <NavLink className="flex items-center" to="/backend/contact">
          <ContactsOutlinedIcon />
        </NavLink>
      ),

      getItem(
        "ข้อมูลสมาชิก",
        "2.1",
        <NavLink className="flex items-center" to="/backend/account?name=ข้อมูลสมาชิก&role=user">
          <PermIdentityOutlinedIcon />
        </NavLink>
      ),
      getItem(
        "ข้อมูลแอดมิน",
        "2.2",
        <NavLink className="flex items-center" to="/backend/account?name=ข้อมูลแอดมิน&role=admin">
          <Person4OutlinedIcon />
        </NavLink>
      ),
      getItem(
        "ข้อมูลพนักงาน",
        "2.3",
        <NavLink className="flex items-center" to="/backend/account?name=ข้อมูลพนักงาน&role=employee">
          <Person2OutlinedIcon />
        </NavLink>
      ),
      getItem(
        "ข้อมูลลูกค้า",
        "2.4",
        <NavLink className="flex items-center" to="/backend/account?name=ข้อมูลลูกค้า&role=customer">
          <PersonOutlinedIcon />
        </NavLink>
      ),
      // getItem("ข้อมูลลูกค้า", "3", <NavLink className="flex items-center" to="/backend/customer"><BadgeOutlinedIcon /></NavLink>),
      getItem(
        "ข้อมูลสินค้า",
        "4",
        <NavLink className="flex items-center" to="/backend/product">
          <LocalMallOutlinedIcon />
        </NavLink>
      ),
      getItem(
        "ข้อมูลการขาย",
        "5",
        <NavLink className="flex items-center" to="/backend/sale">
          <StorefrontIcon />
        </NavLink>
      ),
      getItem(
        "แจ้งซ่อมสินค้า",
        "6",
        <NavLink className="flex items-center" to="/backend/repair">
          <HandymanOutlinedIcon />
        </NavLink>
      ),
      getItem(
        "อัลบั้มภาพผลงาน",
        "7",
        <NavLink className="flex items-center" to="/backend/picalbum">
          <InsertPhotoOutlinedIcon />
        </NavLink>
      ),
      getItem(
        "ภาพผลงาน",
        "8",
        <NavLink className="flex items-center" to="/backend/picwork">
          <InsertPhotoOutlinedIcon />
        </NavLink>
      ),
      getItem(
        "ข่าวประชาสัมพันธ์",
        "9",
        <NavLink className="flex items-center" to="/backend/publicize">
          <NewspaperOutlinedIcon />
        </NavLink>
      ),
    ];
  } else if (profileInfo?.role === "employee") {
    items = [
      // getItem("ข้อมูลลูกค้า", "1", <NavLink className="flex items-center" to="/backend/customer"><BadgeOutlinedIcon /></NavLink>),
      getItem(
        "ข้อมูลลูกค้า",
        "1",
        <NavLink className="flex items-center" to="/backend/account?name=ข้อมูลลูกค้า&role=customer">
          <AccountCircleOutlinedIcon />
        </NavLink>
      ),
      getItem(
        "ข้อมูลสินค้า",
        "2",
        <NavLink className="flex items-center" to="/backend/product">
          <LocalMallOutlinedIcon />
        </NavLink>
      ),
      getItem(
        "ข้อมูลการขาย",
        "3",
        <NavLink className="flex items-center" to="/backend/sale">
          <StorefrontIcon />
        </NavLink>
      ),
      getItem(
        "แจ้งซ่อมสินค้า",
        "4",
        <NavLink className="flex items-center" to="/backend/repair">
          <HandymanOutlinedIcon />
        </NavLink>
      ),
    ];
  } else if (profileInfo?.role === "customer") {
    items = [
      getItem(
        "ข้อมูลการขาย",
        "1",
        <NavLink className="flex items-center" to="/backend/sale">
          <StorefrontIcon />
        </NavLink>
      ),
      getItem(
        "แจ้งซ่อมสินค้า",
        "2",
        <NavLink className="flex items-center" to="/backend/repair">
          <HandymanOutlinedIcon />
        </NavLink>
      ),
    ];
  }

  return (
    <Sider theme="light" style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0, top: 0, bottom: 0 }} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="logo m-3 flex justify-center mb-7">
        <NavLink to="/">
          <img className="w-32" src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/logo.png`} alt="logo" />
        </NavLink>
      </div>
      <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline" items={items} />
    </Sider>
  );
};

export default Sidebar;
