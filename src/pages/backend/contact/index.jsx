import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadContactAll } from "../../../redux/actions/contactActions.js";
import TitleDocument from "../../../utils/TitleDocument";
import TableData from "./TableData";
import { PageHeader } from "antd";
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';

const Index = (props) => {
  const dispatch = useDispatch();
  const contactAll = useSelector((state) => state.contact.all?.data);

  useEffect(() => {
    dispatch(loadContactAll());
  }, []);

  return (
    <>
      <TitleDocument title={props.title} />

      <div className="mb-10">
        <PageHeader
          className="site-page-header"
          title={[<ContactsOutlinedIcon key="1" />, <span key="/" className="ml-3" >ข้อมูลติดต่อเรา</span>]}
          subTitle="ตารางแสดงข้อมูลติดต่อเรา"
        />
      </div>

      <TableData data={contactAll} />
    </>
  );
};

export default Index;
