import TitleDocument from "../../../utils/TitleDocument";

import { Image, Typography } from "antd";

const { Title } = Typography;

const Vision = (props) => {
  return (
    <>
      <TitleDocument title={props.title} />

      <section className="text-gray-600 mb-12">
        <div className="container px-5 pt-20 mx-auto">
          <Image preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/vision.png`} />
          <Title level={3}>
            <center className="text-blue-600 m-10 md:m-40" >
              เพื่อได้รับการยอมรับในฐานะที่เป็นองค์กรแห่งนวัตกรรมที่ โดยที่มีการเพื่มประสิทธิภาพและขยายทางธุรกิจอย่างไม่หยุดยั้ง พัฒนาระบบองค์กรและสร้างคุณค่าแก่ผู้เกี่ยวข้องทุกฝ่าย
              เป็นหนึ่งในหลายๆบริษัทที่มีส่วนร่วมในการสร้างความมั่นคงให้แก่ประเทศไทย
            </center>
          </Title>
        </div>
      </section>
    </>
  );
};

export default Vision;
