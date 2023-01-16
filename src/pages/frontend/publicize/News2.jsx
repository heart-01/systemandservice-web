import { Image } from "antd";
import React from "react";
import TitleDocument from "../../../utils/TitleDocument";

const newsHeader = `5 อาการควรระวัง บ่งบอกว่า คอมพิวเตอร์ของคุณ เริ่มเสื่อมสภาพ แนะนำให้รีบซ่อม`;

const news = `
    1. เครื่องกระตุกจนค้าง
    คอมพิวเตอร์เมื่อใช้มานานหลายปี อาการที่คนส่วนใหญ่ต้องแจอแน่นอน คือวินโดว์เริ่มช้า มีอาการกระตุกบางครั้ง นั่นเป็นอาการโดนไวรัส หรือมัลแวร์ ปัญหานี้สามารถจัดการได้ด้วยการปิด process ที่ตัวเองไม่ได้ใช้งานใน Task Manager (Ctrl+Alt+Del) หรือเอาชัวร์สุดไปเลย คือการลงวินโดว์ใหม่จะทำให้อาการกระตุกหายไปนั่นเอง

    2. จอฟ้าบ่อย
    อาการจอฟ้า ส่วนใหญ่เกิดขึ้นจากซอฟต์แวร์ที่เริ่มมีปัญหา ไม่ว่าจะจากไวรัส มัลแวร์ หรืออะไรก็ตามที่โหลดลงเครื่อง ซึ่งถ้าเกิดปัญหานี้ ควรลงวินโดว์ใหม่ เพื่อแก้อาการจอฟ้าให้หายไป แต่หากอาการจอฟ้าไม่หาย แสดงว่าปัญหาอาจอยู่ที่ฮาร์ดแวร์ เพราะเมื่อประสิทธิภาพของฮาร์ดแวร์ลดลง จะทำให้ระบบ error จนใช้งานต่อไม่ได้ ถือเป็นปัญหาที่พบได้บ่อยอย่างมากยิ่งคนที่ใช้คอมพิวเตอร์เครื่องเก่า ต้องเจอจอฟ้าอย่างแน่นอน

    3. เครื่องร้อน
    อาการที่หลายคนมองข้าม คือ CPU หรือตัวเครื่องมีความร้อนสะสม ซึ่งหากไม่เอามือไปสัมผัสหรือแตะ อาจไม่ทราบว่าเครื่องกำลังมีอุณหภูมิที่สูงมาก เพราะปกติคอมพิวเตอร์และโน๊ตบุ๊ค จะมีระบบระบายความร้อนที่มีประสิทธิภาพอย่างมาก ที่ช่วยกระจายความร้อนออกจากตัวเครื่อง เพื่อให้อยู่ในระดับที่ปลอดภัยต่อระบบ

    4. คอมพิวเตอร์เริ่มดับ
    อาการเครื่องร้อนสะสม เปรียบเสมือนระเบิดเวลาที่รอวันจุดชนวนขึ้นมา ส่งผลให้ระบบภายในคอมพิวเตอร์เสื่อมสภาพไปอย่างรวดเร็ว เนื่องจากความร้อนและเวลาการใช้งานที่ยาวนาน ส่งผลให้จ่ายไฟได้ไม่เสถียร หากยังฝืนใช้งานต่อไปจะทำให้การทำงานของฮาร์ดดิส สูญสิ้นข้อมูลเนื่องจากคอมพิวเตอร์พังได้

    5. เปิดไม่ติด
    ปิดท้ายด้วยสัญญาณเตือนที่หนักที่สุด ว่าถึงเวลาที่จะต้องเปลี่ยนคอมพิวเตอร์ใหม่ คืออาการเปิดไม่ติด จากสภาพของตัวเครื่องที่ถูกใช้มานานหลายปี ผ่านการซ่อมแซมมากี่ครั้งนับไม่ถ้วน ส่งผลให้การทำงานเริ่มช้าลง อุปกรณ์ภายในเสื่อมสภาพมากขึ้นเรื่อยๆ จนไม่สามารถใช้งานได้อีกต่อไป หากฝืนเก็บไว้ก็เปลืองค่าซ่อมอย่างแน่นอน ทางที่ดี เริ่มมองหาคอมพิวเตอร์เครื่องใหม่เตรียมรอไว้จะดีกว่า
`;

const News2 = (props) => {
  return (
    <>
      <TitleDocument title={props.title} />

      <section className="text-gray-600 mb-12">
        <div className="container px-5 pt-20 mx-auto">
          <Image preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/publicize/publicize-header.png`} />
        </div>

        <div className="container px-5 pt-20 mx-auto">
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div
              className="h-96 lg:h-96 lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url(${process.env.REACT_APP_PUBLIC_URL}/assets/images/publicize/publicize-2.jpeg)` }}
              title="Woman holding a mug"
            ></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal overflow-hidden">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">{newsHeader}</div>
                <pre className="text-gray-700 text-base">{news}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News2;
