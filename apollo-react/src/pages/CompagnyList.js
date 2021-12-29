import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import ListGroup from "react-bootstrap/ListGroup";
import { LOAD_COMPAGNIES } from "../Graphql/Query";
import { Button, Modal } from "react-bootstrap";
import AddForm from "../Componnents/AddForm";
import { DELETTE_COMPAGNY, UPDATE_COMPAGNY } from "../Graphql/Mutation";
export default function CompagnyList() {
  const { error, loading, data } = useQuery(LOAD_COMPAGNIES);

  const [deletteCompagny] = useMutation(DELETTE_COMPAGNY, {
    refetchQueries: [LOAD_COMPAGNIES],
  });

  const [updateCompagny] = useMutation(UPDATE_COMPAGNY, {
    refetchQueries: [LOAD_COMPAGNIES],
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const handleDelette = (e) => {
    let idCompagny = e;
    deletteCompagny({ variables: { id: idCompagny } });
    setShow(false);
  };

  const handleUpdate = (e) => {
    let idCompagny = e.id;
    let nameCompagny = e.name;
    console.log(idCompagny + " " + nameCompagny);
    updateCompagny({
      variables: { id: idCompagny, name: "123" },
    });
    setShow(false);
  };

  if (loading) return <div>spiner....</div>;
  if (error) return <div>something went wrong </div>;

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      {data.getCompagnies.map((compagny) => {
        return (
          <ListGroup key={compagny.id}>
            <ul class="list-group cProductsList">
              <li class="list-group-item d-flex">
                <p class="p-0 m-0 flex-grow-1">{compagny.name}</p>

                <Button class="btn-success" onClick={handleShow}>
                  Edit
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Update Compagny</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <AddForm name={compagny.name} />
                  </Modal.Body>
                  <Modal.Footer>
                    <form>
                      <Button
                        variant="secondary"
                        onClick={(e) => handleDelette(compagny.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="primary"
                        onClick={(e) => handleUpdate(compagny)}
                      >
                        Save Changes
                      </Button>
                    </form>
                  </Modal.Footer>
                </Modal>
              </li>
            </ul>
          </ListGroup>
        );
      })}
    </div>
  );
}
