import { InputGroup, FormControl, Button, Row, Col } from "react-bootstrap";
import React from "react";
import { useMutation } from "@apollo/client";
import Title from "./Title";
import { LOAD_COMPAGNIES } from "../Graphql/Query";
import { CREATE_COMPAGNY } from "../Graphql/Mutation";

export default function Header() {
  let input;
  const [addCompagny, { loading, error }] = useMutation(CREATE_COMPAGNY, {
    refetchQueries: [LOAD_COMPAGNIES],
  });

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div>
      <Row>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addCompagny({ variables: { name: input.value } });
            input.value = "";
          }}
        >
          <InputGroup>
            <Col sm={4}>
              <Title />
            </Col>
            <FormControl
              sm={3}
              ref={(node) => {
                input = node;
              }}
            />
            <Col sm={1}></Col>
            <Button type="submit" variant="success" sm={4}>
              add
            </Button>
          </InputGroup>
        </form>
      </Row>
    </div>
  );
}
