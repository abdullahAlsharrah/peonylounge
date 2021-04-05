import styled, { createGlobalStyle } from "styled-components";

export const MainConrainer = styled.div`
  height: 87%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-right: 20px;
`;
export const RecieptStyle = styled.div`
  margin-top: -10;
  width: 30%;
  border-width: 2;
  border-color: transparent;
  margin-bottom: 33;
`;

export const ServicesStyle = styled.div`
  width: 70%;
  margin-left: -5;
  background-color: transparent;
  border-width: 2;
  border-color: transparent;
  margin-bottom: 5;
`;

export const ReceiptContainer = styled.div`
  padding: 10;
  padding-top: 20;
  background-color: white;
  // borderColor: "gray";
  // borderWidth: 2;
  height: 100%;
  margin: 20px;
  /* shadow: "black";
    shadow-offset: {
      width: 0;
      height: 0;
    };
    shadowOpacity: 0.8;
    shadowRadius: 3.25;

    elevation: 5; */
  button {
    font-size: 20;
    bottom: 0;
    // left: 1;
    width: 100%;
    color: white;
    background-color: #2a9df4;
    align-content: center;
    align-items: center;
    justify-content: center;
    border: 0;
    height: 70px;
  }
`;

export const FlexContainer = styled.div`
  border-bottom-width: 1;
  display: flex;
  flex-direction: row;
  margin-bottom: 10;
  margin-top: 20;
  align-items: center;

  input {
    text-align: left;
    font-size: 15;
    width: 50%;
    height: 20px;
  }
`;

export const RecieptServiceTitle = styled.p`
  text-align: left;
  font-size: 16;
  color: #555;
  font-weight: 700;
  width: 60%;
`;
export const RecieptPriceTitle = styled.p`
  text-align: right;
  font-size: 15;
  color: #555;
  font-weight: 700;
  width: 30%;
`;
export const RecieptItemContainer = styled.div`
  display: flex;
  flex-direction: "row";
  margin: 20px 4px 20px 0px;
`;

export const RecieptItemName = styled.p`
  font-size: 15;
  text-align: left;
  font-weight: 600;
  width: 60%;
`;

export const RecieptItemPrice = styled.p`
  font-size: 15;
  text-align: right;
  font-weight: 600;
  width: 30%;
`;
export const ServiceItemName = styled.div`
  p {
    font-size: 20;
    font-weight: 600;
    position: relative;
    text-align: center;
    top: 40%;
    bottom: 60%;
  }
  height: 100px;
  width: 159px;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: 2px;
  // marginBottom: 50
  background-color: #c39e81;
`;
export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 10;
`;
