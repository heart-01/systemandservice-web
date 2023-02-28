import { Image } from "antd";
import { Navigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-blue-500 p-10">
        <div className="flex justify-center align-center justify-items-center">
          <Image width={700} preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/footer-1.png`} />
          <a href="https://www.facebook.com/profile.php?id=100064105025273" target="_blank">
            <Image width={200} preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/footer-2.jpg`} />
          </a>
          <a href="https://linevoom.line.me/user/_dV7quACNaI5CvGKpgCDIcpNBCHpUdQWhX2K9L68?utm_medium=windows&utm_source=desktop&utm_campaign=Profile" target="_blank">
            <Image width={200} preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/footer-3.jpg`} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
