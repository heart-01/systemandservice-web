import TitleDocument from "../../../utils/TitleDocument";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Button, PageHeader } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loadSaleAll, loadSaleAllByCustomerId } from "../../../redux/actions/saleActions.js";
import { useEffect } from "react";
import TableData from "./TableData";
import { useNavigate } from "react-router-dom";

const Index = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const saleAll = useSelector((state) => state.sale.all?.data);
  const profileInfo = useSelector((state) => state.account.info);

  useEffect(() => {
    if (profileInfo?.role === "customer") {
      dispatch(loadSaleAllByCustomerId(profileInfo?.accountId));
    } else {
      dispatch(loadSaleAll());
    }
  }, []);

  const handleOnClickAddSale = () => {
    navigate("/backend/sale/add");
  };

  return (
    <>
      <TitleDocument title={props.title} />

      <div className="mb-10">
        <PageHeader
          className="site-page-header"
          title={[
            <StorefrontIcon key="1" />,
            <span key="2" className="ml-3">
              ข้อมูลการขาย
            </span>,
          ]}
          subTitle="ตารางแสดงข้อมูลการขาย"
          extra={
            profileInfo?.role !== "customer" && (
              <Button onClick={handleOnClickAddSale} key="1" type="primary">
                เพิ่มข้อมูล
              </Button>
            )
          }
        />
      </div>

      <TableData role={profileInfo?.role} data={saleAll} />
    </>
  );
};

export default Index;
