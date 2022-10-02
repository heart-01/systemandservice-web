import TitleDocument from "../../../utils/TitleDocument";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Button, PageHeader } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { loadProductAll } from "../../../redux/actions/productActions.js";
import { useEffect } from "react";
import TableData from "./TableData";
import { useNavigate } from "react-router-dom";

const Index = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productAll = useSelector((state) => state.product.all?.data);

  useEffect(() => {
    dispatch(loadProductAll());
  }, []);

  const handleOnClickAddProduct = () => {
    navigate("/backend/product/add");
  };

  return (
    <>
      <TitleDocument title={props.title} />

      <div className="mb-10">
        <PageHeader
          className="site-page-header"
          title={[<LocalMallOutlinedIcon key="1" />, <span key="2" className="ml-3" >ข้อมูลสินค้า</span>]}
          subTitle="ตารางแสดงข้อมูลสินค้า"
          extra={ <Button onClick={handleOnClickAddProduct} key="1" type="primary"> เพิ่มข้อมูล </Button> }
        />
      </div>

      <TableData data={productAll} />
    </>
  );
};

export default Index;
