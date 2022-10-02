import TitleDocument from "../../../utils/TitleDocument";

import { Image } from "antd";

const Board = (props) => {
  return (
    <>
      <TitleDocument title={props.title} />

      <section className="text-gray-600 mb-12">
        <div className="container px-5 pt-20 mx-auto">
          <Image preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/board-header.png`} />

          <div className="flex justify-center align-center justify-items-center m-0 md:m-20">
            <Image preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/board-1.png`} />
            <Image preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/information/board-2.png`} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Board;
