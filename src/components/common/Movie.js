import React from "react";
import Img from "react-image";
import styled from "styled-components";
import moment from "moment";

import { Info } from "./index";
import loading from "images/loading-png-gif.gif";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px auto;
  max-width: 200px;
  width: 100%;
`;

const Loading = styled.img`
  margin: auto;
`;

export function Movie({ title, release_date, poster_path, actorBirthday }) {
  return (
    <Wrapper>
      <Img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        loader={<Loading src={loading} height="300px" width="200px" />}
        alt={title}
        height="300px"
        width="200px"
      />
      <Info
        name={title}
        age={moment(release_date).diff(actorBirthday, "years")}
      />
    </Wrapper>
  );
}
