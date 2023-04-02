import { Popconfirm, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import dayjs from "../../../utils/configuredDayJs";
import { useSearchColumnTable } from "../../../hooks/useSearchColumnTable";
import { deleteProduct } from "../../../redux/actions/productActions.js";
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
            brand: item.brand,
            model: item.model,
            description: item.description,
            quantity: item.quantity,
            price: item.price,
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

    navigate(`/backend/product/edit/${newData[index].key}`)
  };

  const handleOnClickDelete = (id) => {
    dispatch(deleteProduct(id));
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
      title: "ชื่อสินค้า",
      ...getColumnSearchProps("name"),
    },
    {
      key: "brand",
      dataIndex: "brand",
      title: "ยี่ห้อ",
      ...getColumnSearchProps("brand"),
    },
    {
      key: "model",
      dataIndex: "model",
      title: "รุ่น",
      ...getColumnSearchProps("model"),
    },
    {
      key: "description",
      dataIndex: "description",
      title: "รายละเอียดสินค้า",
      ...getColumnSearchProps("description"),
    },
    {
      key: "quantity",
      dataIndex: "quantity",
      title: "จำนวนสินค้า",
      ...getColumnSearchProps("quantity"),
    },
    {
      key: "price",
      dataIndex: "price",
      title: "ราคาสินค้า",
      ...getColumnSearchProps("price"),
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
