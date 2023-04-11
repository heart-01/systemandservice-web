import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createQuestion } from "../../../redux/actions/questionActions.js";
import { Button, Form, Input, Typography } from "antd";
import { RichTextEditor } from "@mantine/rte";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import TitleDocument from "../../../utils/TitleDocument";
import { useEffect } from "react";

const { Title } = Typography;

const QuestionForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formQuestion] = Form.useForm();
  const profileInfo = useSelector((state) => state.account.info);

  useEffect(() => {
    formQuestion.setFieldsValue({
      alias: profileInfo?.fullname,
      email: profileInfo?.email,
    });
  }, [profileInfo]);

  const onFinish = (valuesFormObject) => {
    dispatch(createQuestion(valuesFormObject));
    navigate("/question");
  };

  const onFinishFailed = (errorInfo) => console.log("Failed:", errorInfo);

  return (
    <>
      <TitleDocument title={props.title} />

      <section className="text-gray-600 mb-12">
        <div className="container px-5 pt-20 mx-auto">
          <div className="mb-10">
            <NavLink to="/question">
              <Button size={"large"} type="primary" shape="round">
                <ArrowBackIosIcon fontSize={"inherit"} /> Back
              </Button>
            </NavLink>
          </div>

          <div className="flex justify-center align-center justify-items-center">
            <Title className="text-center" level={2}>
              สร้างกระทู้ถาม-ตอบ
            </Title>
          </div>

          <Form
            form={formQuestion}
            size="large"
            name="formQuestion"
            labelCol={{
              span: 2,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="ชื่อนามแฝง"
              name="alias"
              rules={[
                {
                  required: true,
                  message: "กรุณากรอกชื่อนามแฝง",
                },
              ]}
            >
              <Input disabled />
            </Form.Item>

            <Form.Item
              label="อีเมล"
              name="email"
              rules={[
                {
                  required: true,
                  message: "กรุณากรอกอีเมล",
                },
              ]}
            >
              <Input disabled />
            </Form.Item>

            <Form.Item
              label="หัวเรื่อง"
              name="title"
              rules={[
                {
                  required: true,
                  message: "กรุณากรอกหัวเรื่อง",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="รายละเอียด"
              name="description"
              rules={[
                {
                  required: true,
                  message: "กรุณากรอกรายละเอียด",
                },
              ]}
            >
              <RichTextEditor
                controls={[
                  ["bold", "italic", "underline"],
                  ["unorderedList", "h1", "h2", "h3"],
                  ["sup", "sub"],
                ]}
              />
            </Form.Item>

            {/* <Form.Item label="แท็ก" name="tag">
              <Input />
            </Form.Item> */}

            <div className="flex justify-center align-center justify-items-center">
              <Form.Item>
                <Button size={"large"} htmlType="submit">
                  สร้างกระทู้
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
};

export default QuestionForm;
