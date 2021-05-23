import React from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components";
const Card = ({ currentpeople, url }) => {
  return (
    <CardStyled>
      <TinderCard
        key={currentpeople.id}
        className={"swipe"}
        preventSwap={["up", "down"]}
        // onSwipe={(dir) => swipped(dir, currentpeople.name)}
        // onCardLeftScreen={() => outOffFrame(currentpeople.name)}
      >
        <div
          className="card"
          style={{
            backgroundImage: `url(${url})`,
          }}
        >
          <h1>{currentpeople.name}</h1>
        </div>
      </TinderCard>
    </CardStyled>
  );
};

export default Card;

const CardStyled = styled.div`
  .card {
    position: relative;
    /* width: 600px;
    max-width: 85vw; */
    width: clamp(24rem, 50vw, 38rem);
    padding: 20px;
    height: 55vh;
    border-radius: 10px;
    background-size: cover;
    background-position: top;
    box-shadow: 0 1px 8px 0 rgb(73 86 92 / 10%), 0 4px 6px 0 rgb(73 86 92 / 12%);
    display: flex;
    align-items: flex-end;
    color: white;
    margin-top: 5vh;
  }
  /* cards container */
  display: flex;
  justify-content: center;
  .swipe {
    position: absolute;
    /* transform: translateX(-50%); */
  }
`;
