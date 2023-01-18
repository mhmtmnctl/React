import React from "react";
import { Form, InputGroup } from "react-bootstrap";
const Content = () => {
  return (
    <div className="p-5">
      <InputGroup className="mb-3">
        <Form.Control />
        <Form.Select>
          <option value="1">USD</option>
          <option value="2">EUR</option>
        </Form.Select>
        <InputGroup.Text id="basic-addon1">Result:</InputGroup.Text>
      </InputGroup>
    </div>
  );
};
export default Content;
