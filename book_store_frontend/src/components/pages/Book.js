import React from "react";
import {
  EyeOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import { Col, Row } from "antd";
const style = {
  // background: "rgb(241, 142, 125)",
  marginTop: "50px",
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
          <div style={style}>
            {" "}
            <Card
              style={{
                width: 250,
                margin: "0px auto",
              }}
              cover={
                <img
                  alt="example"
                  src={require("../../imgs/mastering-the-kitchen.jpg")}
                />
              }
              actions={[
                <ShoppingCartOutlined key="Add To Cart" />,
                <HeartOutlined key="Add To Wishlist" />,
                <EyeOutlined />,
              ]}
            >
              <Meta
                title="Exploring the Creative Mind: Thinking Outside the Box"
                description="Business, Encyclopedias"
              />
              <div class="authors-list">
                By{" "}
                <a
                  href="https://hostacmee.space/demo/bookchoix/authors/ellie-thomson/"
                  rel="tag"
                >
                  Ellie Thomson
                </a>
                ,
                <a
                  href="https://hostacmee.space/demo/bookchoix/authors/lucy/"
                  rel="tag"
                >
                  Lucy
                </a>
              </div>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <Card
              style={{
                width: 250,
                margin: "0px auto",
              }}
              cover={
                <img
                  alt="example"
                  src={require("../../imgs/african-elephants.jpg")}
                />
              }
              actions={[
                <ShoppingCartOutlined key="Add To Cart" />,
                <HeartOutlined key="Add To Wishlist" />,
                <EyeOutlined />,
              ]}
            >
              <Meta
                title="Wildlife Photography Tips & Techniques"
                description="wildlife"
              />
              <div class="authors-list">
                By{" "}
                <a
                  href="https://hostacmee.space/demo/bookchoix/authors/ellie-thomson/"
                  rel="tag"
                >
                  Ellie Thomson
                </a>
                ,
                <a
                  href="https://hostacmee.space/demo/bookchoix/authors/lucy/"
                  rel="tag"
                >
                  Lucy
                </a>
              </div>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            {" "}
            <Card
              style={{
                width: 250,
                margin: "0px auto",
              }}
              cover={
                <img
                  alt="example"
                  src={require("../../imgs/power-of-women-572x764-1.jpg")}
                />
              }
              actions={[
                <ShoppingCartOutlined key="Add To Cart" />,
                <HeartOutlined key="Add To Wishlist" />,
                <EyeOutlined />,
              ]}
            >
              <Meta title="Will power of the Women" description="Lifestyle" />
              <div class="authors-list">
                By{" "}
                <a
                  href="https://hostacmee.space/demo/bookchoix/authors/ellie-thomson/"
                  rel="tag"
                >
                  Henry
                </a>
                ,
                <a
                  href="https://hostacmee.space/demo/bookchoix/authors/lucy/"
                  rel="tag"
                >
                  Lucy
                </a>
              </div>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            {" "}
            <Card
              style={{
                width: 250,
                margin: "0px auto",
              }}
              cover={
                <img
                  alt="example"
                  src={require('../../imgs/mastering-photography.jpg')}
                />
              }
              actions={[
                <ShoppingCartOutlined key="Add To Cart" />,
                <HeartOutlined key="Add To Wishlist" />,
                <EyeOutlined />,
              ]}
            >
              <Meta
                title="Exploring the Creative Mind: Thinking Outside the Box"
                description="Business, Encyclopedias"
              />
              <div class="authors-list">
                By{" "}
                <a
                  href="https://hostacmee.space/demo/bookchoix/authors/ellie-thomson/"
                  rel="tag"
                >
                  Ellie Thomson
                </a>
                ,
                <a
                  href="https://hostacmee.space/demo/bookchoix/authors/lucy/"
                  rel="tag"
                >
                  Lucy
                </a>
              </div>
            </Card>
          </div>
        </Col>
      </Row>

      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={6}>
          <div style={style}>
            {" "}
            <Card
              style={{
                width: 250,
                margin: "0px auto",
              }}
              cover={
                <img
                  alt="example"
                  src="https://hostacmee.space/demo/bookchoix/wp-content/uploads/2021/03/creativity-572x764-1-550x680.jpg"
                />
              }
              actions={[
                <ShoppingCartOutlined key="Add To Cart" />,
                <HeartOutlined key="Add To Wishlist" />,
                <EyeOutlined />,
              ]}
            >
              <Meta
                title="Exploring the Creative Mind: Thinking Outside the Box"
                description="Business, Encyclopedias"
              />
              <div class="authors-list">
                By{" "}
                <a
                  href="https://hostacmee.space/demo/bookchoix/authors/ellie-thomson/"
                  rel="tag"
                >
                  Ellie Thomson
                </a>
                ,
                <a
                  href="https://hostacmee.space/demo/bookchoix/authors/lucy/"
                  rel="tag"
                >
                  Lucy
                </a>
              </div>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            {" "}
            <Card
              style={{
                width: 250,
                margin: "0px auto",
              }}
              cover={
                <img
                  alt="example"
                  src={require('../../imgs/interior-design-550x680.jpg')}
                />
              }
              actions={[
                <ShoppingCartOutlined key="Add To Cart" />,
                <HeartOutlined key="Add To Wishlist" />,
                <EyeOutlined />,
              ]}
            >
              <Meta
                title="Exploring the Creative Mind: Thinking Outside the Box"
                description="Business, Encyclopedias"
              />
              <div class="authors-list">
                By{" "}
                <a
                  href="https://hostacmee.space/demo/bookchoix/authors/ellie-thomson/"
                  rel="tag"
                >
                  Ellie Thomson
                </a>
                ,
                <a
                  href="https://hostacmee.space/demo/bookchoix/authors/lucy/"
                  rel="tag"
                >
                  Lucy
                </a>
              </div>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            {" "}
            <Card
              style={{
                width: 250,
                margin: "0px auto",
              }}
              cover={
                <img
                  alt="example"
                  src="https://hostacmee.space/demo/bookchoix/wp-content/uploads/2021/03/creativity-572x764-1-550x680.jpg"
                />
              }
              actions={[
                <ShoppingCartOutlined key="Add To Cart" />,
                <HeartOutlined key="Add To Wishlist" />,
                <EyeOutlined />,
              ]}
            >
              <Meta
                title="Exploring the Creative Mind: Thinking Outside the Box"
                description="Business, Encyclopedias"
              />
              <div class="authors-list">
                By{" "}
                <a
                  href="https://hostacmee.space/demo/bookchoix/authors/ellie-thomson/"
                  rel="tag"
                >
                  Ellie Thomson
                </a>
                ,
                <a
                  href="https://hostacmee.space/demo/bookchoix/authors/lucy/"
                  rel="tag"
                >
                  Lucy
                </a>
              </div>
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            {" "}
            <Card
              style={{
                width: 250,
                margin: "0px auto",
              }}
              cover={
                <img
                  alt="example"
                  src="https://hostacmee.space/demo/bookchoix/wp-content/uploads/2021/03/creativity-572x764-1-550x680.jpg"
                />
              }
              actions={[
                <ShoppingCartOutlined key="Add To Cart" />,
                <HeartOutlined key="Add To Wishlist" />,
                <EyeOutlined />,
              ]}
            >
              <Meta
                title="Exploring the Creative Mind: Thinking Outside the Box"
                description="Business, Encyclopedias"
              />
              <div class="authors-list">
                By{" "}
                <a
                  href="https://hostacmee.space/demo/bookchoix/authors/ellie-thomson/"
                  rel="tag"
                >
                  Ellie Thomson
                </a>
                ,
                <a
                  href="https://hostacmee.space/demo/bookchoix/authors/lucy/"
                  rel="tag"
                >
                  Lucy
                </a>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Book;
