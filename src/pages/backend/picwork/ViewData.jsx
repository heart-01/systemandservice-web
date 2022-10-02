import _ from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TitleDocument from "../../../utils/TitleDocument";
import { loadPicworkById, loadAlbumImagesAll, createAlbumImages, clearStatePicwork } from "../../../redux/actions/picworkActions.js";
import { Button, Card, Form, Upload, Image, message } from "antd";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { UploadOutlined } from "@ant-design/icons";
import Gallery from "react-grid-gallery";

const ViewData = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { paramsId } = useParams();
  const [form] = Form.useForm();
  const [fileImage, setFileImage] = useState(null);
  const dataView = useSelector((state) => state.picwork.edit?.data);
  const dataAlbumImagesAll = useSelector((state) => state.picwork.albumImagesAll?.data);

  useEffect(() => {
    if (paramsId) {
      dispatch(loadPicworkById(paramsId));
      dispatch(loadAlbumImagesAll(paramsId));
    }
    return () => {
      dispatch(clearStatePicwork());
    };
  }, [paramsId]);

  useEffect(() => {
    dispatch(loadAlbumImagesAll(paramsId));
  }, [dataAlbumImagesAll]);

  const handleOnClickBack = () => {
    navigate(-1);
  };

  const onFinish = (values) => {
    const formData = new FormData();

    for (const name in values) {
      if (name === "image") {
        formData.append("image", fileImage);
      } else {
        formData.append(name, values[name]);
      }
    }

    dispatch(createAlbumImages(paramsId, formData));
    form.resetFields();
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

      <span style={{ cursor: "pointer" }} onClick={handleOnClickBack}>
        <ArrowBackIosNewIcon />
      </span>
      <p className="text-4xl text-center">รายละเอียดข้อมูลอัลบั้มภาพผลงาน</p>

      <section className="text-gray-600">
        <div className="container px-5 mx-auto">
          <div className="mx-0 lg:mx-52">
            <Card title="ข้อมูลอัลบั้มภาพผลงาน" bordered={true}>
              <Form form={form} size="large" name="form" labelCol={{ span: 4 }} onFinish={onFinish} autoComplete="off">
                {dataView && (
                  <>
                    {/* <Form.Item className="flex justify-center">รหัสอัลบั้มภาพผลงาน : {paramsId}</Form.Item> */}
                    <Form.Item className="flex justify-center" name="loadImageOld">
                      <Image preview={false} width={200} src={`${process.env.REACT_APP_URL_SERVER}/images/${dataView.image_album ? dataView.image_album : "nopic.jpeg"}`} />
                    </Form.Item>
                  </>
                )}

                <Form.Item name="image" label="เพิ่มรูปในอัลบั้ม" valuePropName="file" rules={[{ required: true, message: "" }]} getValueFromEvent={handleOnUploadShowImagePreview}>
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

        <p className="text-4xl text-center my-10">รูปภาพในอัลบั้ม</p>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-4 gap-20">
            {dataAlbumImagesAll &&
              dataAlbumImagesAll?.map((item) => {
                return (
                  <div className="w-96">
                    <Gallery
                      images={[
                        {
                          src: `${process.env.REACT_APP_URL_SERVER}/images/${item.image_album}`,
                          thumbnail: `${process.env.REACT_APP_URL_SERVER}/images/${item.image_album}`,
                          thumbnailWidth: 200,
                          thumbnailHeight: 200,
                        },
                      ]}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewData;
