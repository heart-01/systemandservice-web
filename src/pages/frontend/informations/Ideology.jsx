import TitleDocument from "../../../utils/TitleDocument";

import { Image, Collapse } from "antd";

const { Panel } = Collapse;

const panel1 = `
ยืนยันความเป็นเราด้วยการผลิตสินค้าคุณภาพ และ บริการตรงเวลา พร้อมทั้ง เสนอวิธีแก้ปัญหาอย่างชาญฉลาด และ ราคาที่เป็นธรรม
`;

const panel2 = `
เราเล็งเห็นคุณค่าของพนักงาน เราจึงเคารพซึ่งกันและกัน และ ให้ความแน่ใจว่าทุกคนได้รับการปฏิบัติ และโอกาสเท่าเทียมกัน รวมไปถึงความเป็นอยู่ที่ดี พร้อมด้วย ความสะอาด และความปลอดภัยในที่ทำงาน
`;

const panel3 = `
มีความรับผิดชอบในการสร้างงานที่ดีและช่วยสัมคมในทุกๆทางที่ทำได้ พร้อมทั้งปกป้องรักษาสิ่งแวดล้อม
`;

const panel4 = `
พัฒนาองค์กรไปในหนทางที่ดีกว่าอย่างต่อเนี่องโดยการใช้ความก้าวหน้าของเทคโนโลยีและการทดลอง รวมถึงทรัพยากรบุคคลที่ทรงคุณค่า
`;

const Ideology = (props) => {
  return (
    <>
      <TitleDocument title={props.title} />

      <section className="text-gray-600 mb-12">
        <div className="container px-5 pt-20 mx-auto">
          <Image preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/ideology.png`} />
          <Collapse accordion>
            <Panel className="text-2xl" header="ปรารถนาความพึงพอใจของลูกค้า" key="1">
              <center>{panel1}</center>
            </Panel>
            <Panel className="text-2xl" header="เชื่อมั่นในคุณค่าของตัวบุคคล" key="2">
              <center>{panel2}</center>
            </Panel>
            <Panel className="text-2xl" header="ห่วงใยสังคม" key="3">
              <center>{panel3}</center>
            </Panel>
            <Panel className="text-2xl" header="มุ่งมั่นในความเป็นเลิศ" key="4">
              <center>{panel4}</center>
            </Panel>
          </Collapse>
        </div>
      </section>
    </>
  );
};

export default Ideology;
