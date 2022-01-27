import styled from "styled-components";

export interface IPriceQuotes {
  ath_price: number;
  market_cap: number;
  percent_change_1h: number;
  percent_change_1y: number;
  percent_change_7d: number;
  percent_change_24h: number;
  percent_change_30d: number;
  percent_from_price_ath: number;
  price: number;
}

interface IPriceProps {
  coinId: string;
  usdQuotes?: IPriceQuotes;
}

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PriceHeader = styled.h2`
  text-align: center;
  margin-bottom: 5px;
`;

const PriceItem = styled.div`
  background-color: ${(props) => props.theme.componentColor};
  width: 100%;
  margin: 5px;
  border-radius: 10px;
  padding: 7px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  span {
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

function beforePrice(currentPrice: number, changeRate: number) {
  const rate = 100 / (changeRate + 100);
  return (rate * currentPrice).toLocaleString("ko-KR");
}

function Price({ coinId, usdQuotes }: IPriceProps) {
  return (
    <PriceContainer>
      <PriceHeader>{coinId}</PriceHeader>
      <PriceItem>
        <span>{"Current price is"}</span>
        <span>{`$${usdQuotes?.price.toLocaleString("ko-KR")}`}</span>
      </PriceItem>
      <PriceItem>
        <span>{"All time high price is "}</span>
        <span>{`$${usdQuotes?.ath_price.toLocaleString("ko-KR")}`}</span>
      </PriceItem>
      <PriceItem>
        <span>{"Price an hour ago is"} </span>
        <span>{`$${
          usdQuotes
            ? beforePrice(usdQuotes?.price, usdQuotes?.percent_change_1h)
            : "NAN"
        }`}</span>
      </PriceItem>
      <PriceItem>
        <span>{"Price a day ago is"} </span>
        <span>{`$${
          usdQuotes
            ? beforePrice(usdQuotes?.price, usdQuotes?.percent_change_24h)
            : "NAN"
        }`}</span>
      </PriceItem>
      <PriceItem>
        <span>{"Price a week ago is"} </span>
        <span>{`$${
          usdQuotes
            ? beforePrice(usdQuotes?.price, usdQuotes?.percent_change_7d)
            : "NAN"
        }`}</span>
      </PriceItem>
      <PriceItem>
        <span>{"Price a month ago is"} </span>
        <span>{`$${
          usdQuotes
            ? beforePrice(usdQuotes?.price, usdQuotes?.percent_change_30d)
            : "NAN"
        }`}</span>
      </PriceItem>
      <PriceItem>
        <span>{"Price a year ago is"} </span>
        <span>{`$${
          usdQuotes
            ? beforePrice(usdQuotes?.price, usdQuotes?.percent_change_1y)
            : "NAN"
        }`}</span>
      </PriceItem>
      <PriceItem>
        <span>{"Market Capital price is"}</span>
        <span>{`$${usdQuotes?.market_cap.toLocaleString("ko-KR")}`}</span>
      </PriceItem>
    </PriceContainer>
  );
}

export default Price;
