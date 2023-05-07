import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSale, patchSale, loadSaleById, clearStateSale } from "../../../redux/actions/saleActions.js";
import { decrementProduct } from "../../../redux/actions/productActions.js";
import { loadCustomerAll } from "../../../redux/actions/customerActions.js";
import { loadAccountAll } from "../../../redux/actions/accountActions.js";
import { loadProductAll } from "../../../redux/actions/productActions.js";
import { useNavigate, useParams } from "react-router-dom";
import TitleDocument from "../../../utils/TitleDocument";
import { Button, Card, DatePicker, Form, Input, InputNumber, PageHeader, Row, Select } from "antd";
import StorefrontIcon from "@mui/icons-material/Storefront";
import _ from "lodash";
import dayjs from "../../../utils/configuredDayJs";

const { Option } = Select;

const SaleForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { paramsId } = useParams();

  const accountInfo = useSelector((state) => state.account.info);

  const accountAll = useSelector((state) => state.account.all);
  const productAll = useSelector((state) => state.product.all);

  const submitStatus = useSelector((state) => state.sale.status);
  const dataEdit = useSelector((state) => state.sale.edit?.data);

  const price1 = Form.useWatch(`price1`, form);
  const quantity1 = Form.useWatch(`quantity1`, form);
  const price2 = Form.useWatch(`price2`, form);
  const quantity2 = Form.useWatch(`quantity2`, form);
  const price3 = Form.useWatch(`price3`, form);
  const quantity3 = Form.useWatch(`quantity3`, form);
  const price4 = Form.useWatch(`price4`, form);
  const quantity4 = Form.useWatch(`quantity4`, form);
  let result1 = 0;
  let result2 = 0;
  let result3 = 0;
  let result4 = 0;
  if (price1 && quantity1) {
    result1 = price1 * quantity1;
  }
  if (price2 && quantity2) {
    result2 = price2 * quantity2;
  }
  if (price3 && quantity3) {
    result3 = price3 * quantity3;
  }
  if (price4 && quantity4) {
    result4 = price4 * quantity4;
  }
  form.setFieldsValue({
    sum_price: result1 + result2 + result3 + result4,
  });

  useEffect(() => {
    dispatch(loadAccountAll());
    dispatch(loadCustomerAll());
    dispatch(loadProductAll());
  }, []);

  useEffect(() => {
    if (paramsId) {
      dispatch(loadSaleById(paramsId));
    }
    return () => {
      dispatch(clearStateSale());
    };
  }, [paramsId]);

  useEffect(() => {
    if (submitStatus === true) {
      dispatch(clearStateSale());
      navigate(-1);
    }
  }, [submitStatus]);

  useEffect(() => {
    if (dataEdit) {
      form.setFieldsValue({
        account_id: dataEdit.account_id,
        customer_id: dataEdit.customer_id,
        product_id1: dataEdit.product_id1,
        quantity1: dataEdit.quantity1,
        price1: dataEdit.price1,
        product_id2: dataEdit.product_id2,
        quantity2: dataEdit.quantity2,
        price2: dataEdit.price2,
        product_id3: dataEdit.product_id3,
        quantity3: dataEdit.quantity3,
        price3: dataEdit.price3,
        product_id4: dataEdit.product_id4,
        quantity4: dataEdit.quantity4,
        price4: dataEdit.price4,
        status_payment: dataEdit.status_payment,
        purchase_date: dayjs(dataEdit.purchase_date),
        payment_date: dayjs(dataEdit.payment_date),
        warranty: dataEdit.warranty,
      });

      console.log(dataEdit.account_id);
    } else {
      accountInfo.role !== "admin" &&
        form.setFieldsValue({
          account_id: accountInfo.accountId,
        });

      form.setFieldsValue({
        purchase_date: dayjs(),
        payment_date: dayjs(),
      });
    }
  }, [dataEdit]);

  const onFinish = (values) => {
    if (values.product_id1 && values.quantity1) {
      dispatch(decrementProduct(values.product_id1, { quantity: values.quantity1 }));
    }

    if (values.product_id2 && values.quantity2) {
      dispatch(decrementProduct(values.product_id2, { quantity: values.quantity2 }));
    }

    if (values.product_id3 && values.quantity3) {
      dispatch(decrementProduct(values.product_id3, { quantity: values.quantity3 }));
    }

    if (values.product_id4 && values.quantity4) {
      dispatch(decrementProduct(values.product_id4, { quantity: values.quantity4 }));
    }

    if (!dataEdit) {
      dispatch(createSale(values));
    } else {
      dispatch(patchSale(paramsId, values));
    }
  };

  const handleOnChangeSelectProduct = ({
    target: {
      selectedOptions: [
        {
          dataset: { field_price_id },
          dataset: { price },
          dataset: { field_stock_id },
          dataset: { stock },
        },
      ],
    },
  }) => {
    form.setFields([
      {
        name: [field_price_id],
        value: price,
      },
    ]);

    form.setFields([
      {
        name: [field_stock_id],
        value: stock <= 3 ? "สินค้าใกล้หมด" : "",
      },
    ]);
  };

  return (
    <>
      <TitleDocument title={props.title} />

      <div className="mb-10">
        <PageHeader
          onBack={() => navigate(-1)}
          title={[
            <StorefrontIcon key="1" />,
            <span key="2" className="ml-3">
              ข้อมูลการขาย
            </span>,
          ]}
        />
      </div>

      <section className="text-gray-600">
        <div className="container px-5 mx-auto">
          <div className="mx-0 lg:mx-52">
            <Card title="ข้อมูลการขาย" bordered={true}>
              <Form form={form} size="large" name="form" labelCol={{ span: 4 }} onFinish={onFinish} autoComplete="off">
                <Form.Item label="พนักงานขาย" name="account_id" rules={[{ required: true, message: "เลือกพนักงานขาย" }]}>
                  <Select showSearch placeholder="กรุณาเลือกพนักงานขาย" optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
                    {accountAll?.data.map((item) => item.role === "employee" && <Option value={item.id}>{`${item.fname} ${item.lname}`}</Option>)}
                  </Select>
                </Form.Item>

                <Form.Item label="ข้อมูลลูกค้า" name="customer_id" rules={[{ required: true, message: "เลือกข้อมูลลูกค้า" }]}>
                  <Select showSearch placeholder="กรุณาเลือกลูกค้า" optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
                    {accountAll?.data.map((item) => item.role === "customer" && <Option value={item.id}>{`${item.fname} ${item.lname}`}</Option>)}
                  </Select>
                </Form.Item>

                {_.times(4, (i) => (
                  <div className="border-2 p-5 mb-5">
                    <Form.Item label={`รายการ ${i + 1}`} name={`product_id${i + 1}`}>
                      <select onChange={handleOnChangeSelectProduct}>
                        <option data-field_price_id={`price${i + 1}`} value="" selected>
                          กรุณาเลือกรายการสินค้า
                        </option>
                        {productAll?.data.map((item) => {
                          if (item.quantity !== 0) {
                            return (
                              <option value={item.id} data-field_price_id={`price${i + 1}`} data-price={item.price} data-field_stock_id={`stock${i + 1}`} data-stock={item.quantity}>
                                {item.name}
                              </option>
                            );
                          }
                        })}
                      </select>
                    </Form.Item>

                    <Row>
                      <Form.Item labelCol={{ span: 16 }} label="จำนวน" name={`quantity${i + 1}`}>
                        <InputNumber parser={(value) => value.replace(/\./g, "")} min={1} />
                      </Form.Item>

                      <Form.Item labelCol={{ span: 20 }} label="ราคา" name={`price${i + 1}`}>
                        <InputNumber readOnly min={1} />
                      </Form.Item>

                      <Form.Item labelCol={{ span: 9 }} colon={false} label=" " name={`stock${i + 1}`}>
                        <Input bordered={false} readOnly min={1} />
                      </Form.Item>
                    </Row>
                  </div>
                ))}

                <Form.Item label="ราคารวม" name="sum_price">
                  <Input readOnly />
                </Form.Item>

                <Form.Item label="การชำระเงิน" name="status_payment" rules={[{ required: true, message: "เลือกสถานะการชำระเงิน" }]}>
                  <Select showSearch placeholder="กรุณาเลือกสถานะการชำระเงิน" optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
                    <Option value="ยังไม่ชำระเงิน">ยังไม่ชำระเงิน</Option>
                    <Option value="ชำระเงินแล้ว">ชำระเงินแล้ว</Option>
                  </Select>
                </Form.Item>

                <Form.Item label="วันที่ซื้อ" name="purchase_date" rules={[{ required: true, message: "" }]}>
                  <DatePicker />
                </Form.Item>

                <Form.Item label="วันที่จ่ายชำระเงิน" name="payment_date" rules={[{ required: true, message: "" }]}>
                  <DatePicker />
                </Form.Item>

                <Form.Item label="ประกันสินค้า" name="warranty" rules={[{ required: true, message: "เลือกประกันสินค้า" }]}>
                  <Select showSearch placeholder="กรุณาเลือกประกันสินค้า" optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}>
                    <Option value="ไม่มีประกันสินค้า">ไม่มีประกันสินค้า</Option>
                    <Option value="ประกันสินค้า 6 เดือน">ประกันสินค้า 6 เดือน</Option>
                    <Option value="ประกันสินค้า 1 ปี">ประกันสินค้า 1 ปี</Option>
                    <Option value="ประกันสินค้า 2 ปี">ประกันสินค้า 2 ปี</Option>
                    <Option value="ประกันสินค้า 3 ปี">ประกันสินค้า 3 ปี</Option>
                    <Option value="ประกันสินค้า 4 ปี">ประกันสินค้า 4 ปี</Option>
                    <Option value="ประกันสินค้า 5 ปี">ประกันสินค้า 5 ปี</Option>
                  </Select>
                </Form.Item>

                <div className="flex justify-center align-center justify-items-center">
                  <Form.Item>
                    <Button size={"large"} htmlType="submit">
                      ยืนยัน
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default SaleForm;
