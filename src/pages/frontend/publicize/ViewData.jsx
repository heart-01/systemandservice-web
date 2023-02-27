import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image } from "antd";
import React from "react";
import TitleDocument from "../../../utils/TitleDocument";
import { useDispatch, useSelector } from "react-redux";
import { loadPublicizeById, clearStatePublicize } from "../../../redux/actions/publicizeActions.js";

const newsHeader = `     ปัจจุบัน กล้องวงจรปิด เข้ามามีบทบาทช่วยในการดูแลรักษาความปลอดภัยของทรัพย์สินมากยิ่งขึ้น ทั้งในอาคารและสถานที่ต่างๆ ไม่ว่าจะเกิดคดีความหรือเหตุการณ์อะไรขึ้นมากล้องวงจรปิดถือเป็นหลักฐานชิ้นเด็ดที่จะช่วยยืนยันว่าเหตุการณ์ที่เกิดขึ้นเป็นไปอย่างไร และมีใครที่อยู่ในเหตุการณ์นั้นบ้าง ดังนั้น การเลือกกล้องวงจรปิดที่ดี และเหมาะสมกับการใช้งานย่อมนำมาซึ่งความปลอดภัยในชีวิตและทรัพย์สินมากขึ้น`;

const news = `    1. คำนึงถึงวัตถุประสงค์ที่ต้องการใช้งาน
    การเลือกกล้องวงจรปิดนั้น จะต้องเลือกตามวัตถุประสงค์ที่ต้องการนำมาใช้งาน เช่น ดูแลความปลอดภัยในตัวบ้าน โดยอาจจะใช้แบบกล้อง IP ที่สามารถใช้ตรวจสอบความเรียบร้อยได้ทันทีแม้ไม่อยู่บ้าน หรือไว้ใช้เป็นหลักฐานเมื่อยามเกิดเหตุการณ์ต่างๆ โดยสามารถเลือกได้ตามที่ต้องการ แต่ต้องคำนึงถึงความละเอียดของกล้องด้วย

    2. เลือกกล้องวงจรปิดที่มีความละเอียดสูง
    การเลือกซื้อกล้องวงจรปิดจะต้องเลือกที่มีความละเอียดของภาพสูง แม้ว่าจะต้องจ่ายในราคาที่สูง แต่หากเกิดอะไรขึ้น ภาพจากกล้องวงจรปิดที่ให้ความละเอียดสูง ย่อมสามารถเก็บรายละเอียดของเหตุการณ์ได้ดีและชัดเจนกว่ากล้องที่มีความละเอียดต่ำ ซึ่งกล้องแบบ IP Camera จะมีความละเอียดตั้งแต่ 1.3 Megapixel ไปจนถึง 5 Megapixel ส่วนกล้องแบบ Analog โดยจะมีหน่วยวัดความละเอียดเป็นทีวีไลน์ (TVL: 600TVL,700TVL,1000TVL) ซึ่งมีความละเอียดสูงสุดเพียง 1,200 TVL หรือเท่ากับ 5 ล้านพิกเซลนั่นเอง หรือวิธีดูง่ายๆ สำหรับความละเอียดกล้องจะบันทึกภาพได้ที่ 1080P, 960P, 720P

    3. ตัดปัญหาการรบกวนจากภายนอกได้
    ควรเลือกกล้องวงจรปิดที่ตัวกล้องใช้เลนส์คุณภาพสูงและสามารถหมุนได้วงกลมอิสระ ทั้งยังมีอินฟราเรดที่สามารถถ่ายภาพกลางคืนได้อย่างชัดเจน ตลอดจนสามารถตัดปัญหาแสงจากภายนอกที่จะมาตกกระทบได้ เช่น การติดกล้องบริเวณริมถนน หรือบริเวณที่มีแสงไฟจากรถ กล้องนั้นจะต้องยังคงเห็นภาพเหตุการณ์ทุกอย่างได้อย่างชัดเจนดังเดิม
`;

const News1 = (props) => {
  const dispatch = useDispatch();
  const { paramsId } = useParams();
  const dataView = useSelector((state) => state.publicize?.edit?.data);

  useEffect(() => {
    if (paramsId) {
      dispatch(loadPublicizeById(paramsId));
    }
    return () => {
      dispatch(clearStatePublicize());
    };
  }, [paramsId]);

  return (
    <>
      <TitleDocument title={props.title} />
      {dataView && (
        <>
          <div className="flex justify-center align-center justify-items-center px-5 pt-20 mx-auto">
            <Image preview={false} width={500} src={`${process.env.REACT_APP_URL_SERVER}/images/${dataView.image}`} />
          </div>

          <section className="text-gray-600 mb-12">
            <div className="container px-56 pt-20 mx-auto">
              <div className="max-w-full">
                <div
                  className="flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  style={{ backgroundImage: `url(${process.env.REACT_APP_PUBLIC_URL}/assets/images/publicize/publicize-1.jpeg)` }}
                  title="Woman holding a mug"
                ></div>
                <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal overflow-hidden">
                  <div className="mb-8 ml-10">
                    <div className="text-gray-900 font-bold text-xl mb-2 whitespace-pre-wrap">{dataView.name}</div>
                    <div className="text-gray-700 text-base whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: dataView.description }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default News1;
