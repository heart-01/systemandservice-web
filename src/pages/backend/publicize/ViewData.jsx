import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPublicize, patchPublicize, loadPublicizeById, clearStatePublicize } from "../../../redux/actions/publicizeActions.js";
import { useNavigate, useParams } from "react-router-dom";
import TitleDocument from "../../../utils/TitleDocument";
import { Button, Card, Form, Input, PageHeader, Upload, message, Image } from "antd";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import { UploadOutlined } from "@ant-design/icons";
import RichTextEditor from "@mantine/rte";

const PublicizeForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { paramsId } = useParams();
  const [fileImage, setFileImage] = useState(null);
  const submitStatus = useSelector((state) => state.publicize?.status);
  const dataEdit = useSelector((state) => state.publicize?.edit?.data);

  useEffect(() => {
    if (paramsId) {
      dispatch(loadPublicizeById(paramsId));
    }
    return () => {
      dispatch(clearStatePublicize());
    };
  }, [paramsId]);

  useEffect(() => {
    if (submitStatus === true) {
      dispatch(clearStatePublicize());
      navigate(-1);
    }
  }, [submitStatus]);

  if (dataEdit) {
    form.setFieldsValue({
      name: dataEdit.name,
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
      dispatch(createPublicize(formData));
    } else {
      dispatch(patchPublicize(paramsId, formData));
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
            <NewspaperOutlinedIcon key="1" />,
            <span key="2" className="ml-3">
              ข้อมูลข่าวประชาสัมพันธ์
            </span>,
          ]}
        />
      </div>

      <section className="text-gray-600">
        <div className="container px-5 mx-auto">
          <div className="mx-0 lg:mx-52">
            <Card title="ข้อมูลข่าวประชาสัมพันธ์" bordered={true}>
              <Form form={form} size="large" name="form" labelCol={{ span: 4 }} onFinish={onFinish} autoComplete="off">
                {dataEdit && (
                  <>
                    {/* <Form.Item className="flex justify-center">รหัสอัลบั้มภาพผลงาน : {paramsId}</Form.Item> */}
                    <Form.Item className="flex justify-center" name="loadImageOld">
                      <Image preview={false} width={200} src={`${process.env.REACT_APP_URL_SERVER}/images/${dataEdit.image ? dataEdit.image : "nopic.jpeg"}`} />
                    </Form.Item>
                  </>
                )}

                <Form.Item label="ชื่อบทความ" name="name">
                  <Input disabled />
                </Form.Item>

                {/* Component use edit */}
                {dataEdit && (
                  <Form.Item label="รายละเอียด" name="description" initialValue={dataEdit.description}>
                    <RichTextEditor
                      controls={[
                        ["bold", "italic", "underline"],
                        ["unorderedList", "h1", "h2", "h3"],
                        ["sup", "sub"],
                      ]}
                    />
                  </Form.Item>
                )}
              </Form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicizeForm;
