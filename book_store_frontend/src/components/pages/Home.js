import React from "react";
import { Col, Row, Carousel } from "antd";
import book1 from "../../imgs/girl-reading-books-online.png";
const contentStyle = {
  margin: 0,
  height: "470px",
  color: "#fff",
  // lineHeight: '160px',
  textAlign: "center",
  // background: '#364d79',
  // backgroundImage:"url('../../imgs/girl-reading-books-online.png')"
};
const text1 = {
  textAlign: "left",
  lineHeight: "40px",
  letterSpacing: "2px",
  fontWeight: 600,
  fontSize: "17px",
};
function Home() {
  return (
    <div>
      <Row>
        <Col span={12}>
          <div
            class="slider-prefix slider-layer"
            style={text1}
          >
            Embed PDF Feature
          </div>
          <div
            style={{
              zIndex: 10,
              fontFamily: "Jost",
              height: "auto",
              width: "auto",
              color: "rgb(18, 24, 35)",
              textDecoration: "none",
              whiteSpace: "nowrap",
              minHeight: 0,
              minWidth: 0,
              maxHeight: "none",
              maxWidth: "none",
              textAlign: "left",
              // lineHeight: 72,
              letterSpacing: 1,
              fontWeight: 700,
              fontSize: 64,
              transformOrigin: "50% 50%",
              opacity: 1,
              transform: "perspective(600px)",
              visibility: "visible",
              marginLeft:"130px",
            }}
          
          >
            Read{" "}
            <span
              style={{
                color: "rgb(241, 142, 125)",
                textAlign: "left",
                // lineHeight: 72,
               
                letterSpacing: 1,
                fontWeight: 700,
                fontSize: 64,
              }}
              data-stylerecorder="true"
            >
              PDF Books{" "}
            </span>
            <br />
            Online
          </div>
        </Col>
        <Col span={12}>
          {" "}
          <img src={book1} alt="" height={450} />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
