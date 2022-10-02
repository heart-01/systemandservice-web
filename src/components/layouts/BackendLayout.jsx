import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "../shared/backend/Navbar";
import Sidebar from "../shared/backend/Sidebar";
import FooterPage from "../shared/backend/Footer";

const { Content } = Layout;

const BackendLayout = () => {
  return (
    <Layout className="h-screen">
      <Sidebar />

      <Layout className="site-layout">
        <Navbar />

        <Content className="my-5 bg-white" style={{ padding: 24, minHeight: 1800, overflow: "initial" }}>
          <div className="ml-48 p-10 bg-white ">
            <Outlet />
          </div>
        </Content>

        <FooterPage />
      </Layout>
    </Layout>
  );
};

export default BackendLayout;
