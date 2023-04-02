import { Popconfirm, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import dayjs from "../../../utils/configuredDayJs";
import { useSearchColumnTable } from "../../../hooks/useSearchColumnTable";
import { deletePicwork } from "../../../redux/actions/picworkActions.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const TableData = (props) => {
  const navigate = useNavigate();
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
            name: item.name,
            image_album: <img src={`${process.env.REACT_APP_URL_SERVER}/images/${item.image_album}`} alt="image" width="50" />,
            created: dayjs(item.created_at).format("D MMM BBBB H:m:s"),
          },
          ...itemData,
        ];

        setData(itemData);
      });
  }, [props.data]);

  const handleOnClickView = async (key) => {
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);

    navigate(`/backend/picwork/view/${newData[index].key}`);
  };

  const handleOnClickEdit = async (key) => {
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);

    navigate(`/backend/picwork/edit/${newData[index].key}`);
  };

  const handleOnClickDelete = (id) => {
    dispatch(deletePicwork(id));
    const newData = data.filter((item) => item.key !== id);
    setData(newData);
  };

  const columns = [
    // {
    //   key: "key",
    //   dataIndex: "key",
    //   title: "รหัส",
    //   ...getColumnSearchProps("key"),
    //   sortDirections: ["descend", "ascend"],
    // },
    {
      key: "name",
      dataIndex: "name",
      title: "ชื่ออัลบั้ม",
      ...getColumnSearchProps("name"),
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
              <Typography.Link onClick={() => handleOnClickView(record.key)}>View</Typography.Link>
            </div>
            <div>
              <Typography.Link onClick={() => handleOnClickEdit(record.key)}>Edit</Typography.Link>
            </div>
            <div>
              <Popconfirm title="Sure to delete?" onConfirm={() => handleOnClickDelete(record.key)}>
                <a className="text-red-500" >Delete</a>
              </Popconfirm>
            </div>
          </>
        ) : null,
    },
  ];

  return <Table bordered dataSource={data} columns={columns} />;
};

export default TableData;
