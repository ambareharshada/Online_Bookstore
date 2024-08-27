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
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product) => {    // // Find if the product already exists in the cart
    // const existingProduct = cart.find((item) => item.id === product.id);

    // if (existingProduct) {
    //   // If the product already exists, update its quantity
    //   setCart(
    //     cart.map((item) =>
    //       item.id === product.id
    //         ? { ...item, quantity: item.quantity + 1 } // Increment quantity
    //         : item
    //     )
    //   );
    // } else {
    //   // If the product does not exist in the cart, add it with quantity 1
    //   setCart((prevCart) => [
    //     ...prevCart,
    //     { ...product, id: product._id, quantity: 1 },
    //   ]);
    // }


    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);

      if (existingProductIndex !== -1) {
          // Product exists, update its quantity
          const updatedCart = [...prevCart];
          updatedCart[existingProductIndex] = {
              ...updatedCart[existingProductIndex],
              quantity: updatedCart[existingProductIndex].quantity + 1
          };
          return updatedCart;
      } else {
          // Product does not exist, add new product with quantity 1
          return [...prevCart, { ...product, id: product._id, quantity: 1 }];
      }
  });
  };
  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const showModal = (book) => {
    console.log(book, "Book");

    setIsModalOpen(true);
    addToCart(book);
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
                      // onClick={showModal}
                      onClick={() => showModal(book)}
                    />,
                    <HeartOutlined key="Add To Wishlist" />,
                    <EyeOutlined />,
                  ]}
                >
                  <Meta title={book.title} description={book.genre} />
                  <div class="authors-list">
                    By{" "}
                    <a
                      href="https://hostacmee.space/demo/bookchoix/authors/ellie-thomson/"
                      rel="tag"
                    >
                      {book.author}
                    </a>
                  </div>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>

      {/* MOdal Code */}

      <Modal
        title="Cart"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ borderBottom: "2px solid #ddd", padding: "10px", textAlign:"Left" }}>
                  Name
                </th>
                <th style={{ borderBottom: "2px solid #ddd", padding: "10px" , textAlign:"Left" }}>
                  Price
                </th>
                <th style={{ borderBottom: "2px solid #ddd", padding: "10px" , textAlign:"Left"}}>
                  Quantity
                </th>
                <th style={{ borderBottom: "2px solid #ddd", padding: "10px" , textAlign:"Left" }}>
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td
                    style={{ padding: "10px", borderBottom: "1px solid #ddd" }}
                  >
                    {item.title}
                  </td>
                  <td
                    style={{ padding: "10px", borderBottom: "1px solid #ddd" }}
                  >
                    ${item.price.toFixed(2)}
                  </td>
                  <td
                    style={{ padding: "10px", borderBottom: "1px solid #ddd" }}
                  >
                    {item.quantity}
                  </td>
                  <td
                    style={{ padding: "10px", borderBottom: "1px solid #ddd" }}
                  >
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td
                  colSpan="3"
                  style={{ padding: "10px", borderTop: "2px solid #ddd" }}
                >
                  Total
                </td>
                <td style={{ padding: "10px", borderTop: "2px solid #ddd" }}>
                  ${totalPrice.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div> */}

<div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '2px solid #ddd', padding: '10px' }}>Name</th>
            <th style={{ borderBottom: '2px solid #ddd', padding: '10px' }}>Price</th>
            <th style={{ borderBottom: '2px solid #ddd', padding: '10px' }}>Quantity</th>
            <th style={{ borderBottom: '2px solid #ddd', padding: '10px' }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{item.title}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>${item.price.toFixed(2)}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{item.quantity}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" style={{ padding: '10px', borderTop: '2px solid #ddd' }}>Total</td>
            <td style={{ padding: '10px', borderTop: '2px solid #ddd' }}>${totalPrice.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
      </Modal>
    </div>
  );
};

export default Book;
