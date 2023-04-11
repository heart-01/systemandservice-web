import { Image, Carousel } from "antd";
import _ from "lodash";
import useAPI from "../../../hooks/useAPI";
import TitleDocument from "../../../utils/TitleDocument";
import Gallery from "react-grid-gallery";
import { useDispatch, useSelector } from "react-redux";
import { loadPublicizeAll } from "../../../redux/actions/publicizeActions";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const styleSmall = () => {
  return {
    width: "100%",
    height: "auto",
    overflow: "visible",
  };
};

const Home = (props) => {
  // const {data, loading} = useAPI('/finno-ex-re-v2-static-staging/recruitment-test/fund-ranking-1Y.json')
  // console.log(data)

  const dispatch = useDispatch();
  const publicizeAll = useSelector((state) => state.publicize.all?.data);

  useEffect(() => {
    dispatch(loadPublicizeAll());
  }, []);

  return (
    <>
      <TitleDocument title={props.title} />

      <section className="text-gray-600 mb-12">
        <div className="container px-5 pt-20 mx-auto">
          <div className="flex justify-center align-center justify-items-center">
            <Image preview={false} width={1920} src="assets/images/home/home-1.png" />
          </div>
          <div className="flex justify-center align-center justify-items-center py-5">
            <Image preview={false} width={1920} src="assets/images/home/home-2.png" />
          </div>

          <div className="flex justify-center align-center justify-items-center">
            <Image preview={false} width={1920} height={320} src="assets/images/home/home-3.png" />
          </div>
          <Carousel className="flex justify-center my-5" autoplay>
            {_.times(10, (i) => (
              <div className="px-60">
                <Gallery
                  key={i}
                  thumbnailStyle={styleSmall}
                  tileViewportStyle={styleSmall}
                  images={[
                    {
                      src: `assets/images/home/slide-promotion-${i + 1}.png`,
                      thumbnail: `assets/images/home/slide-promotion-${i + 1}.png`,
                    },
                  ]}
                />
              </div>
            ))}
          </Carousel>

          <div className="flex justify-center align-center justify-items-center">
            <Image preview={false} width={1920} height={320} src="assets/images/home/home-4.png" />
          </div>
          <Carousel className="text-center my-5" autoplay>
            {_.times(5, (i) => (
              <div className="px-60">
                <Gallery
                  key={i}
                  thumbnailStyle={styleSmall}
                  tileViewportStyle={styleSmall}
                  images={[
                    {
                      src: `assets/images/home/slide-performance-${i + 1}.png`,
                      thumbnail: `assets/images/home/slide-performance-${i + 1}.png`,
                    },
                  ]}
                />
              </div>
            ))}
          </Carousel>

          <div className="flex justify-center align-center justify-items-center">
            <Image preview={false} width={1920} height={320} src="assets/images/publicize/publicize-header.png" />
          </div>
          <div className="flex justify-center align-center justify-items-center">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-16 lg:max-w-none">
                <h2 className="text-2xl font-extrabold text-gray-900">บทความที่เกี่ยวข้อง</h2>
                <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                  {publicizeAll &&
                    publicizeAll.map(
                      (item, index) =>
                        index <= 2 && (
                          <NavLink to={`/publicize/${item.id}`}>
                            <div className="group relative">
                              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <img
                                  src={`${process.env.REACT_APP_URL_SERVER}/images/${item.image}`}
                                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                                  className="w-full h-full object-center object-cover"
                                />
                              </div>
                              <h3 className="mt-6 text-sm text-gray-500">
                                <span className="absolute inset-0" />
                              </h3>
                              <p className="text-base font-semibold text-gray-900">{item.name}</p>
                            </div>
                          </NavLink>
                        )
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
