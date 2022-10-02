import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, patchProduct, loadProductById, clearStateProduct } from "../../../redux/actions/productActions.js";
import { useNavigate, useParams } from "react-router-dom";
import TitleDocument from "../../../utils/TitleDocument";
import { Button, Card, Form, Input, InputNumber, PageHeader, Select } from "antd";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const { Option } = Select;

const ProductForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { paramsId } = useParams();
  const submitStatus = useSelector((state) => state.product.status);
  const dataEdit = useSelector((state) => state.product.edit?.data);

  useEffect(() => {
    if (paramsId) {
      dispatch(loadProductById(paramsId));
    }
    return () => {
      dispatch(clearStateProduct());
    };
  }, [paramsId]);

  useEffect(() => {
    if (submitStatus === true) {
      dispatch(clearStateProduct());
      navigate(-1);
    }
  }, [submitStatus]);

  if (dataEdit) {
    form.setFieldsValue({
      name: dataEdit.name,
      brand: dataEdit.brand,
      model: dataEdit.model,
      description: dataEdit.description,
      quantity: dataEdit.quantity,
      price: dataEdit.price,
    });
  }

  const onFinish = (values) => {
    if (!dataEdit) {
      dispatch(createProduct(values));
    } else {
      dispatch(patchProduct(paramsId, values));
      window.location.reload();
    }
  };

  return (
    <>
      <TitleDocument title={props.title} />

      <div className="mb-10">
        <PageHeader
          onBack={() => navigate(-1)}
          title={[
            <LocalMallOutlinedIcon key="1" />,
            <span key="2" className="ml-3">
              ข้อมูลสินค้า
            </span>,
          ]}
        />
      </div>

      <section className="text-gray-600">
        <div className="container px-5 mx-auto">
          <div className="mx-0 lg:mx-52">
            <Card title="ข้อมูลสินค้า" bordered={true}>
              <Form form={form} size="large" name="form" labelCol={{ span: 5 }} onFinish={onFinish} autoComplete="off">
                {dataEdit && <Form.Item className="flex justify-center">รหัสสินค้า : {paramsId}</Form.Item>}

                {!paramsId && (
                  <Form.Item label="รหัสหมวดสินค้า" name="id" rules={[{ required: true, message: "เลือกรหัสหมวดสินค้า" }]}>
                    <Select>
                      <Option value="wi">งานเดินสายไฟ</Option>
                      <Option value="ml">งานเบ็ดเตล็ด</Option>
                      <Option value="da">จานดาวเทียม</Option>
                      <Option value="ac">แอร์คอนดิชันเนอร์</Option>
                      <Option value="lt">หลอดไฟ,ไฟส่องสว่าง</Option>
                      <Option value="cc">กล้องวงจรปิด</Option>
                    </Select>
                  </Form.Item>
                )}

                <Form.Item label="ชื่อสินค้า" name="name" rules={[{ required: true, message: "กรอกชื่อสินค้า" }]}>
                  <Input />
                </Form.Item>

                <Form.Item label="ยี่ห้อสินค้า" name="brand" rules={[{ required: true, message: "กรอกยี่ห้อ" }]}>
                  <Input />
                </Form.Item>

                <Form.Item label="รุ่นสินค้า" name="model" rules={[{ required: true, message: "กรอกรุ่นสินค้า" }]}>
                  <Input />
                </Form.Item>

                <Form.Item label="รายละเอียดสินค้า" name="description" rules={[{ required: true, message: "กรอกรายละเอียดสินค้า" }]}>
                  <Input />
                </Form.Item>

                <Form.Item label="จำนวนสินค้า" name="quantity" rules={[{ required: true, message: "กรอกจำนวนสินค้า" }]}>
                  <InputNumber parser={(value) => value.replace(/\./g, "")} min={1} />
                </Form.Item>

                <Form.Item label="ราคา" name="price" rules={[{ required: true, message: "กรอกราคาสินค้า" }]}>
                  <InputNumber min={1} />
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

export default ProductForm;
