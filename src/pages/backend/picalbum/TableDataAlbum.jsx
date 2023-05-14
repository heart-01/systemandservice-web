import { Popconfirm, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import dayjs from "../../../utils/configuredDayJs";
import { useSearchColumnTable } from "../../../hooks/useSearchColumnTable";
import { useDispatch } from "react-redux";
import Gallery from "react-grid-gallery";
import { deleteAlbumImages } from "../../../redux/actions/picworkActions";

const TableData = (props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { getColumnSearchProps } = useSearchColumnTable();

  useEffect(() => {
    let itemData = [];
    props.data &&
      props.data.map((item) => {
        itemData = [
          {
            key: item.id,
            place: item.place === "undefined" || item.place === null || item.place === "" ? "-" : item.place,
            activity: item.activity === "undefined" || item.place === null || item.place === "" ? "-" : item.activity,
            detail: item.detail === "undefined" || item.place === null || item.place === "" ? "-" : item.detail,
            image_album: (
              <Gallery
                images={[
                  {
                    src: `${process.env.REACT_APP_URL_SERVER}/images/${item.image_album}`,
                    thumbnail: `${process.env.REACT_APP_URL_SERVER}/images/${item.image_album}`,
                    thumbnailWidth: 10,
                    thumbnailHeight: 10,
                  },
                ]}
              />
            ),
            created: dayjs(item.created_at).format("D MMM BBBB H:m:s"),
          },
          ...itemData,
        ];

        setData(itemData);
      });
  }, [props.data]);

  const handleOnClickEdit = async (record) => {
    console.log(record);
    props.setIsModalOpen(true);
    props.setDataEditAlbum(record);
  };

  const handleOnClickDelete = (id) => {
    dispatch(deleteAlbumImages(id));
    const newData = data.filter((item) => item.key !== id);
    setData(newData);
  };

  const columns = [
    {
      key: "place",
      dataIndex: "place",
      title: "สถานที่",
      ...getColumnSearchProps("place"),
    },
    {
      key: "activity",
      dataIndex: "activity",
      title: "กิจกรรม",
      ...getColumnSearchProps("activity"),
    },
    {
      key: "detail",
      dataIndex: "detail",
      title: "รายละเอียด",
      ...getColumnSearchProps("detail"),
    },
    {
      key: "image_album",
      dataIndex: "image_album",
      title: "รูปอัลบั้ม",
    },
    {
      key: "created",
      dataIndex: "created",
      title: "Created",
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
        data.length >= 1 ? (
          <>
            <div>
              <Typography.Link onClick={() => handleOnClickEdit(record)}>Edit</Typography.Link>
            </div>
            <div>
              <Popconfirm title="Sure to delete?" onConfirm={() => handleOnClickDelete(record.key)}>
                <a className="text-red-500">Delete</a>
              </Popconfirm>
            </div>
          </>
        ) : null,
    },
  ];

  return <Table bordered dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />;
};

export default TableData;
