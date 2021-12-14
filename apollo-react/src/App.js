import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import "./App.css";
import Title from "./Componnents/title";
import ListItem from "./Componnents/lisItem";

export default function App() {
  return (
    <div
      class="container"
      style={{ display: "block", width: 700, padding: 50 }}
    >
      <div>
        <Title />
        <ListItem />
      </div>
    </div>
  );
}
