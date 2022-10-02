import TitleDocument from "../../../utils/TitleDocument";
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import { Button, PageHeader } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { loadCustomerAll } from "../../../redux/actions/customerActions.js";
import { useEffect } from "react";
import TableData from "./TableData";
import { useNavigate } from "react-router-dom";

const Index = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customerAll = useSelector((state) => state.customer.all?.data);

  useEffect(() => {
    dispatch(loadCustomerAll());
  }, []);

  const handleOnClickAddCustomer = () => {
    navigate("/backend/customer/add");
  };

  return (
    <>
      <TitleDocument title={props.title} />

      <div className="mb-10">
        <PageHeader
          className="site-page-header"
          title={[<BadgeOutlinedIcon key="1" />, <span key="2" className="ml-3" >ข้อมูลลูกค้า</span>]}
          subTitle="ตารางแสดงข้อมูลลูกค้า"
          extra={ <Button onClick={handleOnClickAddCustomer} key="1" type="primary"> เพิ่มข้อมูล </Button> }
        />
      </div>

      <TableData data={customerAll} />
    </>
  );
};

export default Index;
