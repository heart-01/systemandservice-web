import { Image } from "antd";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="bg-blue-500 p-10">
        <div className="flex justify-center align-center justify-items-center">
          <Image width={700} preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/footer-1.png`} />
          <Image width={500} preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/footer-2.png`} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
