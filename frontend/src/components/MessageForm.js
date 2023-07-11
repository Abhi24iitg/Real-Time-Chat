import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./MessageForm.css";

function MessageForm() {
  return (
    <>
      <div className="messages-output"></div>
      <Form>
        <Row>
          <Col md={11}>
            <Form.Group>
              <textarea
                type="text"
                className="chatarea"
                placeholder="write your message!!"
              />
            </Form.Group>
          </Col>
          <Col md={1}>
            <Button
              variant="primary"
              type="submit"
              style={{
                width: "130%",
                backgroundColor: "orange",
                height: "80%",
              }}
            >
              <i className="fas fa-paper-plane"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default MessageForm;
