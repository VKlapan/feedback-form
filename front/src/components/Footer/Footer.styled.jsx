import styled from "@emotion/styled";
import bottomrightbgimage from "../../img/bottom_right_baloons.png";
import bottomleftbgimage from "../../img/bottom_left_baloon.png";
import inbgimage from "../../img/in.png";
import twbgimage from "../../img/tw.png";
import fbbgimage from "../../img/fb.png";
import ptbgimage from "../../img/pt.png";

export const FooterContainer = styled.div`
  background: #e5e5e5;
  background-image: url(${bottomrightbgimage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: right;
  width: 100%;
  height: 200px;
  margin: 0;
  display: flex;
  align-content: center;
  justify-content: left;
`;
export const FooterLogo = styled.div`
  background: #e5e5e5;
  background-image: url(${bottomleftbgimage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: left;
  width: 200px;
  height: 200px;
`;

export const SocialList = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const SocialItem = styled.li`
  margin-right: 24px;
`;

export const SocialButton = styled.button`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: 0;
  background: #e5e5e5;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  &.linkedin {
    background-image: url(${inbgimage});
  }
  &.twitter {
    background-image: url(${twbgimage});
  }
  &.facebook {
    background-image: url(${fbbgimage});
  }
  &.pinterest {
    background-image: url(${ptbgimage});
  }
`;
