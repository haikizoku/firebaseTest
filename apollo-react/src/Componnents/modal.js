import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import { DELETTE_COMPAGNY, UPDATE_COMPAGNY } from "../Graphql/Mutation";
import { LOAD_COMPAGNIES } from "../Graphql/Query";
import { useMutation } from "@apollo/client";
export default function UsingHookModal(props) {
  const [modalShow, setShow] = useState(false);
  let [name, setName] = useState("");
  let compagny = props.item;
  const [deletteCompagny] = useMutation(DELETTE_COMPAGNY, {
    refetchQueries: [LOAD_COMPAGNIES],
  });
  const [updateCompagny] = useMutation(UPDATE_COMPAGNY, {
    refetchQueries: [LOAD_COMPAGNIES],
  });
  const handleUpdate = (e) => {
    updateCompagny({
      variables: { id: e, name: name },
    });
    setShow(false);
  };
  const handleDelette = (e) => {
    let idCompagny = e;
    deletteCompagny({ variables: { id: idCompagny } });
    setShow(false);
  };

  return (
    <div>
      <Button onClick={() => setShow(true)}>Edit</Button>{" "}
      <Modal
        size="sm"
        show={modalShow}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">Compagny</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <input
            type="text"
            value={name}
            placeholder={compagny.name}
            onChange={(e) => setName(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => handleDelette(compagny.id)}>
            DELETE
          </Button>
          <Button
            variant="success"
            onClick={(e) => handleUpdate(compagny.id, name)}
          >
            SAVE
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
