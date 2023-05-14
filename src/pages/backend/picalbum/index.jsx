import TitleDocument from "../../../utils/TitleDocument";
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { Button, PageHeader } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { loadPicworkAll } from "../../../redux/actions/picworkActions.js";
import { useEffect } from "react";
import TableData from "./TableData";
import { useNavigate } from "react-router-dom";

const Index = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const picworkAll = useSelector((state) => state.picwork?.all?.data);

  useEffect(() => {
    dispatch(loadPicworkAll());
  }, []);

  const handleOnClickAddRepair = () => {
    navigate("/backend/picwork/add");
  };

  return (
    <>
      <TitleDocument title={props.title} />

      <div className="mb-10">
        <PageHeader
          className="site-page-header"
          title={[<InsertPhotoOutlinedIcon key="1" />, <span key="2" className="ml-3" >ข้อมูลอัลบั้มภาพผลงาน</span>]}
          subTitle="ตารางแสดงข้อมูลอัลบั้มภาพผลงาน"
          extra={ <Button onClick={handleOnClickAddRepair} key="1" type="primary"> เพิ่มอัลบั้ม </Button> }
        />
      </div>

      <TableData data={picworkAll} />
    </>
  );
};

export default Index;
