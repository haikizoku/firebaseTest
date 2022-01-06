import { React, Button, useState } from "react";
import { Container } from "react-bootstrap";

export default function AddForm(name) {
  const value = name;
  const [setShow] = useState(false);

  const handleShow = () => setShow(true);
  return (
    <Container>
      <li class="list-group-item d-flex">
        <p class="p-0 m-0 flex-grow-1">{value.name} </p>
        <Button class="btn-success" onClick={handleShow}>
          Edit
        </Button>
      </li>
    </Container>
  );
}
