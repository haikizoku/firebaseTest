import { gql } from "@apollo/client";

export const LOAD_COMPAGNIES = gql`
  query {
    compagnies {
      id
      name
    }
  }
`;
