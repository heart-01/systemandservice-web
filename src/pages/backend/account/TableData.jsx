import { Popconfirm, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import dayjs from "../../../utils/configuredDayJs";
import { useSearchColumnTable } from "../../../hooks/useSearchColumnTable";
import { deleteAccount } from "../../../redux/actions/accountActions.js";
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
            fullname: `${item.fname} ${item.lname}`,
            tel: item.tel,
            email: item.email,
            username: item.username,
            gender: item.gender,
            start_date: item.start_date ? dayjs(item.start_date).format("D MMM BBBB"): '-',
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

    navigate(`/backend/account/register/${newData[index].key}`)
  };

  const handleOnClickDelete = (id) => {
    dispatch(deleteAccount(id));
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
      key: "fullname",
      dataIndex: "fullname",
      title: "ชื่อ-นามสกุล",
      ...getColumnSearchProps("fullname"),
      sorter: (a, b) => a.fullname.length - b.fullname.length,
      sortDirections: ["descend", "ascend"],
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
      key: "username",
      dataIndex: "username",
      title: "ชื่อผู้ใช้งาน",
      ...getColumnSearchProps("username"),
      sorter: (a, b) => a.username.length - b.username.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      key: "gender",
      dataIndex: "gender",
      title: "เพศ",
      ...getColumnSearchProps("gender")
    },
    {
      key: "start_date",
      dataIndex: "start_date",
      title: "วันเริ่มทำงาน",
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
