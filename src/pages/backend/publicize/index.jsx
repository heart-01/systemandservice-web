import TitleDocument from "../../../utils/TitleDocument";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import { Button, PageHeader } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loadPublicizeAll } from "../../../redux/actions/publicizeActions.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TableData from "./TableData";

const Index = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const publicizeAll = useSelector((state) => state.publicize.all?.data);

  useEffect(() => {
    dispatch(loadPublicizeAll());
  }, []);


  const handleOnClickAddRepair = () => {
    navigate("/backend/publicize/add");
  };

  return (
    <>
      <TitleDocument title={props.title} />

      <div className="mb-10">
        <PageHeader
          className="site-page-header"
          title={[
            <NewspaperOutlinedIcon key="1" />,
            <span key="2" className="ml-3">
              ข้อมูลข่าวประชาสัมพันธ์
            </span>,
          ]}
          subTitle="ตารางแสดงข้อมูลข่าวประชาสัมพันธ์"
          extra={
            <Button onClick={handleOnClickAddRepair} key="1" type="primary">
              {" "}
              เพิ่มข้อมูล{" "}
            </Button>
          }
        />
      </div>

      <TableData data={publicizeAll} />
    </>
  );
};

export default Index;
