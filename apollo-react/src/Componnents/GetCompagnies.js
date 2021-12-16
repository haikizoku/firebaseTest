import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_COMPAGNIES } from "../GraphQL/Queries";
import ListItem from "./lisItem";
function GetCompagnies() {
  const { error, loading, data } = useQuery(LOAD_COMPAGNIES);
  const [compagnies, setCompagnies] = useState([]);
  useEffect(() => {
    if (data) {
      setCompagnies(data.compagnies);
      console.log(data.compagnies);
    }
  }, [data]);

  return (
    <div>
      {" "}
      {compagnies.map((val) => {
        return <h1> {val.name}</h1>;
      })}
    </div>
  );
}

export default GetCompagnies;
