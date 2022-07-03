import React from "react";
import ReactDOM from "react-dom";
import { Form } from "react-bootstrap";

const Popup = () => {
  const popupInner = {
    padding: "0.3rem",
    width: "7rem",
    textAlign: "center" as "center",
  };

  return (
    <>
      <div style={popupInner}>
        <Form>
          <label>ON|OFF</label>
          <Form.Check type="switch" />
        </Form>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
