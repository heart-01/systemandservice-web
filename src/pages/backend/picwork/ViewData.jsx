import _ from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TitleDocument from "../../../utils/TitleDocument";
import { loadPicworkById, loadAlbumImagesAll, clearStatePicwork } from "../../../redux/actions/picworkActions.js";
import { Button } from "antd";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import TableData from "./TableDataAlbum";
import ModalAddAlbum from "./ModalAddAlbum";

const ViewData = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { paramsId } = useParams();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataEditAlbum, setDataEditAlbum] = useState(null);

  const handleOnClickAddAlbum = () => {
    setDataEditAlbum(null);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dataAlbumImagesAll = useSelector((state) => state.picwork.albumImagesAll?.data);
  const patchStatusData = useSelector((state) => state.picwork?.patch?.status?.data);
  const createStatusData = useSelector((state) => state.picwork?.create?.status?.data);

  useEffect(() => {
    if (paramsId) {
      dispatch(loadPicworkById(paramsId));
      dispatch(loadAlbumImagesAll(paramsId));
    }
    return () => {
      dispatch(clearStatePicwork());
    };
  }, [paramsId, patchStatusData, createStatusData]);

  const handleOnClickBack = () => {
    navigate(-1);
  };

  return (
    <>
      <TitleDocument title={props.title} />

      <ModalAddAlbum isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} handleCancel={handleCancel} paramsId={paramsId} dataEditAlbum={dataEditAlbum} />

      <span style={{ cursor: "pointer" }} onClick={handleOnClickBack}>
        <ArrowBackIosNewIcon />
      </span>

      <p className="text-4xl text-center">รายละเอียดข้อมูลอัลบั้มภาพผลงาน</p>
      <div class="flex justify-end mb-10">
        <Button type="primary" onClick={handleOnClickAddAlbum}>
          เพิ่มอัลบั้มภาพผลงาน
        </Button>
      </div>
      <section className="text-gray-600">
        <TableData setIsModalOpen={setIsModalOpen} data={dataAlbumImagesAll} setDataEditAlbum={setDataEditAlbum} />
      </section>
    </>
  );
};

export default ViewData;
