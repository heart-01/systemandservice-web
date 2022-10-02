import { Alert, Card, Col, Image, Row } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import TitleDocument from "../../../utils/TitleDocument";
import { loadAlbumImagesAll, loadPicworkById } from "../../../redux/actions/picworkActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Gallery from "react-grid-gallery";

const PicworkInfo = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { paramsId } = useParams();
  const dataPicwork = useSelector((state) => state.picwork.edit?.data);
  const dataAlbumImagesAll = useSelector((state) => state.picwork.albumImagesAll?.data);

  useEffect(() => {
    dispatch(loadPicworkById(paramsId));
    dispatch(loadAlbumImagesAll(paramsId));
  }, []);

  return (
    <>
      <TitleDocument title={props.title} />

      <section className="text-gray-600 mb-12">
        <div className="container px-5 pt-20 mx-auto">
          <Image className="mb-10" preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/picwork/header.png`} />

          <Alert message="ภาพผลงานบริษัท" description={dataPicwork?.name} type="info" closable afterClose={() => navigate("/picwork")} />

          <Row>
            {dataAlbumImagesAll &&
              dataAlbumImagesAll?.map((item) => (
                <Col key={item.id} className="mt-10" xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <Gallery
                    images={[
                      {
                        src: `${process.env.REACT_APP_URL_SERVER}/images/${item.image_album}`,
                        thumbnail: `${process.env.REACT_APP_URL_SERVER}/images/${item.image_album}`,
                        thumbnailWidth: 600,
                        thumbnailHeight: 600,
                      },
                    ]}
                  />
                </Col>
              ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default PicworkInfo;
