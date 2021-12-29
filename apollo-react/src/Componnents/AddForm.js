import { React, Button } from "react";
import { Form, Container } from "react-bootstrap";
import { LOAD_COMPAGNIES } from "../Graphql/Query";
import { DELETTE_COMPAGNY } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";
export default function AddForm(name) {
  const value = name;

  return (
    <Container>
      <Form id="insertForm" method="post">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder={value.name} name="" />
        </Form.Group>
      </Form>
    </Container>
  );
}
