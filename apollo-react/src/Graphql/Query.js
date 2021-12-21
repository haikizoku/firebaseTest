import { gql, useMutation } from "@apollo/client";

export const CREATE_COMPAGNY = gql`
  mutation AddTodo($name: String!) {
    addCompagny(name: $name)
  }
`;
