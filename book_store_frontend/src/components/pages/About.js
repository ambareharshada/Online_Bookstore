import React from "react";
import { Layout, Typography, Row, Col, Card, Avatar } from "antd";
import jane from "../../imgs/ellie-thomson-150x150.jpg";
import smith from "../../imgs/tamara-bellis-150x150.jpg";
import sam from "../../imgs/Lucy.jpg";
const { Content } = Layout;
const { Title, Paragraph } = Typography;
const { Meta } = Card;

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image: jane,
    description:
      "John is CEO with over 20 years of experience in industry.",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: smith,
    description: "Jane is the CTO and a tech visionary.",
  },
  {
    name: "Sam Wilson",
    role: "Lead Developer",
    image: sam,
    description: "Sam is the lead developer with a passion for coding.",
  },
];

const AboutUs = () => {
  return (
    <Layout style={{ padding: "24px" }}>
      <Content>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <Title level={2} style={{fontFamily:"Jost",fontWeight:"500"}}>About Us</Title>
          <Paragraph style={{fontFamily:"Jost",fontSize:"20px"}}>
            We are a dedicated team committed to providing the best service
            possible. Our mission is to bring value to our customers through our
            expertise and passion for excellence. Organically grow the holistic
            world view of disruptive innovation via workplace diversity and
            empowerment. Taking seamless key performance indicators offline to
            maximize the long tail.
          </Paragraph>
        </div>

        <div>
          <Title
            level={3}
            style={{ textAlign: "center", marginBottom: "24px" ,fontFamily:"Jost",fontWeight:"500"}}
          >
            Our Team
          </Title>
          <Row gutter={[16, 16]}>
            {teamMembers.map((member, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card
                  hoverable
                  cover={<img alt={member.name} src={member.image} />}
                >
                  <Meta
                    avatar={<Avatar src={member.image} />}
                    title={member.name}
                    description={member.role}
                  />
                  <Paragraph style={{ marginTop: "12px" }}>
                    {member.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default AboutUs;
