import { Image } from "antd";
import React from "react";
import TitleDocument from "../../../utils/TitleDocument";

const newsHeader = `ประโยชน์ของระบบอินเทอร์เน็ต`;

const news = `
โลกปัจจุบันนี้มีความก้าวหน้าขึ้นมาก ไม่ว่าจะหันหน้ามองไปทางไหนก็พบว่า เต็มไปด้วยสิ่งอำนวยความสะดวก ที่ช่วยให้การดำเนินชีวิตประจำวันเป็นไปอย่างราบรื่นด้วยระบบอินเทอร์เน็ต และแอพพลิเคชั่นต่างๆ

  1. เป็นสื่อออนไลน์ ที่สามารถให้ข้อมูลข่าวสารทั่วโลกได้อย่างรวดเร็ว สังเกตุได้ว่าปัจจุบันนี้มีนักข่าวจำนวนมากที่ผันตัวเองเป็นนักข่าวออนไลน์ เนื่องจากคนในสังคมปัจจุบันหันมาสนใจอ่านข่าวออนไลน์มากขึ้นแทนการอ่านหนังสือพิมพ์

  2. เป็นสื่อกลางในการประกอบธุรกิจ มีแม่ค้าพ่อค้าหลายคนใช้โลกออนไลน์ในการขายสินค้าของตัวเองโดยไม่ต้องมีหน้าร้าน ไม่ต้องจ้างแรงงาน ไม่ต้องใช้ทุนเยอะก็สามารถทำกำไรให้แก่ตัวเองได้แล้ว

  3. เปิดกว้างเพื่อรับข้อคิดเห็นในเรื่องที่สนใจ คนในสังคมปัจจุบันนี้สามารถใช้อินเทอร์เน็ตเพื่อสอบถามกลุ่มคอเดียวกันให้เข้ามาแลกเปลี่ยนความคิดในห้องสนทนาของกลุ่มนั้นๆ หรือจะเป็นหน้ากระดานข่าว (กระทู้) เรื่องราวต่างๆ ที่กำลังติดตาม

  4. ทำให้ผู้คนทั่วโลกสามารถติดต่อสื่อสารกันได้ สังเกตได้ว่าปัจจุบันนี้ได้มีหลายช่องทางในการติดต่อสื่อสารทั้ง Facebook, E- Mail, Line และช่องทางแชทผ่านแอพพลิคชั่นต่างๆ มากมาย สร้างความสะดวกสบายยิ่งขึ้น

  5. ห้องสมุดที่รวบรวมสาระทั่วโลกมาไว้ที่เดียว ไม่ว่าคนเราจะต้องการข้อมูลเกี่ยวกับเรื่องอะไรก็ตาม สามารถเข้ามาค้นหาได้อย่างสะดวกและรวดเร็ว โดยไม่จำเป็นต้องเดินทางไปยังห้องสมุดอีกต่อไป ซึ่งข้อมูลเหล่านั้นมีทั้งรูปแบบที่เป็นตัวหนังสือ และวิดีโอให้สามารถเข้าใจได้ง่ายขึ้น
  
  6. อำนวยความสะดวกในการจัดซื้อสิ่งของ อาหาร เครื่องดื่ม หรือจะเป็นธุรกรรมทางการเงินได้โดยไม่จำเป็นต้องออกจากบ้านไปเสี่ยงโรคโควิด 19 ที่กำลังระบาดในปัจจุบัน

  7. ใช้เป็นสื่อกลางของการประกาศและการประชาสัมพันธ์ต่างๆ อย่างเช่น ขายบ้าน ขายรถ สมัครงานประกาศแจ้งเตือน เป็นต้น
  
  8. เป็นเครื่องมือในการ Entertain ให้กับตนเองและคนรอบข้าง ทั้งดูหนัง ฟังเพลง เชียร์กีฬา หรือเล่นเกมได้อีกมากมาย
`;

const News3 = (props) => {
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
              style={{ backgroundImage: `url(${process.env.REACT_APP_PUBLIC_URL}/assets/images/publicize/publicize-3.jpeg)` }}
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

export default News3;
