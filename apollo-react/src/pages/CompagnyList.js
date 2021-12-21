import React from "react";
import { useQuery } from "@apollo/client";
import ListGroup from "react-bootstrap/ListGroup";
import { LOAD_COMPAGNIES } from "../Graphql/Mutation";

export default function CompagnyList() {
  const { error, loading, data } = useQuery(LOAD_COMPAGNIES);

  if (loading) return <div>spiner....</div>;
  if (error) return <div>something went wrong </div>;

  console.log(error, loading, data);
  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      {data.getCompagnies.map((compagny) => {
        return (
          <ListGroup key={compagny.id}>
            <ListGroup.Item>{compagny.name}</ListGroup.Item>
          </ListGroup>
        );
      })}
    </div>
  );
}
