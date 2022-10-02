import { useDispatch } from "react-redux";
import { createComment, patchQuestion } from "../../../redux/actions/questionActions.js";
import { Button, Card, Form, Input } from "antd";
import { RichTextEditor } from "@mantine/rte";

const CommentForm = (props) => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFinish = (valuesFormObject) => {
    const questionId = props.questionId;
    valuesFormObject["question_id"] = questionId;
    dispatch(createComment(valuesFormObject));
    dispatch(patchQuestion(questionId, { count_comment: +props.count_comment + 1 }));
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => console.log("Failed:", errorInfo);

  return (
    <Card title="กล่องแสดงความคิดเห็น" bordered={true}>
      <Form form={form} size="large" name="formComment" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
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

        <div className="flex justify-center align-center justify-items-center">
          <Form.Item>
            <Button size={"large"} htmlType="submit">
              แสดงความคิดเห็น
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Card>
  );
};

export default CommentForm;
