import TitleDocument from "../../../utils/TitleDocument";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import { PageHeader } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loadSaleAll, loadSaleAllByCustomerId } from "../../../redux/actions/saleActions.js";
import { useEffect } from "react";
import TableData from "./TableData";

const Index = (props) => {
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

  return (
    <>
      <TitleDocument title={props.title} />

      <div className="mb-10">
        <PageHeader
          className="site-page-header"
          title={[
            <HandymanOutlinedIcon key="1" />,
            <span key="2" className="ml-3">
              ข้อมูลแจ้งซ่อมสินค้า
            </span>,
          ]}
          subTitle="ตารางแสดงข้อมูลแจ้งซ่อมสินค้า"
        />
      </div>

      <TableData data={saleAll} />
    </>
  );
};

export default Index;
