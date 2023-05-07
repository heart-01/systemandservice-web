import React, { useEffect } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Card, Form, Upload, Image, Input, Modal, message } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAlbumImages, patchAlbumImages } from "../../../redux/actions/picworkActions.js";

const ModalAddAlbum = (props) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [fileImage, setFileImage] = useState();

  useEffect(() => {
    form.resetFields();
  }, [props.paramsId, props.dataEditAlbum]);

  useEffect(() => {
    if (props.dataEditAlbum !== null) {
      form.setFieldsValue({
        place: props.dataEditAlbum.place,
        activity: props.dataEditAlbum.activity,
        detail: props.dataEditAlbum.detail,
        albumId: props.dataEditAlbum.key,
      });
    }
  }, [props.dataEditAlbum]);

  const configUpload = {
    beforeUpload: (file) => {
      if (props.dataEditAlbum === null) {
        const fileImageArr = fileImage ? fileImage : [];

        const typeArray = file.type.split("/");
        const isImage = typeArray[0];
        if (isImage !== "image") {
          message.error(`${file.name} is not a image file`);
          return Upload.LIST_IGNORE;
        }
        fileImageArr.push(file);
        setFileImage(fileImageArr);
        return isImage;
      } else {
        const typeArray = file.type.split("/");
        const isImage = typeArray[0];
        if (isImage !== "image") {
          message.error(`${file.name} is not a image file`);
          return Upload.LIST_IGNORE;
        }
        setFileImage(file);
        return isImage;
      }
    },
  };

  const onFinish = (values) => {
    if (props.dataEditAlbum === null) {
      fileImage.map((fileImage) => {
        const formData = new FormData();
        formData.append("image", fileImage);
        for (const name in values) {
          name !== "albumId" && formData.append(name, values[name]);
        }
        dispatch(createAlbumImages(props.paramsId, formData));
      });
    } else {
      const formData = new FormData();
      for (const name in values) {
        if (name === "image") {
          formData.append("image", fileImage);
        } else {
          name !== "albumId" && formData.append(name, values[name]);
        }
      }
      dispatch(patchAlbumImages(values.albumId, formData));
    }

    form.resetFields();
    props.setIsModalOpen(false);
  };

  const handleOnUploadShowImagePreview = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Modal title="ข้อมูลอัลบั้มภาพผลงาน" width={1000} open={props.isModalOpen} onCancel={props.handleCancel} footer={[]}>
      <Card bordered={false}>
        <Form form={form} size="large" name="form" labelCol={{ span: 4 }} onFinish={onFinish} autoComplete="off">
          {props.dataEditAlbum && (
            <Form.Item className="flex justify-center" name="loadImageOld">
              <Image preview={false} width={200} src={props.dataEditAlbum.image_album.props.images[0].src} />
            </Form.Item>
          )}

          <Form.Item label="สถานที่" name="place">
            <Input />
          </Form.Item>

          <Form.Item label="กิจกรรม" name="activity">
            <Input />
          </Form.Item>

          <Form.Item label="รายละอียด" name="detail">
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="image" label="เพิ่มรูปในอัลบั้ม" valuePropName="file" getValueFromEvent={handleOnUploadShowImagePreview}>
            {props.dataEditAlbum === null ? (
              <Upload listType="picture" {...configUpload}>
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            ) : (
              <Upload maxCount={1} listType="picture" {...configUpload}>
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            )}
          </Form.Item>

          <Form.Item name="albumId">
            <Input hidden />
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
    </Modal>
  );
};

export default ModalAddAlbum;
