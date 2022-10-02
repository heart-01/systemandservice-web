import { Image, Card, Col, Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadPicworkAll } from "../../../redux/actions/picworkActions.js";
import TitleDocument from "../../../utils/TitleDocument";

const { Meta } = Card;

const Index = (props) => {
  const dispatch = useDispatch();
  const picworkAll = useSelector((state) => state.picwork.all?.data);

  useEffect(() => {
    dispatch(loadPicworkAll());
  }, []);

  return (
    <>
      <TitleDocument title={props.title} />

      <section className="text-gray-600 mb-12">
        <div className="container px-5 pt-20 mx-auto">
          <Image preview={false} src={`${process.env.REACT_APP_PUBLIC_URL}/assets/images/picwork/header.png`} />

          <Row>
            {picworkAll &&
              picworkAll?.map((item) => (
                <Col key={item.id} className="mt-10" xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <NavLink to={`/picwork/${item.id}`}>
                    <Card hoverable cover={<img alt={item.image_album} src={`${process.env.REACT_APP_URL_SERVER}/images/${item.image_album}`} />}>
                      <Meta title={item.name} description="" />
                    </Card>
                  </NavLink>
                </Col>
              ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Index;
