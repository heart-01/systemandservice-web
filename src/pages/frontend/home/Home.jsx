import { Image, Carousel } from "antd";
import _ from "lodash";
import useAPI from "../../../hooks/useAPI";
import TitleDocument from "../../../utils/TitleDocument";
import Gallery from "react-grid-gallery";

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

  return (
    <>
      <TitleDocument title={props.title} />

      <section className="text-gray-600 mb-12">
        <div className="container px-5 pt-20 mx-auto">
          <div className="flex justify-center align-center justify-items-center">
            <Image preview={false} width={1020} src="assets/images/home/home-1.png" />
          </div>
          <div className="flex justify-center align-center justify-items-center py-5">
            <Image preview={false} width={1020} src="assets/images/home/home-2.png" />
          </div>

          <div className="flex justify-center align-center justify-items-center">
            <Image preview={false} width={1020} src="assets/images/home/home-3.png" />
          </div>
          <Carousel className="flex justify-center my-5" autoplay>
            {_.times(11, (i) => (
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
            <Image preview={false} width={1020} src="assets/images/home/home-4.png" />
          </div>
          <Carousel className="text-center my-5" autoplay>
            {_.times(11, (i) => (
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
        </div>
      </section>
    </>
  );
};

export default Home;
