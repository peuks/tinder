import { useState } from "react";
import styled from "styled-components";
import { data, Card } from "./index";

const TinderCards = () => {
  const [peoples, setPeoples] = useState(data());
  return (
    <CardsStyle className="cards">
      {peoples.map((people) => {
        return (
          <Card
            key={people.id}
            currentpeople={people}
            url={people.url[Object.keys(people.url)[0]]}
          ></Card>
        );
      })}
    </CardsStyle>
  );
};

export default TinderCards;

const CardsStyle = styled.div`
  height: calc(55vh + 2 * 20px);
  width: 100%;
`;
