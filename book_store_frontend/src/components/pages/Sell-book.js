import React, { useRef,useEffect } from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";

const Sellbook = () => {
  const [form] = Form.useForm();
  // Handle form submission
  const handleSubmit = async () => {
    try {
      // Validate the fields and get the values
      const values = await form.validateFields();
      console.log("Form Values:", values);

    const response = await axios.post(
        `http://localhost:5007/api/books/addBooks/`,values
      );
      console.log("Response", response);
      // You can now use these values to perform further actions, like API calls
    } catch (error) {
      console.log("Validation Failed:", error);
    }
  };


  return (
    <Form
      form={form}
      layout="vertical"
      autoComplete="off"
      name="basicform"
      initialValues={{
        title: "",
        author: "",
        genre: "",
        description: "",
        rating: "",
        price: "",
      }}
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="author"
        label="Author"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="genre"
        label="Genre"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="rating"
        label="Rating"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="price"
        label="Price"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Submit{" "}
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Sellbook;

// import React from "react";
// // import "antd/dist/antd.css";
// import { Form, Button, Input } from "antd";

// const Sellbook = () => {
//   return (
//     <>
//       <h1>Manage Your Books</h1>
//       <div>
//         <h4>ReactJS Ant-Design Form Component</h4>
//         <Form
//           name="basicform"
//           onFinishFailed={() => alert("Failed to submit")}
//           onFinish={() => alert("Form Submitted")}
//           initialValues={{ remember: true }}
//         >
//           <Form.Item
//             label="Enter username"
//             name="Username"
//             rules={[{ required: true, message: "Please enter username" }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item>
//             <Button type="success" htmlType="submit">
//               Submit Username
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     </>
//   );
// };
// export default Sellbook;
