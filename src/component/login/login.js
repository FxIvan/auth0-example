import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { LoginButtonGoogle } from "../loginGoogle/loginGoogle";
//css
import "./index.css";

export const LoginWithGoogle = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <Container fluid>
      <Container className="mt-5">
        <Row className="pt-5">
          <Col md={4} className="m-auto  container-login">
            <Row>
              <Form onSubmit={handleLogin}>
                <Row>
                  <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row className="mt-4 text-center">
                  <Col className="m-auto">
                    <Button variant="success" type="submit">
                      Login
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Row>
            <Row>
              <Col md={12} className="login-withgoogle text-center mt-5">
                <div className="line-withgoogle">
                </div>
                <Row>
                    <Col>
                        <LoginButtonGoogle/>
                    </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
