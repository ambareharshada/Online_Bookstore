import React, { useEffect, useRef, useState } from "react";
import {
  EyeOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Card, Modal } from "antd";
import { Col, Row } from "antd";
import axios from "axios";

const style = {
  // background: "rgb(241, 142, 125)",
  marginTop: "50px",
};
const { Meta } = Card;

const Book = () => {
  const [books, setAllBooks] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // use effect for get all books data
  const fetchBooksData = useRef(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5007/api/books/getAllBooks/`
      );
      setAllBooks(response.data.books);
      console.log("Response", response);
    } catch (error) {
      console.error("There was an error for get all patients!", error.message);
    }
  });

  useEffect(() => {
    fetchBooksData.current();
  }, [fetchBooksData]);

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
        {/* <Col className="gutter-row" span={6}>
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
        </Col> */}
        {books.map((book, index) => {
          return (
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
                      src={require("../../imgs/Shreeman_Yogi.jpg")}
                    />
                  }
                  actions={[
                    <ShoppingCartOutlined
                      key="Add To Cart"
                      onClick={showModal}
                    />,
                    <HeartOutlined key="Add To Wishlist" />,
                    <EyeOutlined />,
                  ]}
                >
                  <Meta
                    title={book.title}
                    description={book.genre}
                  />
                  <div class="authors-list">
                    By{" "}
                    <a
                      href="https://hostacmee.space/demo/bookchoix/authors/ellie-thomson/"
                      rel="tag"
                    >
                     {book.author}
                    </a>
                    {/* ,
                    <a
                      href="https://hostacmee.space/demo/bookchoix/authors/lucy/"
                      rel="tag"
                    >
                      Lucy
                    </a> */}
                  </div>
                </Card>
              </div>
            </Col>
          );
        })}
        {/* <Col className="gutter-row" span={6}>
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
                <ShoppingCartOutlined key="Add To Cart" onClick={showModal} />,
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
        </Col> */}
        {/* <Col className="gutter-row" span={6}>
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
        </Col> */}
      </Row>

      {/* MOdal Code */}

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default Book;
