import { useDispatch } from "react-redux";
import { createContact } from "../../../redux/actions/contactActions.js";
import { Card, Checkbox, Select, Image, Col, Row, Button, Form, Input } from "antd";
import TitleDocument from "../../../utils/TitleDocument";
import Gallery from "react-grid-gallery";

const { TextArea } = Input;

const styleSmall = () => {
  return {
    width: "100%",
    height: "auto",
    overflow: "visible",
  };
};

const Index = (props) => {
  const dispatch = useDispatch();
  const [formContact] = Form.useForm();

  const onFinish = (values) => {
    values.service = values.service.toString();
    dispatch(createContact(values));
    formContact.resetFields();
  };

  return (
    <>
      <TitleDocument title={props.title} />

      <section className="text-gray-600 mb-12">
        <div className="container px-5 pt-20 mx-auto">
          <Image preview={false} className="mb-5" src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/contact/header.png`} />

          <div className="container flex justify-between">
            {/* Image And Map */}
            <div className="w-full">
              <div lg={{ offset: 1 }}>
                <Gallery
                  key={1}
                  thumbnailStyle={styleSmall}
                  tileViewportStyle={styleSmall}
                  images={[
                    {
                      src: `${process.env.REACT_APP_PUBLIC_URL}/assets/images/contact/contact-1.png`,
                      thumbnail: `${process.env.REACT_APP_PUBLIC_URL}/assets/images/contact/contact-1.png`,
                    },
                  ]}
                />
              </div>
              <div lg={{ offset: 1 }} className="mt-10">
                <Image preview={false} width={680} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/contact/contact-2.png`} />
              </div>
              <div className="flex justify-start">
                <div lg={{ offset: 3 }} className="mt-2">
                  <div className="w-72">
                    <Gallery
                      key={1}
                      thumbnailStyle={styleSmall}
                      tileViewportStyle={styleSmall}
                      images={[
                        {
                          src: `${process.env.REACT_APP_PUBLIC_URL}/assets/images/contact/contact-3.png`,
                          thumbnail: `${process.env.REACT_APP_PUBLIC_URL}/assets/images/contact/contact-3.png`,
                        },
                      ]}
                    />
                  </div>
                </div>
                <div lg={{ offset: 3 }} className="mt-2 pl-10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3882.1159138963208!2d100.980022!3d13.343065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4916f53d67de41f1!2z4Lia4Lij4Li04Lip4Lix4LiXIOC5gOC4reC4quC4lOC4seC4muC4muC4peC4tOC4pyDguIvguLXguKrguYDguJXguYfguKHguKrguYwg4LmB4Lit4LiZ4LiU4LmMIOC5gOC4i-C4reC4o-C5jOC4p-C4tOC4qiDguIjguLPguIHguLHguJQ!5e0!3m2!1sth!2sus!4v1662899926099!5m2!1sth!2sus"
                    width="340"
                    height="200"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Form Contact */}
            <div className="w-full flex justify-center">
              <Card title="ติดต่อเรา" bordered={true}>
                <Form form={formContact} size="large" name="formContact" labelCol={{ span: 5 }} onFinish={onFinish} autoComplete="off">
                  <Form.Item label="ชื่อ-นามสกุล" name="fullname" rules={[{ required: true, message: "กรอกชื่อ-นามสกุล" }]}>
                    <Input />
                  </Form.Item>

                  <Form.Item label="Email" name="email" rules={[{ required: true, message: "กรอกออีเมล์" }]}>
                    <Input />
                  </Form.Item>

                  <Form.Item label="เบอร์โทร" name="tel" rules={[{ required: true, message: "กรอกเบอร์โทรศัพท์" }]}>
                    <Input />
                  </Form.Item>

                  <Form.Item label="หัวข้อ" name="title_service" rules={[{ required: true, message: "เลือกหัวข้อบริการ" }]}>
                    <Select>
                      <Select.Option value="ปรึกษาเฉพาะเรื่อง">ปรึกษาเฉพาะเรื่อง</Select.Option>
                      <Select.Option value="สอบถามราคา">สอบถามราคา</Select.Option>
                    </Select>
                  </Form.Item>

                  <Form.Item label="บริการ" name="service" rules={[{ required: true, message: "เลือกบริการ" }]}>
                    <Checkbox.Group style={{ width: "100%" }}>
                      <Row>
                        <Col span={8}>
                          <Checkbox value="ติดตั้งกล้องวงจรปิด">ติดตั้งกล้องวงจรปิด</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="ติดตั้งไฟฟ้า">ติดตั้งไฟฟ้า</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="ติดตั้งเครื่องปรับอากาศ">ติดตั้งเครื่องปรับอากาศ</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="ติดตั้งจานดาวเทียม">ติดตั้งจานดาวเทียม</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="บริการล้างแอร์">บริการล้างแอร์</Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  </Form.Item>

                  <Form.Item label="ข้อความเพิ่มเติม" name="description" rules={[{ required: true, message: "กรอกข้อความเพิ่มเติม" }]}>
                    <TextArea rows={4} />
                  </Form.Item>

                  <div className="flex justify-center align-center justify-items-center">
                    <Form.Item>
                      <Button size={"large"} htmlType="submit">
                        ส่งข้อความ
                      </Button>
                    </Form.Item>
                  </div>
                </Form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
