import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./modallogin.css";

function LoginButton(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="personal">
      <button type="button" className="btnlogin" onClick={handleShow}>
        Вход
      </button>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Авторизация</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="fromBasicEmail">
              <Form.Label>Электронная почта</Form.Label>
              <Form.Control
                type="email"
                placeholder="E-mail"
                required="email"
              />
            </Form.Group>
            <Form.Group controlId="fromBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <form></form>

        <div className="centerbtn">
          <input
            type="submit"
            className="btnlogin"
            value="Вход"
            onClick={handleClose}
          />
          <br></br>
          <br></br>
          <Link to="/forgot_password=yes" onClick={handleClose}>
            Восстановить пароль
          </Link>
          <br></br>
          <Link to="/register=yes" onClick={handleClose}>
            Регистрация
          </Link>
        </div>
      </Modal>
    </div>
  );
}

export default LoginButton;
