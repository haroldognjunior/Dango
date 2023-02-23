import styled from 'styled-components';

// Checkout style

export const CheckOutBox = styled.div`
  background-color: #0f52ba;
  position: absolute;
  width: 486px;
  height: 1024px;
  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  right: 0;
  z-index: 999;

  & svg {
    cursor: pointer;
  }

  @media only screen and (max-width: 482px) {
    width: 100vw;
    max-width: 482px;
    height: 100vh;
  }
`;

export const BoxCart = styled.div`
  padding: 36px 22px 0 47px;
  @media only screen and (max-width: 482px) {
    padding: 36px 10px 0 10px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckOutTitle = styled.div`
  color: #ffffff;
  font-size: 27px;
  font-family: 'Montserrat 600', sans-serif;
  font-weight: 700;
  width: 180px;
  line-height: 33px;
  margin-bottom: 70px;
  @media only screen and (max-width: 482px) {
    max-width: 120px;
  }
`;

export const CheckOutCard = styled.div`
  color: #2c2c2c;
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  width: 379px;
  height: 95px;
  margin-bottom: 24px;
  @media only screen and (max-width: 482px) {
    max-width: 425px;
    width: 100%;
  }
`;

export const CheckOutCardClose = styled.div`
  position: absolute;
  right: 54px;
  margin-top: -15px;
  @media only screen and (max-width: 482px) {
    right: 5px;
  }
  & svg {
    width: 18px;
  }
`;

export const CheckOutCardDetails = styled.div`
  display: flex;
  padding: 19px 10px 19px 23px;
  font-family: 'Montserrat 300', sans-serif;
  align-items: center;

  & h1 {
    margin: 0;
    margin-left: 5px;
    font-size: 13px;
    font-family: 'Montserrat 300', sans-serif;
    font-weight: 400;
    width: 113px;
    height: 33px;
  }

  & h4 {
    font-family: 'Montserrat 600', sans-serif;
    font-weight: 700;
    font-size: 14px;
  }
  @media only screen and (max-width: 482px) {
    padding: 19px 10px 19px 10px;
  }
`;

export const CheckOutCardAmount = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 9px;
  width: 50px;
  margin-right: 40px;

  & h2 {
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 5px;
    line-height: 6px;
    color: #000000;
    margin-bottom: 4px;
  }
`;

export const CounterBox = styled.div`
  background: #ffffff;
  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 19px;
  & h3 {
    margin: 0;
    font-weight: 400;
    font-size: 8px;
  }
  & svg {
    margin: 0 4px 0 4px;
  }
`;

export const CounterButton = styled.div`
  font-family: 'Montserrat 300', sans-serif;
  font-weight: 400;
  & h5 {
    font-size: 12px;
    cursor: pointer;
  }
  & h6 {
    font-size: 8px;
    cursor: pointer;
  }
`;

export const CheckOutButton = styled.div`
  background: #000000;
  width: 486px;
  height: 97px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  cursor: pointer;

  & h1 {
    margin: 0;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: #ffffff;
    font-family: 'Montserrat 600', sans-serif;
  }
  @media only screen and (max-width: 482px) {
    max-width: 100%;
  }
`;

export const CheckOutTotal = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 28px;
  color: #ffffff;
  font-family: 'Montserrat 600', sans-serif;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 139px;
  padding: 0 63px 0 47px;
  @media only screen and (max-width: 482px) {
    padding: 0 50px 0 40px;
  }
  & .total {
    margin-right: 204px;
    @media only screen and (max-width: 482px) {
      margin-right: 50px;
    }
  }
`;
