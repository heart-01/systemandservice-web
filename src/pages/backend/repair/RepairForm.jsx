import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRepairByIdSale, createRepair, patchRepair, clearStateRepair } from "../../../redux/actions/repairActions.js";
import { loadProductAll } from "../../../redux/actions/productActions.js";
import { loadAccountAll } from "../../../redux/actions/accountActions.js";
import { loadSaleById, clearStateSale } from "../../../redux/actions/saleActions.js";
import { useNavigate, useParams } from "react-router-dom";
import TitleDocument from "../../../utils/TitleDocument";
import { Button, Card, Form, Input, PageHeader, Select, Upload, message, DatePicker, Image } from "antd";
import HandymanOutlinedIcon from "@mui/icons-material/HandymanOutlined";
import dayjs from "../../../utils/configuredDayJs";
import _ from "lodash";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const RepairForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { paramsId } = useParams();
  const [form] = Form.useForm();
  const [fileImage, setFileImage] = useState(null);
  const submitStatus = useSelector((state) => state.repair.status);
  const accountAll = useSelector((state) => state.account.all);
  const productAll = useSelector((state) => state.product.all);
  const dataEdit = useSelector((state) => state.repair.edit?.data[0]);
  const dataViewSale = useSelector((state) => state.sale.edit?.data);
  const profileInfo = useSelector((state) => state.account.info);

  useEffect(() => {
    dispatch(loadProductAll());
    dispatch(loadAccountAll());
  }, []);

  useEffect(() => {
    if (paramsId) {
      dispatch(loadRepairByIdSale(paramsId));
      dispatch(loadSaleById(paramsId));
    }
    return () => {
      dispatch(clearStateSale());
      dispatch(clearStateRepair());
    };
  }, [paramsId]);

  useEffect(() => {
    if (submitStatus === true) {
      dispatch(clearStateSale());
      dispatch(clearStateRepair());
      navigate(-1);
    }
  }, [submitStatus]);

  if (dataViewSale) {
    form.setFieldsValue({
      symptom1: "",
      symptom2: "",
      symptom3: "",
      symptom4: "",
      product_id1: dataViewSale.product_id1,
      product_id2: dataViewSale.product_id2,
      product_id3: dataViewSale.product_id3,
      product_id4: dataViewSale.product_id4,
    });
  }

  if (dataEdit) {
    form.setFieldsValue({
      symptom1: dataEdit.symptom1,
      symptom2: dataEdit.symptom2,
      symptom3: dataEdit.symptom3,
      symptom4: dataEdit.symptom4,
      service_staff: dataEdit.service_staff,
      success_date: dayjs(dataEdit.success_date),
      status: dataEdit.status,
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
    formData.append("sale_id", paramsId);

    if (!dataEdit) {
      dispatch(createRepair(formData));
    } else {
      dispatch(patchRepair(dataEdit.id, formData));
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

      <div className="mb-10">
        <PageHeader
          onBack={() => navigate(-1)}
          title={[
            <HandymanOutlinedIcon key="1" />,
            <span key="2" className="ml-3">
              ข้อมูลแจ้งซ่อมสินค้า
            </span>,
          ]}
        />
      </div>

      <section className="text-gray-600">
        <div className="container px-5 mx-auto">
          <div className="mx-0 lg:mx-52">
            <Card title="ข้อมูลแจ้งซ่อมสินค้า" bordered={true}>
              <Form form={form} size="large" name="form" labelCol={{ span: 4 }} onFinish={onFinish} autoComplete="off">
                {dataViewSale && (
                  <Form.Item>
                    <div className="flex justify-between">
                      <div>
                        ชื่อ : {dataViewSale?.customer.fname} {dataViewSale?.customer.lname}
                      </div>
                      <div>เบอร์โทรศัพท์ : {dataViewSale?.customer.tel}</div>
                      <div>วันที่แจ้ง : {dayjs().format("D MMM BBBB")}</div>
                    </div>
                    <div className="flex justify-between my-5">
                      <div>ที่อยู่ : {dataViewSale?.customer.address}</div>
                      <div>วันที่ซื้อ : {dayjs(dataViewSale?.customer.created_at).format("D MMM BBBB")}</div>
                    </div>
                    <div className="flex justify-between my-5">
                      <div>
                        พนักงานขาย : {dataViewSale?.account.fname} {dataViewSale?.account.lname}
                      </div>
                    </div>
                  </Form.Item>
                )}

                <div className="my-5 text-xl">ข้อมูลการขาย</div>
                {_.times(4, (i) => (
                  <div className="border-2 p-5 mb-5">
                    <Form.Item label={`สินค้าที่ ${i + 1}`} name={`product_id${i + 1}`}>
                      <select disabled>
                        <option value="" selected>
                          -
                        </option>
                        {productAll?.data.map((item) => (
                          <option value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </Form.Item>

                    <Form.Item label="อาการ" name={`symptom${i + 1}`}>
                      <Input />
                    </Form.Item>
                  </div>
                ))}

                {(profileInfo?.role === 'admin' || profileInfo?.role === 'employee') && (<><Form.Item label="พนักงานที่บริการ" name="service_staff" rules={[{ required: true, message: "เลือกพนักงานให้บริการ" }]}>
                  <Select showSearch placeholder="กรุณาเลือกพนักงานให้บริการ" optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
                    {accountAll?.data.map((item) => item.role === "employee" && <Option value={item.id}>{`${item.fname} ${item.lname}`}</Option>)}
                  </Select>
                </Form.Item>

                <Form.Item label="วันที่ให้บริการ" name="success_date">
                  <DatePicker />
                </Form.Item>

                <Form.Item label="สถานะการบริการ" name="status" rules={[{ required: true, message: "เลือกสถานะการบริการ" }]}>
                  <Select showSearch placeholder="กรุณาเลือกประเภทของบัญชี" optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
                    <Option value="รอการให้บริการ">รอการให้บริการ</Option>
                    <Option value="อยู่ระหว่างการให้บริการ">อยู่ระหว่างการให้บริการ</Option>
                    <Option value="ให้บริการแล้วเสร็จ">ให้บริการแล้วเสร็จ</Option>
                  </Select>
                </Form.Item></>)}

                {/* <Form.Item name="image" label="รูปภาพ" valuePropName="file" getValueFromEvent={handleOnUploadShowImagePreview}>
                  <Upload name="logo" maxCount={1} listType="picture" {...configUpload}>
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
                </Form.Item>

                {dataEdit && (
                  <>
                    <Form.Item className="flex justify-center">
                      <Image preview={false} width={200} src={`${process.env.REACT_APP_URL_SERVER}/images/${dataEdit.image1 ? dataEdit.image1 : "nopic.jpeg"}`} />
                    </Form.Item>
                  </>
                )} */}

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

export default RepairForm;
