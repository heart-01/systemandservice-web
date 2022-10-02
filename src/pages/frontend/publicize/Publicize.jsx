import { Image } from "antd";
import TitleDocument from "../../../utils/TitleDocument";

const Publicize = (props) => {
  return (
    <>
      <TitleDocument title={props.title} />

      <section className="text-gray-600 mb-12">
        <div className="container px-5 pt-20 mx-auto">
          <Image preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/publicize/publicize-header.png`} />

          <div className="flex justify-center align-center justify-items-center">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                <h2 className="text-2xl font-extrabold text-gray-900">บทความที่เกี่ยวข้อง</h2>
                <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                  <div className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img
                        src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/publicize/publicize-1.jpeg`}
                        alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <span className="absolute inset-0" />
                      สาระน่ารู้
                    </h3>
                    <p className="text-base font-semibold text-gray-900">8 วิธีเลือกซื้อกล้องวงจรปิดเลือกกล้องอย่างไร ให้ใช้งานได้ดี เหมาะสมกับพื้นที่</p>
                  </div>
                  <div className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img
                        src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/publicize/publicize-2.jpeg`}
                        alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <span className="absolute inset-0" />
                      สาระน่ารู้
                    </h3>
                    <p className="text-base font-semibold text-gray-900">5 อาการควรระวัง บ่งบอกว่า คอมพิวเตอร์ของคุณ เริ่มเสื่อมสภาพ แนะนำให้รีบซ่อม</p>
                  </div>
                  <div className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img
                        src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/publicize/publicize-3.jpeg`}
                        alt="Collection of four insulated travel bottles on wooden shelf."
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <span className="absolute inset-0" />
                      สาระน่ารู้
                    </h3>
                    <p className="text-base font-semibold text-gray-900">ประโยชน์ของ ระบบอินเทอร์เน็ต และข้อควรระวังในการใช้งานที่ต้องทราบ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Publicize;
