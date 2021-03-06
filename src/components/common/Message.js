import styled from "styled-components";

export const Message = styled.div`
  width: 60%;
  margin: 7% auto 20px;
  border: 4px solid ${(p) => p.theme.comment};
  padding: 20px 40px;
  text-align: center;
  font-weight: 900;
  color: ${(p) => p.theme.white};
  border-radius: 100px;
  position: relative;

  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${(p) => p.theme.comment};
    border-bottom: 10px solid transparent;
    right: 50%;
    bottom: -23px;
  }

  &:after {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid transparent;
    right: 50%;
    bottom: -18px;
  }
`;
