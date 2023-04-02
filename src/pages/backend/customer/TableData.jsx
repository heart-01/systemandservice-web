import { Popconfirm, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import dayjs from "../../../utils/configuredDayJs";
import { useSearchColumnTable } from "../../../hooks/useSearchColumnTable";
import { deleteCustomer } from "../../../redux/actions/customerActions.js";
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
            tel: item.tel,
            email: item.email,
            address: item.address,
            created: dayjs(item.created_at).format("D MMM BBBB H:m:s"),
          },
          ...itemData,
        ];

        setData(itemData);
      });
  }, [props.data]);

  const handleOnClickEdit = async (key) => {
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);

    navigate(`/backend/customer/edit/${newData[index].key}`);
  };

  const handleOnClickDelete = (id) => {
    dispatch(deleteCustomer(id));
    const newData = data.filter((item) => item.key !== id);
    setData(newData);
  };

  const columns = [
    {
      key: "key",
      dataIndex: "key",
      title: "รหัส",
      ...getColumnSearchProps("key"),
      sortDirections: ["descend", "ascend"],
    },
    {
      key: "name",
      dataIndex: "name",
      title: "ชื่อ-นามสกุล",
      ...getColumnSearchProps("name"),
    },
    {
      key: "tel",
      dataIndex: "tel",
      title: "เบอร์โทร",
      ...getColumnSearchProps("tel"),
    },
    {
      key: "email",
      dataIndex: "email",
      title: "Email",
      ...getColumnSearchProps("email"),
    },
    {
      key: "address",
      dataIndex: "address",
      title: "ที่อยู่",
      ...getColumnSearchProps("address"),
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
              <Typography.Link onClick={() => handleOnClickEdit(record.key)}>View</Typography.Link>
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
