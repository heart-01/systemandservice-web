import _ from "lodash";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { loadSaleById, clearStateSale } from "../../../redux/actions/saleActions.js";
import TitleDocument from "../../../utils/TitleDocument";
import dayjs from "../../../utils/configuredDayJs";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ViewData = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataView = useSelector((state) => state.sale.edit?.data);
  const { paramsId } = useParams();

  useEffect(() => {
    if (paramsId) {
      dispatch(loadSaleById(paramsId));
    }
    return () => {
      dispatch(clearStateSale());
    };
  }, [paramsId]);

  const handleOnClickBack = () => {
    navigate(-1);
  };

  return (
    <>
      <TitleDocument title={props.title} />

      <span style={{ cursor: "pointer" }} onClick={handleOnClickBack}>
        <ArrowBackIosNewIcon />
      </span>
      <div className="flex justify-center items-center mb-10">
        <div className="text-4xl">รายละเอียดข้อมูลการขาย</div>
      </div>

      <hr></hr>

      <section class="text-gray-600 body-font px-40">
        <div class="container flex flex-wrap py-14 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 class="text-xl font-medium title-font mb-2 text-gray-900">รายละเอียดการขาย :</h1>
            <table class="table-auto">
              <thead>
                <tr>
                  <th className="w-60">รหัสสินค้า</th>
                  <th className="w-60">รายการสินค้า</th>
                  <th className="w-60">จำนวน</th>
                  <th className="w-60">ราคา(บาท)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-60 text-center">{dataView?.product1 !== null ? dataView?.product1.id : "-"}</td>
                  <td className="w-60 text-center">{dataView?.product1 !== null ? dataView?.product1.name : "-"}</td>
                  <td className="w-60 text-center">{dataView?.quantity1 !== null ? dataView?.quantity1 : "-"}</td>
                  <td className="w-60 text-center">{dataView?.price1 !== null ? dataView?.price1 : "-"}</td>
                </tr>
                <tr>
                  <td className="w-60 text-center">{dataView?.product2 !== null ? dataView?.product2.id : "-"}</td>
                  <td className="w-60 text-center">{dataView?.product2 !== null ? dataView?.product2.name : "-"}</td>
                  <td className="w-60 text-center">{dataView?.quantity2 !== null ? dataView?.quantity2 : "-"}</td>
                  <td className="w-60 text-center">{dataView?.price2 !== null ? dataView?.price2 : "-"}</td>
                </tr>
                <tr>
                  <td className="w-60 text-center">{dataView?.product3 !== null ? dataView?.product3.id : "-"}</td>
                  <td className="w-60 text-center">{dataView?.product3 !== null ? dataView?.product3.name : "-"}</td>
                  <td className="w-60 text-center">{dataView?.quantity3 !== null ? dataView?.quantity3 : "-"}</td>
                  <td className="w-60 text-center">{dataView?.price3 !== null ? dataView?.price3 : "-"}</td>
                </tr>
                <tr>
                  <td className="w-60 text-center">{dataView?.product4 !== null ? dataView?.product4.id : "-"}</td>
                  <td className="w-60 text-center">{dataView?.product4 !== null ? dataView?.product4.name : "-"}</td>
                  <td className="w-60 text-center">{dataView?.quantity4 !== null ? dataView?.quantity4 : "-"}</td>
                  <td className="w-60 text-center">{dataView?.price4 !== null ? dataView?.price4 : "-"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex flex-col md:w-1/2 md:pl-12">
            <h1 class="text-xl font-medium title-font mb-2 text-gray-900">ข้อมูลการขาย :</h1>
            <p>ชื่อลูกค้า : {dataView?.customer.fname} {dataView?.customer.lname}</p>
            <p>
              พนักงานขาย : {dataView?.account.fname} {dataView?.account.lname}
            </p>
            <p>ราคารวม : {dataView?.sum_price} </p>
            <p>วันที่ซื้อ : {dayjs(dataView?.purchase_date).format("D MMM BBBB")} </p>
            <p>สถานะการชำระเงิน : {dataView?.status_payment} </p>
            <p>วันที่จ่ายชำระ : {dayjs(dataView?.payment_date).format("D MMM BBBB")} </p>
            <p>การรับประกัน : {dataView?.warranty} </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewData;
