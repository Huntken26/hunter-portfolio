import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './css/About.css';

const About = () => {
  return (
    <Container id="about" className="About">
      <Row>
        <Col xs={12} sm={4}>
          <Image src="https://media.licdn.com/dms/image/C5603AQHuH7Qd7wL65Q/profile-displayphoto-shrink_100_100/0/1660559521911?e=1680739200&v=beta&t=x6gFAoclUL7gzYsbBmUAAN4Vcvt8EwwN1KPeTGjQUiA" roundedCircle />
        </Col>
        <Col xs={12} sm={8}>
          <h2>About Me</h2>
          <p>
          In 2022 I joined a Full Stack Developer Bootcamp and cultivated many skills including: 
          JavaScript, HTML, CSS, React.js, Bulma, Bootstrap, Angular, Node.js, Express.js, MongoDB, MySQL.
           I've also learned other technologies including: Heroku, GitHub/ GitLab, Canva and so on. I have an eye for concise code. 
            I also have a creative side. I love being able to curate the experience of a web application. As a result I am currently learning some UX/UI principles so that I can further explore these aspects as a Web Developer. I am very enthusiastic in the workplace and I love to encourage others to reach their potential as well📈.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

