import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer, patchCustomer, loadCustomerById, clearStateCustomer } from "../../../redux/actions/customerActions.js";
import { useNavigate, useParams } from "react-router-dom";
import TitleDocument from "../../../utils/TitleDocument";
import { Button, Card, Form, Input, PageHeader } from "antd";
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';

const CustomerForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { paramsId } = useParams();
  const submitStatus = useSelector((state) => state.customer.status);
  const dataEdit = useSelector((state) => state.customer.edit?.data);

  useEffect(() => {
    if (paramsId) {
      dispatch(loadCustomerById(paramsId));
    }
    return () => {
      dispatch(clearStateCustomer());
    };
  }, [paramsId]);

  useEffect(() => {
    if (submitStatus === true) {
      dispatch(clearStateCustomer());
      navigate(-1);
    }
  }, [submitStatus]);

  if (dataEdit) {
    form.setFieldsValue({
      name: dataEdit.name,
      tel: dataEdit.tel,
      email: dataEdit.email,
      address: dataEdit.address,
    });
  }

  const onFinish = (values) => {
    if (!dataEdit) {
      dispatch(createCustomer(values));
    } else {
      dispatch(patchCustomer(paramsId, values));
    }
  };

  return (
    <>
      <TitleDocument title={props.title} />

      <div className="mb-10">
        <PageHeader
          onBack={() => navigate(-1)}
          title={[
            <BadgeOutlinedIcon key="1" />,
            <span key="2" className="ml-3">
              ข้อมูลลูกค้า
            </span>,
          ]}
        />
      </div>

      <section className="text-gray-600">
        <div className="container px-5 mx-auto">
          <div className="mx-0 lg:mx-52">
            <Card title="ข้อมูลลูกค้า" bordered={true}>
              <Form form={form} size="large" name="form" labelCol={{ span: 4 }} onFinish={onFinish} autoComplete="off">
                {dataEdit && <Form.Item className="flex justify-center">รหัสลูกค้า : {paramsId}</Form.Item>}

                <Form.Item label="ชื่อ-นามสกุล" name="name" rules={[{ required: true, message: "กรอกชื่อ-นามสกุล" }]}>
                  <Input />
                </Form.Item>

                <Form.Item label="เบอร์โทร" name="tel" rules={[{ required: true, message: "กรอกเบอร์โทร" }]}>
                  <Input />
                </Form.Item>

                <Form.Item label="อีเมล์" name="email" rules={[{ required: true, message: "กรอกอีเมล์" }]}>
                  <Input />
                </Form.Item>

                <Form.Item label="ที่อยู่" name="address" rules={[{ required: true, message: "กรอกที่อยู่" }]}>
                  <Input />
                </Form.Item>

                <div className="flex justify-center align-center justify-items-center">
                  <Form.Item>
                    <Button size={"large"} htmlType="submit">
                      ยืนยัน
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerForm;
