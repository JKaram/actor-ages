import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px 0;

  background-color: #393e46;
  color: #eeeeee;
  font-weight: bold;
`;

const Information = styled.div`
  font-size: 1.5em;
  margin: 2px;
  color: #eeeeee;
`;

export function Info({ name, age }) {
  return (
    <Footer>
      <Information>{name}</Information>
      <Information>{age}</Information>
    </Footer>
  );
}
