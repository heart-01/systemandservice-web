import { Route, Routes } from "react-router-dom";

// Layout
import FrontLayout from "./components/layouts/FrontLayout";
import BackendLayout from "./components/layouts/BackendLayout";

// Pages Frontend
import Home from "./pages/frontend/home/Home";
import History from "./pages/frontend/informations/History";
import Ideology from "./pages/frontend/informations/Ideology";
import Vision from "./pages/frontend/informations/Vision";
import Service from "./pages/frontend/informations/Service";
import Organization from "./pages/frontend/informations/Organization";
import Board from "./pages/frontend/informations/Board";
import Publicize from "./pages/frontend/publicize/Publicize";
import PublicizeInfo from "./pages/frontend/publicize/ViewData";
import QuestionIndex from "./pages/frontend/question/index";
import QuestionForm from "./pages/frontend/question/QuestionForm";
import QuestionInfo from "./pages/frontend/question/QuestionInfo";
import PicworkIndex from "./pages/frontend/picwork/index";
import PicworkInfo from "./pages/frontend/picwork/picworkInfo";
import ContactIndex from "./pages/frontend/contact/index";
import Login from "./pages/frontend/auth/Login";
import Register from "./pages/frontend/auth/Register";

// Middleware
import AuthGuard from "./middleware/AuthGuard";

// Pages Backend
import ManageIndex from "./pages/backend/index";
import ManageContactIndex from "./pages/backend/contact/index";
import ManageAccountIndex from "./pages/backend/account/index";
import ManageAccountRegister from "./pages/frontend/auth/Register";
import ManageCustomerIndex from "./pages/backend/customer/index";
import ManageCustomerCreate from "./pages/backend/customer/CustomerForm";
import ManageCustomerEdit from "./pages/backend/customer/CustomerForm";
import ManageProductIndex from "./pages/backend/product/index";
import ManageProductCreate from "./pages/backend/product/ProductForm";
import ManageProductEdit from "./pages/backend/product/ProductForm";
import ManageSaleIndex from "./pages/backend/sale/index";
import ManageSaleCreate from "./pages/backend/sale/SaleForm";
import ManageSaleEdit from "./pages/backend/sale/SaleForm";
import ManageSaleView from "./pages/backend/sale/ViewData";
import ManageRepairIndex from "./pages/backend/repair/index";
import ManageRepair from "./pages/backend/repair/RepairForm";
import ManageRepairView from "./pages/backend/repair/ViewData";
import ManagePicworkIndex from "./pages/backend/picwork/index";
import ManagePicworkCreate from "./pages/backend/picwork/PicworkForm";
import ManagePicworkEdit from "./pages/backend/picwork/PicworkForm";
import ManagePicworkView from "./pages/backend/picwork/ViewData";
import ManagePublicizeIndex from "./pages/backend/publicize/index";
import ManagePublicizeCreate from "./pages/backend/publicize/PublicizeForm";
import ManagePublicizeEdit from "./pages/backend/publicize/PublicizeForm";
import ManagePublicizeView from "./pages/backend/publicize/ViewData";

// Error
import PageNotFound from "./pages/error/PageNotFound";

