import _ from "lodash";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { loadSaleById, clearStateSale } from "../../../redux/actions/saleActions.js";
import { loadRepairByIdSale } from "../../../redux/actions/repairActions.js";
import TitleDocument from "../../../utils/TitleDocument";
import dayjs from "../../../utils/configuredDayJs";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ViewData = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataViewSale = useSelector((state) => state.sale.edit?.data);
  const dataRepair = useSelector((state) => state.repair?.edit?.data[0]);
  const { paramsId } = useParams();

  useEffect(() => {
    if (paramsId) {
      dispatch(loadSaleById(paramsId));
      dispatch(loadRepairByIdSale(paramsId));
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
        <div className="text-4xl">รายละเอียดข้อมูลการแจ้งซ่อม</div>
      </div>

      <hr></hr>

      <section class="text-gray-600 body-font px-40">
        <div class="container flex flex-wrap py-14 mx-auto items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 class="text-xl font-medium title-font mb-2 text-gray-900">รายละเอียดการแจ้งซ่อม :</h1>
            <table class="table-auto">
              <thead>
                <tr>
                  <th className="w-60">รหัสสินค้า</th>
                  <th className="w-60">รายการสินค้า</th>
                  <th className="w-60">อาการ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-60 text-center">{dataViewSale?.product1 !== null ? dataViewSale?.product1.id : "-"}</td>
                  <td className="w-60 text-center">{dataViewSale?.product1 !== null ? dataViewSale?.product1.name : "-"}</td>
                  <td className="w-60 text-center">{dataRepair?.symptom1 !== null ? dataRepair?.symptom1 : "-"}</td>
                </tr>
                <tr>
                  <td className="w-60 text-center">{dataViewSale?.product2 !== null ? dataViewSale?.product2.id : "-"}</td>
                  <td className="w-60 text-center">{dataViewSale?.product2 !== null ? dataViewSale?.product2.name : "-"}</td>
                  <td className="w-60 text-center">{dataRepair?.symptom2 !== null ? dataRepair?.symptom2 : "-"}</td>
                </tr>
                <tr>
                  <td className="w-60 text-center">{dataViewSale?.product3 !== null ? dataViewSale?.product3.id : "-"}</td>
                  <td className="w-60 text-center">{dataViewSale?.product3 !== null ? dataViewSale?.product3.name : "-"}</td>
                  <td className="w-60 text-center">{dataRepair?.symptom3 !== null ? dataRepair?.symptom3 : "-"}</td>
                </tr>
                <tr>
                  <td className="w-60 text-center">{dataViewSale?.product4 !== null ? dataViewSale?.product4.id : "-"}</td>
                  <td className="w-60 text-center">{dataViewSale?.product4 !== null ? dataViewSale?.product4.name : "-"}</td>
                  <td className="w-60 text-center">{dataRepair?.symptom4 !== null ? dataRepair?.symptom4 : "-"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="flex flex-col md:w-1/2 md:pl-12">
            <h1 class="text-xl font-medium title-font mb-2 text-gray-900">ข้อมูลการแจ้งซ่อม :</h1>
            <p>ชื่อลูกค้า : {dataViewSale?.customer.fname} {dataViewSale?.customer.lname}</p>
            <p>
              พนักงานขาย : {dataViewSale?.account.fname} {dataViewSale?.account.lname}
            </p>
            <p>ราคารวม : {dataViewSale?.sum_price} </p>
            <p>วันที่ซื้อ : {dayjs(dataViewSale?.purchase_date).format("D MMM BBBB")} </p>
            <p>สถานะการชำระเงิน : {dataViewSale?.status_payment} </p>
            <p>การรับประกัน : {dataViewSale?.warranty} </p>
            <p>
              พนักงานให้บริการ : {dataRepair?.account?.fname} {dataRepair?.account?.lname}
            </p>
            <p>
              สถานะการบริการ : {dataRepair?.status}
            </p>
            <p>วันที่จ่ายชำระ : {dayjs(dataViewSale?.payment_date).format("D MMM BBBB")} </p>
            <p>วันที่ให้บริการ : {dayjs(dataRepair?.success_date).format("D MMM BBBB")} </p>
            <p>วันที่แจ้งซ่อม : {dayjs(dataRepair?.created).format("D MMM BBBB")} </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewData;
