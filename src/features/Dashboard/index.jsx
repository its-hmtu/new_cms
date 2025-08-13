import React, { useState } from "react";
import { Line } from "@ant-design/plots";
// import { Input, Table } from "antd";
import { FlexTable } from "@/components/Atom/FlexTable";
import ShadowCard from "@/components/Atom/ShadowCard";
import {
  DownloadOutlined,
  LineChartOutlined,
  SearchOutlined,
  StopOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { Input } from "@/components/Atom/Input";
import { Button, Col, Form, Row } from "antd";

function Dashboard() {
  const data = [
    { year: "1991", value: 3, group: "A" },
    { year: "1992", value: 4, group: "A" },
    { year: "1993", value: 3.5, group: "A" },
    { year: "1994", value: 5, group: "A" },
    { year: "1995", value: 4.9, group: "A" },
    { year: "1996", value: 6, group: "A" },
    { year: "1997", value: 7, group: "A" },
    { year: "1998", value: 9, group: "A" },
    { year: "1999", value: 13, group: "A" },

    { year: "1991", value: 1, group: "B" },
    { year: "1992", value: 2, group: "B" },
    { year: "1993", value: 4, group: "B" },
    { year: "1994", value: 3, group: "B" },
    { year: "1995", value: 10, group: "B" },
    { year: "1996", value: 1, group: "B" },
    { year: "1997", value: 7, group: "B" },
    { year: "1998", value: 9, group: "B" },
    { year: "1999", value: 15, group: "B" },
  ];

  const columns = [
    { title: "NO .", dataIndex: "no", key: "no" },
    { title: "Tên", dataIndex: "name", key: "name" },
    { title: "Tuổi", dataIndex: "age", key: "age" },
  ];

  const data1 = [
    { id: 1, name: "Nguyễn Văn A", age: 25 },
    { id: 2, name: "Trần Thị B", age: 30 },
    { id: 3, name: "Trần Thị B", age: 30 },
    { id: 4, name: "Trần Thị B", age: 30 },
    { id: 5, name: "Trần Thị B", age: 30 },
    { id: 6, name: "Trần Thị B", age: 30 },
    { id: 7, name: "Trần Thị B", age: 30 },
    { id: 8, name: "Trần Thị B", age: 30 },
    { id: 9, name: "Trần Thị B", age: 30 },
    { id: 10, name: "Trần Thị B", age: 30 },
    { id: 12, name: "Trần Thị B", age: 30 },
    { id: 22, name: "Trần Thị B", age: 30 },
    { id: 23, name: "Trần Thị B", age: 30 },
    { id: 24, name: "Trần Thị B", age: 30 },
    { id: 25, name: "Trần Thị B", age: 30 },
    { id: 26, name: "Trần Thị B", age: 30 },
    { id: 27, name: "Trần Thị B", age: 30 },
    { id: 28, name: "Trần Thị B", age: 30 },
    { id: 29, name: "Trần Thị B", age: 30 },
    { id: 30, name: "Trần Thị B", age: 30 },
    { id: 11, name: "Nguyễn Văn A", age: 25 },
    { id: 31, name: "Nguyễn Văn A", age: 25 },
    { id: 41, name: "Nguyễn Văn A", age: 25 },
    { id: 51, name: "Nguyễn Văn A", age: 25 },
    { id: 61, name: "Nguyễn Văn A", age: 25 },
    { id: 71, name: "Nguyễn Văn A", age: 25 },
  ];

  const config = {
    data: data,
    xField: "year",
    yField: "value",
    seriesField: "group",
    color: ["red", "green"],
    point: {
      size: 7,
      shape: "circle",
      style: {
        fill: "transparent",
        stroke: "#1890ff",
        lineWidth: 1,
      },
    },
    interaction: {
      tooltip: {
        marker: false,
      },
    },
    style:{
      lineWidth: 1,
      lineDash: [4, 4],
    },
  };

  const [form] = Form.useForm();
  const [query, setQuery] = useState({
    page: 0,
    size: 20,
  });

  return (
    <>
      <ShadowCard>
        <Form
          form={form}
          // onFinish={onFinish}
          layout="vertical"
        >
          <Row gutter={10}>
            <Col sm={6}>
              <Input
                label="Họ tên"
                name="fullName"
                placeholder="Nhập họ và tên"
                required
              />
            </Col>
            <Col>
              <Button
                style={{ marginTop: 22 }}
                htmlType="submit"
                type="primary"
                icon={<SearchOutlined />}
              >
                Search
              </Button>
            </Col>
            <Col>
              <Button
                style={{ marginTop: 22 }}
                htmlType="click"
                icon={<StopOutlined />}
              >
                Reset
              </Button>
            </Col>
            <Col>
              <Button
                style={{ marginTop: 22 }}
                htmlType="click"
                icon={<DownloadOutlined />}
              >
                Export Excel
              </Button>
            </Col>
          </Row>
        </Form>
      </ShadowCard>

      <Row gutter={10}>
        <Col sm={6}>
          <ShadowCard>Total Conection</ShadowCard>
        </Col>
        <Col sm={6}>
          <ShadowCard>Total Conection</ShadowCard>
        </Col>
        <Col sm={6}>
          <ShadowCard>Total Conection</ShadowCard>
        </Col>
      </Row>

      <ShadowCard title="Table Detail" icon={<TableOutlined />}>
        <FlexTable
          // rowKey={(record, index) => `${record.id}${index}`}
          dataSource={data1.map((e, index) => ({
            ...e,
            // no: index + 1 + query.page * query.size,
            no: index + 1,
          }))}
          columns={columns}
          pagination={{
            current: query.page,
            pageSize: query.size,
            onChange(page, size) {
              setQuery((prevValue) => ({ ...prevValue, page, size }));
            },
          }}
          // loading={loading}
        />
      </ShadowCard>

      <ShadowCard title="Overview" icon={<LineChartOutlined />}>
        <div style={{ maxWidth: "100%" }}>
          <Line {...config} />
        </div>
      </ShadowCard>
    </>
  );
}

export default Dashboard;