const RoutesPath = () => {
  return (
    <Routes>
      {/* Frontend */}
      <Route element={<FrontLayout />}>
        <Route path="/" element={<Home title="หน้าแรก" />} />
        <Route path="/information">
          <Route index element={<History title="ประวัติบริษัท" />} />
          <Route path="ideology" element={<Ideology title="อุดมการณ์" />} />
          <Route path="vision" element={<Vision title="วิสัยทัศน์" />} />
          <Route path="service" element={<Service title="บริการของบริษัท" />} />
          <Route path="organization" element={<Organization title="โครงสร้างองค์กร" />} />
          <Route path="board" element={<Board title="คณะกรรมการบริษัท" />} />
        </Route>
        <Route path="/publicize">
          <Route index element={<Publicize title="ประชาสัมพันธ์" />} />
          <Route path=":paramsId" element={<PublicizeInfo title="ประชาสัมพันธ์" />} />
        </Route>
        <Route path="/question">
          <Route index element={<QuestionIndex title="กระทู้ถาม-ตอบ" />} />
          <Route path="create" element={<QuestionForm title="สร้างกระทู้ถาม-ตอบ" />} />
          <Route path=":questionId" element={<QuestionInfo title="รายละเอียดกระทู้" />} />
        </Route>
        <Route path="/picwork">
          <Route index element={<PicworkIndex title="อัลบั้มภาพ" />} />
          <Route path=":paramsId" element={<PicworkInfo title="รายละเอียดอัลบั้มภาพ" />} />
        </Route>
        <Route path="/contact" element={<ContactIndex title="ติดต่อเรา" />} />
        <Route path="/login" element={<Login title="เข้าสู่ระบบ" />} />
        <Route path="/register" element={<Register title="ลงทะเบียน" />} />
      </Route>

      {/* Backend */}
      <Route element={<AuthGuard />}>
        <Route path="/backend" element={<BackendLayout />}>
          <Route index element={<ManageIndex title="Dashboard" />} />
          <Route path="contact" element={<ManageContactIndex title="ข้อมูลติดต่อเรา" />} />
          <Route path="account">
            <Route index element={<ManageAccountIndex title="ข้อมูลพนักงาน" />} />
            <Route path="register" element={<ManageAccountRegister title="ข้อมูลพนักงาน" />} />
            <Route path="register/:accountId" element={<ManageAccountRegister title="ข้อมูลพนักงาน" />} />
          </Route>
          <Route path="customer">
            <Route index element={<ManageCustomerIndex title="ข้อมูลลูกค้า" />} />
            <Route path="add" element={<ManageCustomerCreate title="ข้อมูลลูกค้า" />} />
            <Route path="edit/:paramsId" element={<ManageCustomerEdit title="ข้อมูลลูกค้า" />} />
          </Route>
          <Route path="product">
            <Route index element={<ManageProductIndex title="ข้อมูลสินค้า" />} />
            <Route path="add" element={<ManageProductCreate title="ข้อมูลสินค้า" />} />
            <Route path="edit/:paramsId" element={<ManageProductEdit title="ข้อมูลสินค้า" />} />
          </Route>
          <Route path="sale">
            <Route index element={<ManageSaleIndex title="ข้อมูลการขาย" />} />
            <Route path="add" element={<ManageSaleCreate title="ข้อมูลการขาย" />} />
            <Route path="edit/:paramsId" element={<ManageSaleEdit title="ข้อมูลการขาย" />} />
            <Route path="view/:paramsId" element={<ManageSaleView title="ข้อมูลการขาย" />} />
          </Route>
          <Route path="repair">
            <Route index element={<ManageRepairIndex title="ข้อมูลแจ้งซ่อมสินค้า" />} />
            <Route path="manage/:paramsId" element={<ManageRepair title="ข้อมูลแจ้งซ่อมสินค้า" />} />
            <Route path="view/:paramsId" element={<ManageRepairView title="ข้อมูลแจ้งซ่อมสินค้า" />} />
          </Route>
          <Route path="picwork">
            <Route index element={<ManagePicworkIndex title="ข้อมูลอัลบั้มภาพผลงาน" />} />
            <Route path="add" element={<ManagePicworkCreate title="ข้อมูลอัลบั้มภาพผลงาน" />} />
            <Route path="edit/:paramsId" element={<ManagePicworkEdit title="ข้อมูลอัลบั้มภาพผลงาน" />} />
            <Route path="view/:paramsId" element={<ManagePicworkView title="ข้อมูลอัลบั้มภาพผลงาน" />} />
          </Route>
          <Route path="publicize">
            <Route index element={<ManagePublicizeIndex title="ข้อมูลข่าวประชาสัมพันธ์" />} />
            <Route path="add" element={<ManagePublicizeCreate title="ข้อมูลข่าวประชาสัมพันธ์" />} />
            <Route path="edit/:paramsId" element={<ManagePublicizeEdit title="ข้อมูลข่าวประชาสัมพันธ์" />} />
            <Route path="view/:paramsId" element={<ManagePublicizeView title="ข้อมูลข่าวประชาสัมพันธ์" />} />
          </Route>
        </Route>
      </Route>

      {/* NotFound */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutesPath;
