import ListGroup from "react-bootstrap/ListGroup";
export default function ListItem() {
  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <ul class="list-group Comapgnies">
        <li class="list-group-item d-flex">
          <p class="p-0 m-0 flex-grow-1">Google</p>
        </li>
        <li class="list-group-item d-flex">
          <p class="p-0 m-0 flex-grow-1">AWS</p>
        </li>
        <li class="list-group-item d-flex">
          <p class="p-0 m-0 flex-grow-1">First item</p>
        </li>
        <li class="list-group-item d-flex">
          <p class="p-0 m-0 flex-grow-1">Second item</p>
        </li>
      </ul>
    </div>
  );
}
