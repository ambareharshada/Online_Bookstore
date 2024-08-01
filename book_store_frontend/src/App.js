import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Book from "./components/pages/Book";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { Flex, Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  // textAlign: "center",
  // color: "#fff",
  // height: 64,
  // paddingInline: 48,
  // lineHeight: "64px",
  // backgroundColor: "#4096ff",
};
const contentStyle = {
  textAlign: "center",
  // minHeight:500,
  lineHeight: "120px",
  color: "#000",
  // backgroundColor: "#0958d9",
  backgroundImage:"url('https://hostacmee.space/demo/bookchoix/wp-content/uploads/revslider/slider-1/slider-bg-stationary.png')"
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#f18e7d",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% - 0px)",
  maxWidth: "calc(100% - 0px)",
};
function App() {
  return (
    <div className="App">
      <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>
            <Navbar />
          </Header>
          <Content style={contentStyle}>
            {" "}
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/book" element={<Book />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </Content>
          <Footer style={footerStyle}>My Company ©2024 Created by Me</Footer>
        </Layout>
      </Flex>
    </div>
  );
}

export default App;
