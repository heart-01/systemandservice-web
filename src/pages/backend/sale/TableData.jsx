import { Popconfirm, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import dayjs from "../../../utils/configuredDayJs";
import { useSearchColumnTable } from "../../../hooks/useSearchColumnTable";
import { deleteSale } from "../../../redux/actions/saleActions.js";
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
            account: `${item.account.fname} ${item.account.lname}`,
            customer: `${item.customer.fname} ${item.customer.lname}`,
            status_payment: item.status_payment,
            created: item.purchase_date ? dayjs(item.purchase_date).format("D MMM BBBB") : "-",
          },
          ...itemData,
        ];

        setData(itemData);
      });
  }, [props.data]);

  const handleOnClickView = async (key) => {
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);

    navigate(`/backend/sale/view/${newData[index].key}`);
  };

  const handleOnClickEdit = async (key) => {
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);

    navigate(`/backend/sale/edit/${newData[index].key}`);
  };

  const handleOnClickDelete = (id) => {
    dispatch(deleteSale(id));
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
      key: "account",
      dataIndex: "account",
      title: "พนักงานขาย",
      ...getColumnSearchProps("account"),
    },
    {
      key: "customer",
      dataIndex: "customer",
      title: "ลูกค้า",
      ...getColumnSearchProps("customer"),
    },
    {
      key: "status_payment",
      dataIndex: "status_payment",
      title: "สถานะการชำระเงิน",
      ...getColumnSearchProps("status_payment"),
    },
    {
      key: "created",
      dataIndex: "created",
      title: "วันที่ซื้อสินค้า",
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

            {props.role !== "customer" && (
              <>
                <div>
                  <Typography.Link onClick={() => handleOnClickEdit(record.key)}>Edit</Typography.Link>
                </div>
                <div>
                  <Popconfirm title="Sure to delete?" onConfirm={() => handleOnClickDelete(record.key)}>
                    <a>Delete</a>
                  </Popconfirm>
                </div>
              </>
            )}
          </>
        ) : null,
    },
  ];

  return <Table bordered dataSource={data} columns={columns} />;
};

export default TableData;
