import { useState } from "react";
import styled from "styled-components";
import { Avatar } from "./index";

const Messages = () => {
  const [messages, setmessages] = useState([
    {
      id: 1,
      name: "Ellen",
      image: "http://unsplash.it/640/640?gravity=south",
      message: "You Sexy Boy 💓",
    },
    {
      id: 2,
      name: "David",
      image: "http://unsplash.it/640/640?gravity=flowers",
      message: "Hey Babe 💩",
    },
    {
      id: 1,
      name: "Ellen",
      image: "http://unsplash.it/640/640?gravity=south",
      message: "You Sexy Boy 💓",
    },
  ]);
  return (
    <MessagesStyle className="messages">
      <p className="messages__timestamp">YOU MATCHED WITH ALINE ON 10/08/20</p>
      {messages.map((message) => {
        return (
          <div
            className={`messages__item ${
              message.id === 2 ? "messages__item--owner" : ""
            }`}
          >
            {console.log(message.image)}
            <Avatar
              className="messages__image"
              alt={message.name}
              src={message.image}
            />
            <p className="messages__content">coucou {message.message}</p>
          </div>
        );
      })}
    </MessagesStyle>
  );
};

export default Messages;

const MessagesStyle = styled.div`
  width: 100%;
  .messages__timestamp {
    color: gray;
    padding: 1.25em;
    text-align: center;
  }

  .messages__content {
    background-color: #d3d3d3;
    padding: 15px;
    border-radius: 20px;
    margin-left: 1em;
    color: #1c0118;
    box-shadow: 0 1px 2px rgb(0 0 0 / 10%), 0 -1px rgb(0 0 0 / 10%) inset&;
  }

  .messages__item {
    display: flex;
    align-items: center;
    padding: 1.25em;
    &--owner {
      /* Switch text message to the right */
      flex-direction: column;
      align-items: flex-end;
      .messages__image {
        display: none;
      }
      .messages__content {
        background-color: #29b3cd;
        color: #fff8f0;
      }
    }
  }
`;
