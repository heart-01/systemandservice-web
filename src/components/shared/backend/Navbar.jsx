import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { clearStateAccount } from "../../../redux/actions/accountActions.js";
import { KeyOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Layout, Dropdown, Menu, Space, Typography } from "antd";

const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profileInfo = useSelector((state) => state.account.info);

  const handleOnClickLogout = () => {
    dispatch(clearStateAccount());
    localStorage.removeItem("token");
    window.location.href = "/login"
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <NavLink to={`/backend/account/register/${profileInfo.accountId}`}>ข้อมูลส่วนตัว</NavLink>,
          icon: <UserOutlined />,
        },
        // {
        //   key: "2",
        //   label: "เปลี่ยนรหัสผ่าน",
        //   icon: <KeyOutlined />,
        // },
        {
          key: "3",
          label: <div onClick={handleOnClickLogout}>ออกจากระบบ</div>,
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );

  return (
    <Header theme="light" className="flex justify-end" style={{ padding: 0, background: "#fff" }}>
      <div className="mx-10 flex items-center">
        <Menu heme="light" mode="horizontal">
          <Dropdown overlay={menu}>
            <Typography.Link>
              <Space>
                <Avatar size={"large"} src={`${process.env.REACT_APP_URL_SERVER}/images/${profileInfo.image}`} />
              </Space>
            </Typography.Link>
          </Dropdown>
        </Menu>
      </div>
    </Header>
  );
};

export default Navbar;
