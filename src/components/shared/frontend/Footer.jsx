import { Image } from "antd";
import { Navigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-blue-500 p-10">
        <div className="flex justify-center align-center justify-items-center">
          <Image width={700} preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/footer-1.png`} />
          <a href="https://me-qr.com/2554992" target="_blank">
            <Image width={200} preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/footer-2.jpg`} />
          </a>
          <a href="https://me-qr.com/2554922" target="_blank">
            <Image width={200} preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/footer-3.jpg`} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
