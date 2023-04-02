import { Popconfirm, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import dayjs from "../../../utils/configuredDayJs";
import { useSearchColumnTable } from "../../../hooks/useSearchColumnTable";
import { deletePublicize } from "../../../redux/actions/publicizeActions.js";
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
            image: item.image ? <img src={`${process.env.REACT_APP_URL_SERVER}/images/${item.image}`} alt="image" width="100" /> : <img src={`${process.env.REACT_APP_URL_SERVER}/images/nopic.jpeg`} alt="image" width="100" />,
            created: dayjs(item.created_at).format("D MMM BBBB"),
          },
          ...itemData,
        ];

        setData(itemData);
      });
  }, [props.data]);

  const handleOnClickView = async (key) => {
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);

    navigate(`/backend/publicize/view/${newData[index].key}`);
  };

  const handleOnClickEdit = async (key) => {
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);

    navigate(`/backend/publicize/edit/${newData[index].key}`);
  };

  const handleOnClickDelete = (id) => {
    dispatch(deletePublicize(id));
    const newData = data.filter((item) => item.key !== id);
    setData(newData);
  };

  const columns = [
    {
      key: "name",
      dataIndex: "name",
      title: "ชื่อบทความ",
      ...getColumnSearchProps("name"),
    },
    {
      key: "image",
      dataIndex: "image",
      title: "ภาพบทความ",
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
            {/* <div>
              <Typography.Link onClick={() => handleOnClickView(record.key)}>View</Typography.Link>
            </div> */}
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
