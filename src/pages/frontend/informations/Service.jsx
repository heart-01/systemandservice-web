import TitleDocument from "../../../utils/TitleDocument";

import { Image } from "antd";

const Service = (props) => {
  return (
    <>
      <TitleDocument title={props.title} />

      <section className="text-gray-600 mb-12">
        <div className="container px-5 pt-20 mx-auto">
          <Image preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/service-header.png`} />

          <div className="flex justify-center align-center justify-items-center md:m-20 m-0">
            <Image preview={false} width={400} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/service-1-1.png`} />
            <Image preview={false} className="md:ml-10 ml-0" width={800} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/service-1.png`} />
          </div>

          <div className="flex justify-center align-center justify-items-center md:m-20 m-0">
            <Image preview={false} width={400} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/service-2-1.png`} />
            <Image preview={false} className="md:ml-10 ml-0" width={800} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/service-2.png`} />
          </div>

          <div className="flex justify-center align-center justify-items-center md:m-20 m-0">
            <Image preview={false} width={400} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/service-3-1.png`} />
            <Image preview={false} className="md:ml-10 ml-0" width={800} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/service-3.png`} />
          </div>

          <div className="flex justify-center align-center justify-items-center md:m-20 m-0">
            <Image preview={false} width={400} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/service-4-1.png`} />
            <Image preview={false} className="md:ml-10 ml-0" width={800} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/service-4.png`} />
          </div>

          <div className="flex justify-center align-center justify-items-center md:m-20 m-0">
            <Image preview={false} width={400} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/service-5-1.png`} />
            <Image preview={false} className="md:ml-10 ml-0" width={800} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/service-5.png`} />
          </div>

          <div className="flex justify-center align-center justify-items-center md:m-20 m-0">
            <Image preview={false} width={400} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/service-6-1.png`} />
            <Image preview={false} className="md:ml-10 ml-0" width={800} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/service-6.png`} />
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Service;
