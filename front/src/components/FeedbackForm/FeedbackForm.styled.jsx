import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: top;
  max-width: 575px;
  height: 563px;
  margin-left: 80px;
`;

export const FormTitle = styled.p`
  font-family: "Apercu Arabic Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  /* or 52px */
  max-width: 497px;
  height: 33px;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;

  color: #3e3e3e;
`;

export const InputField = styled.input`
  background: transparent;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  font-family: "Apercu Arabic Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 180%;
  /* or 32px */

  max-width: 497px;
  height: 33px;

  margin-bottom: 8px;

  color: #2d2d2d;

  padding: 30px;
`;

export const SubmitButton = styled.button`
  width: 218px;
  height: 73px;

  background: #fad34f;
  border: 0px;
  border-radius: 500px;
  cursor: pointer;

  font-family: "Apercu Arabic Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  color: #ffffff;
`;
