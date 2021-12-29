import { gql } from "@apollo/client";

export const CREATE_COMPAGNY = gql`
  mutation AddTodo($name: String!) {
    addCompagny(name: $name)
  }
`;

export const DELETTE_COMPAGNY = gql`
  mutation deletteCompagny($id: String) {
    deletteCompagny(id: $id)
  }
`;

export const UPDATE_COMPAGNY = gql`
  mutation updateCompagny($id: String, $name: String) {
    updateCompagny(id: $id, name: $name)
  }
`;
