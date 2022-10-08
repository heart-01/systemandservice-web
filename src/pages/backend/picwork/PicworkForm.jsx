import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPicwork, patchPicwork, loadPicworkById, clearStatePicwork } from "../../../redux/actions/picworkActions.js";
import { useNavigate, useParams } from "react-router-dom";
import TitleDocument from "../../../utils/TitleDocument";
import { Button, Card, Form, Input, PageHeader, Upload, message, Image } from "antd";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import { UploadOutlined } from "@ant-design/icons";

const PicworkForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { paramsId } = useParams();
  const [fileImage, setFileImage] = useState(null);
  const submitStatus = useSelector((state) => state.picwork.status);
  const dataEdit = useSelector((state) => state.picwork.edit?.data);

  useEffect(() => {
    if (paramsId) {
      dispatch(loadPicworkById(paramsId));
    }
    return () => {
      dispatch(clearStatePicwork());
    };
  }, [paramsId]);

  useEffect(() => {
    if (submitStatus === true) {
      dispatch(clearStatePicwork());
      navigate(-1);
    }
  }, [submitStatus]);

  if (dataEdit) {
    form.setFieldsValue({
      name: dataEdit.name
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

    if (!dataEdit) {
      dispatch(createPicwork(formData));
    } else {
      dispatch(patchPicwork(paramsId, formData));
    }
  };

  const handleOnUploadShowImagePreview = (e) => {
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
            <InsertPhotoOutlinedIcon key="1" />,
            <span key="2" className="ml-3">
              ข้อมูลอัลบั้มภาพผลงาน
            </span>,
          ]}
        />
      </div>

      <section className="text-gray-600">
        <div className="container px-5 mx-auto">
          <div className="mx-0 lg:mx-52">
            <Card title="ข้อมูลอัลบั้มภาพผลงาน" bordered={true}>
              <Form form={form} size="large" name="form" labelCol={{ span: 4 }} onFinish={onFinish} autoComplete="off">
                {dataEdit && (
                  <>
                    {/* <Form.Item className="flex justify-center">รหัสอัลบั้มภาพผลงาน : {paramsId}</Form.Item> */}
                    <Form.Item className="flex justify-center" name="loadImageOld">
                      <Image preview={false} width={200} src={`${process.env.REACT_APP_URL_SERVER}/images/${dataEdit.image_album ? dataEdit.image_album : "nopic.jpeg"}`} />
                    </Form.Item>
                  </>
                )}

                <Form.Item label="ชื่ออัลบั้มภาพ" name="name" rules={[{ required: true, message: "" }]}>
                  <Input />
                </Form.Item>

                <Form.Item name="image" label="ภาพปกอัลบั้ม" valuePropName="file" rules={[{ required: true, message: "" }]} getValueFromEvent={handleOnUploadShowImagePreview}>
                  <Upload maxCount={1} listType="picture" {...configUpload}>
                    <Button icon={<UploadOutlined />}>Click to upload</Button>
                  </Upload>
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

export default PicworkForm;
