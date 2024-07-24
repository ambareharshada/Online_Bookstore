import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { Col, Row } from "antd";
const style = {
  background: "rgb(241, 142, 125)",
  // padding: "8px 3px",
  marginTop:"50px"
};
const { Meta } = Card;

function Book() {
  return (
    <div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={6}>
          <div 
          style={style}>
            {" "}
            <Card
              style={{
                width: 250,
                margin:"0px auto"
              }}
              cover={
                <img
                  alt="example"
                  src="https://hostacmee.space/demo/bookchoix/wp-content/uploads/2021/03/creativity-572x764-1-550x680.jpg"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                // avatar={
                //   <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                // }
                title="Exploring the Creative Mind: Thinking Outside the Box"
                description="Business, Encyclopedias"
              />
              <div class="authors-list">By <a href="https://hostacmee.space/demo/bookchoix/authors/ellie-thomson/" rel="tag">Ellie Thomson</a>, 
              <a href="https://hostacmee.space/demo/bookchoix/authors/lucy/" rel="tag">Lucy</a></div>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
    </div>
  );
}

export default Book;
