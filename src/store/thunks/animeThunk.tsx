import { gql } from "@apollo/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../GraphQl/clients";

const GET_ANIME = gql`
  query {
    Page {
      media {
        siteUrl
        title {
          english
          native
        }
        description
      }
    }
  }
`;

export const getAllAnimes = createAsyncThunk("anime/getAllAnimes", async () => {
  const response = await client.query({
    query: GET_ANIME,
  });

  return response.data;
});
