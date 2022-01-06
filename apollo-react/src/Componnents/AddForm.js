import { React, Button, useState } from "react";

export default function AddForm(name) {
  const value = name;
  const [setShow] = useState(false);

  const handleShow = () => setShow(true);
  return (
    <div>
      <li class="list-group-item d-flex">
        <p class="p-0 m-0 flex-grow-1">{value.name} </p>
        <Button variant="success" onClick={handleShow}>
          Edit
        </Button>
      </li>
    </div>
  );
}
