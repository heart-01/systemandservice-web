import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAccount, patchAccount, loadAccountById, clearStateAccount } from "../../../redux/actions/accountActions.js";
import { useNavigate, useParams } from "react-router-dom";
import TitleDocument from "../../../utils/TitleDocument";
import { Button, Card, Row, Form, Input, Radio, InputNumber, DatePicker, Upload, message, PageHeader, Image, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import dayjs from "../../../utils/configuredDayJs";

const { Option } = Select;

const Register = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { accountId } = useParams();
  const registerStatus = useSelector((state) => state.account.status);
  const accountEdit = useSelector((state) => state.account.edit?.data);
  const profileInfo = useSelector((state) => state.account.info);
  const [fileImage, setFileImage] = useState(null);
  const [formRegister] = Form.useForm();
  const role = Form.useWatch(`role`, formRegister);

  useEffect(() => {
    if (accountId) {
      dispatch(loadAccountById(accountId));
    }
    return () => {
      dispatch(clearStateAccount());
    };
  }, [accountId]);

  useEffect(() => {
    if (registerStatus === true) {
      dispatch(clearStateAccount());
      navigate(-1);
    }
  }, [registerStatus]);

  if (accountEdit) {
    formRegister.setFieldsValue({
      fname: accountEdit.fname,
      lname: accountEdit.lname,
      address: accountEdit.address,
      email: accountEdit.email,
      tel: accountEdit.tel,
      username: accountEdit.username,
      gender: accountEdit.gender,
      age: accountEdit.age,
      dob: dayjs(accountEdit.dob),
      weight: accountEdit.weight,
      height: accountEdit.height,
      role: accountEdit.role,
      start_date: dayjs(accountEdit.start_date),
    });
  }

  const onFinish = (values) => {
    const formData = new FormData();

    for (const name in values) {
      if (name === "image") {
        formData.append("image", fileImage);
      } else {
        formData.append(name, values[name]);
      }
    }

    if (!accountEdit) {
      dispatch(registerAccount(formData));
    } else {
      dispatch(patchAccount(accountId, formData));
    }
  };

  const handleOnUploadShowImagePreview = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const configUpload = {
    beforeUpload: (file) => {
      const typeArray = file.type.split("/");
      const isImage = typeArray[0];
      if (isImage !== "image") {
        message.error(`${file.name} is not a image file`);
        return Upload.LIST_IGNORE;
      }
      setFileImage(file);
      return isImage;
    },
  };

  return (
    <>
      <TitleDocument title={props.title} />

      <div className="mb-10 mt-10">
        <PageHeader
          onBack={() => navigate(-1)}
          title={[
            <AccountCircleOutlinedIcon key="1" />,
            <span key="2" className="ml-3">
              ข้อมูลสมาชิก
            </span>,
          ]}
        />
      </div>

      <section className="text-gray-600">
        <div className="container px-5 mx-auto">
          <div className="mx-0 lg:mx-52">
            <Card title="ข้อมูลสมาชิก" bordered={true}>
              <Form form={formRegister} size="large" name="formRegister" labelCol={{ span: 3 }} onFinish={onFinish} autoComplete="off">
                {accountEdit && !fileImage && (
                  <>
                    <Form.Item className="flex justify-center">รหัสสมาชิก : {accountId}</Form.Item>
                    <Form.Item className="flex justify-center" name="loadImageOld">
                      <Image preview={false} width={200} src={`${process.env.REACT_APP_URL_SERVER}/images/${accountEdit.image ? accountEdit.image : "nopic.jpeg"}`} />
                    </Form.Item>
                  </>
                )}

                <Row>
                  <Form.Item labelCol={{ span: 9 }} label="ชื่อ" name="fname" rules={[{ required: true, message: "กรอกชื่อ" }]}>
                    <Input />
                  </Form.Item>
                  <Form.Item labelCol={{ span: 8 }} label="นามสกุล" name="lname" rules={[{ required: true, message: "กรอกนามสกุล" }]}>
                    <Input />
                  </Form.Item>
                </Row>

                <Form.Item label="ที่อยู่" name="address" rules={[{ required: true, message: "กรอกที่อยู่" }]}>
                  <Input />
                </Form.Item>

                <Form.Item label="อีเมล์" name="email" rules={[{ required: true, message: "กรอกอีเมล์" }]}>
                  <Input />
                </Form.Item>

                <Form.Item label="เบอร์โทร" name="tel" rules={[{ required: true, message: "กรอกเบอร์โทร" }]}>
                  <Input />
                </Form.Item>

                <Form.Item label="ชื่อผู้ใช้" name="username" rules={[{ required: true, message: "กรอกชื่อผู้ใช้งาน" }]}>
                  <Input />
                </Form.Item>

                {!accountEdit && (
                  <Form.Item label="รหัสผ่าน" name="password" rules={[{ required: true, message: "กรอกรหัสผ่าน" }]}>
                    <Input.Password />
                  </Form.Item>
                )}

                <Form.Item label="เพศ" name="gender" rules={[{ required: true, message: "เลือกเพศ" }]}>
                  <Radio.Group name="radiogroup" defaultValue={1}>
                    <Radio value={"ชาย"}>ชาย</Radio>
                    <Radio value={"หญิง"}>หญิง</Radio>
                  </Radio.Group>
                </Form.Item>

                {/* <Form.Item label="อายุ" name="age" rules={[{ required: true, message: "กรอกอายุ" }]}>
                  <InputNumber parser={(value) => value.replace(/\./g, "")} min={1} />
                </Form.Item> */}

                <Form.Item label="วันเกิด" name="dob" rules={[{ required: true, message: "กรอกวันเกิด" }]}>
                  <DatePicker />
                </Form.Item>

                {/* <Row>
                  <Form.Item labelCol={{ span: 13 }} label="น้ำหนัก" name="weight" rules={[{ required: true, message: "กรอกน้ำหนัก" }]}>
                    <InputNumber defaultValue={0} min={0} />
                  </Form.Item>
                  <Form.Item labelCol={{ span: 15 }} label="ส่วนสูง" name="height" rules={[{ required: true, message: "กรอกส่วนสูง" }]}>
                    <InputNumber defaultValue={0} min={0} />
                  </Form.Item>
                </Row> */}

                {(role === 'employee' || role === 'admin') && (<Form.Item label="วันเริ่มงาน" name="start_date" rules={[{ required: true, message: "เลือกวันเริ่มงาน" }]} >
                  <DatePicker />
                </Form.Item>)}

                {profileInfo?.role === 'admin' && (
                  <Form.Item label="สิทธิบัญชี" name="role" rules={[{ required: true, message: "เลือกประเภทของบัญชี" }]}>
                    <Select showSearch placeholder="กรุณาเลือกประเภทของบัญชี" optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
                      <Option value="user">สมาชิก</Option>
                      <Option value="admin">แอดมิน</Option>
                      <Option value="employee">พนักงาน</Option>
                      <Option value="customer">ลูกค้า</Option>
                    </Select>
                  </Form.Item>
                )}

                {profileInfo?.role === 'employee' && (
                  <Form.Item label="สิทธิบัญชี" name="role" rules={[{ required: true, message: "เลือกประเภทของบัญชี" }]}>
                    <Select showSearch placeholder="กรุณาเลือกประเภทของบัญชี" optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
                      <Option value="user">สมาชิก</Option>
                      <Option value="employee">พนักงาน</Option>
                      <Option value="customer">ลูกค้า</Option>
                    </Select>
                  </Form.Item>
                )}

                <Form.Item name="image" label="Upload" valuePropName="file" getValueFromEvent={handleOnUploadShowImagePreview}>
                  <Upload name="logo" maxCount={1} listType="picture" {...configUpload}>
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
                </Form.Item>

                <div className="flex justify-center align-center justify-items-center">
                  <Form.Item>
                    <Button size={"large"} htmlType="submit">
                      {accountEdit ? "ยืนยัน" : "ลงทะเบียน"}
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

export default Register;
