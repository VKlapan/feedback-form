import styled from "@emotion/styled";
import mainbgimage from "../img/map.png";
import topbgimage from "../img/yellow_top_baloon.png";

export const ContactsContainer = styled.div`
  background: #e5e5e5;
  background-image: url(${mainbgimage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: right;
  width: 100%;
  height: 100vh;
  text-align: left;
  margin: 0;
`;

export const ContactsBlock = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`;

export const ContactsHeader = styled.div`
  background-image: url(${topbgimage});
  background-size: 100px;
  background-repeat: no-repeat;
  background-position-x: left;
  height: 100px;
`;
