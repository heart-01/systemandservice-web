import { Popconfirm, Table } from "antd";
import React, { useEffect, useState } from "react";
import dayjs from "../../../utils/configuredDayJs";
import { useSearchColumnTable } from "../../../hooks/useSearchColumnTable";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/actions/contactActions";

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
            fullname: item.fullname,
            email: item.email,
            tel: item.tel,
            title_service: item.title_service,
            service: item.service,
            description: item.description,
            created: dayjs(item.created_at).format("D MMM BBBB H:m:s"),
          },
          ...itemData,
        ];

        setData(itemData);
      });
  }, [props.data]);

  const handleOnClickDelete = (id) => {
    dispatch(deleteContact(id));
    const newData = data.filter((item) => item.key !== id);
    setData(newData);
  };

  const columns = [
    {
      key: "fullname",
      dataIndex: "fullname",
      title: "ชื่อ-นามสกุล",
      ...getColumnSearchProps("fullname"),
      sorter: (a, b) => a.fullname.length - b.fullname.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      key: "email",
      dataIndex: "email",
      title: "Email",
      ...getColumnSearchProps("email"),
    },
    {
      key: "tel",
      dataIndex: "tel",
      title: "เบอร์โทร",
      ...getColumnSearchProps("tel"),
    },
    {
      key: "title_service",
      dataIndex: "title_service",
      title: "หัวข้อ",
      ...getColumnSearchProps("title_service"),
      sorter: (a, b) => a.title_service.length - b.title_service.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      key: "service",
      dataIndex: "service",
      title: "บริการ",
      ...getColumnSearchProps("service"),
      sorter: (a, b) => a.service.length - b.service.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      key: "description",
      dataIndex: "description",
      title: "ข้อความเพิ่มเติม",
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
          <div>
            <Popconfirm title="Sure to delete?" onConfirm={() => handleOnClickDelete(record.key)}>
              <a className="text-red-500" >Delete</a>
            </Popconfirm>
          </div>
        ) : null,
    },
  ];

  return <Table bordered dataSource={data} columns={columns} />;
};

export default TableData;
