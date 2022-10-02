import TitleDocument from "../../../utils/TitleDocument";
import { Button, Card, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loginAccount, profileInfoAccount, clearStateAccount } from "../../../redux/actions/accountActions.js";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.account.status);

  useEffect(() => {
    if (loginStatus === true) {
      dispatch(profileInfoAccount());
      navigate("/");
    }
    dispatch(clearStateAccount());
  }, [loginStatus]);

  const onFinish = (values) => {
    dispatch(loginAccount(values));
  };

  return (
    <>
      <TitleDocument title={props.title} />

      <section className="text-gray-600 mb-12">
        <div className="container px-5 pt-20 mx-auto">
          <div className="mx-0 lg:mx-96 my-20">
            <Card title="เข้าสู่ระบบ" bordered={true}>
              <Form size="large" name="formLogin" labelCol={{ span: 3 }} onFinish={onFinish} autoComplete="off">
                <Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
                  <Input />
                </Form.Item>

                <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
                  <Input.Password />
                </Form.Item>

                <div className="flex justify-center align-center justify-items-center">
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </div>

                <div className="flex justify-center align-center justify-items-center">
                  <Form.Item>
                    <Button size={"large"} htmlType="submit">
                      เข้าสู่ระบบ
                    </Button>
                  </Form.Item>
                </div>

                <div className="flex justify-center align-center justify-items-center">
                  <Form.Item name="remember" valuePropName="checked">
                    ยังไม่เป็นสมาชิกใช่ไหม ? <NavLink to="/register">สมัครสมาชิก</NavLink>
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

export default Login;
