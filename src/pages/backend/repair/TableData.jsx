import { Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import dayjs from "../../../utils/configuredDayJs";
import { useSearchColumnTable } from "../../../hooks/useSearchColumnTable";
import { useNavigate } from "react-router-dom";

const TableData = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { getColumnSearchProps } = useSearchColumnTable();

  useEffect(() => {
    let itemData = [];
    props.data &&
      props.data.map((item) => {
        itemData = [
          {
            key: item.id,
            fullname: `${item.account.fname} ${item.account.fname}`,
            status_payment: item.status_payment,
            status: item.repairs[0]?.status ? item.repairs[0]?.status : "-",
            created: item.purchase_date ? dayjs(item.purchase_date).format("D MMM BBBB") : "-",
            repairs_createdAt: item.repairs[0]?.created_at ? dayjs(item.repairs[0]?.created_at).format("D MMM BBBB") : "-",
          },
          ...itemData,
        ];

        setData(itemData);
      });
  }, [props.data]);

  const handleOnClickViewRepair = async (key) => {
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);

    window.location.href = `/backend/repair/view/${newData[index].key}`;
  };

  const handleOnClickAddRepair = (key) => {
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);
    window.location.href = `/backend/repair/manage/${newData[index].key}`;
  };

  const handleOnClickViewSale = async (key) => {
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);

    navigate(`/backend/sale/view/${newData[index].key}`);
  };

  const columns = [
    {
      key: "fullname",
      dataIndex: "fullname",
      title: "พนักงานขาย",
      ...getColumnSearchProps("fullname"),
    },
    {
      key: "status_payment",
      dataIndex: "status_payment",
      title: "สถานะชำระเงิน",
      ...getColumnSearchProps("status_payment"),
    },
    {
      key: "status",
      dataIndex: "status",
      title: "สถานะการซ่อม",
      ...getColumnSearchProps("status"),
    },
    {
      key: "created",
      dataIndex: "created",
      title: "วันที่ซื้อ",
    },
    {
      key: "repairs_createdAt",
      dataIndex: "repairs_createdAt",
      title: "วันที่แจ้งซ่อม",
      render: (text) => {
        return text;
      },
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
        data.length >= 1 ? (
          <>
            <div>
              <Typography.Link onClick={() => handleOnClickAddRepair(record.key)}>ข้อมูลแจ้งซ่อม</Typography.Link>
            </div>
            <div>
              <Typography.Link onClick={() => handleOnClickViewRepair(record.key)}>รายละเอียดการแจ้งซ่อม</Typography.Link>
            </div>
            <div>
              <Typography.Link onClick={() => handleOnClickViewSale(record.key)}>รายละเอียดข้อมูลการขาย</Typography.Link>
            </div>
          </>
        ) : null,
    },
  ];

  return <Table bordered dataSource={data} columns={columns} />;
};

export default TableData;
