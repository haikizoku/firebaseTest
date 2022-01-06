import { useQuery } from "@apollo/client";
import ListGroup from "react-bootstrap/ListGroup";
import { LOAD_COMPAGNIES } from "../Graphql/Query";
import UsingHookModal from "../Componnents/modal";

export default function CompagnyList(props) {
  const { error, loading, data } = useQuery(LOAD_COMPAGNIES);

  if (loading) return <div>Loading....</div>;
  if (error) return <div>something went wrong </div>;

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      {data.getCompagnies.map((compagny) => {
        return (
          <ListGroup key={compagny.name}>
            <ul className="list-group cProductsList">
              <li className="list-group-item d-flex" key={compagny.id}>
                <p className="p-0 m-0 flex-grow-1">{compagny.name} </p>
                <UsingHookModal item={compagny} />
              </li>
            </ul>
          </ListGroup>
        );
      })}
    </div>
  );
}
