import TitleDocument from "../../../utils/TitleDocument";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Button, Form, PageHeader, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loadAccountAll } from "../../../redux/actions/accountActions.js";
import { useEffect } from "react";
import TableData from "./TableData";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

// const { Option } = Select;

const Index = (props) => {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const queryName = queryParams.get("name");
  const queryRole = queryParams.get("role");
  const profileInfo = useSelector((state) => state.account.info);
  const accountAll = useSelector((state) => state.account.all?.data);

  useEffect(() => {
    const profileRole = profileInfo?.role !== "employee" ? "" : { role: "customer" };
    dispatch(loadAccountAll({ role: queryRole }, profileRole));
  }, [role, queryRole]);

  const handleOnClickAddAccount = () => {
    navigate(`/backend/account/register?role=${queryRole}`);
  };

  // const handleOnChangeSelectAccount = (value) => {
  //   setRole(value);
  // };

  return (
    <>
      <TitleDocument title={props.title} />

      <div className="mb-10">
        <PageHeader
          className="site-page-header"
          title={[
            <AccountCircleOutlinedIcon key="1" />,
            <span key="2" className="ml-3">
              {queryName}
            </span>,
          ]}
          subTitle={`ตารางแสดง${queryName}`}
          extra={
            <Button onClick={handleOnClickAddAccount} key="1" type="primary">
              เพิ่มข้อมูล
            </Button>
          }
        />

        {/* {profileInfo?.role !== "employee" && (
          <Form.Item label="">
            <Select style={{ width: 160 }} placeholder="ประเภทของสมาชิก" onChange={(value) => handleOnChangeSelectAccount(value)}>
              <Option value="">ทั้งหมด</Option>
              <Option value="user">สมาชิก</Option>
              <Option value="admin">แอดมิน</Option>
              <Option value="employee">พนักงาน</Option>
              <Option value="customer">ลูกค้า</Option>
            </Select>
          </Form.Item>
        )} */}
      </div>

      <TableData data={accountAll} />
    </>
  );
};

export default Index;
