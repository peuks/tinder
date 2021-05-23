import styled from "styled-components";
import { Chat } from "./index";

const Chats = () => {
  return (
    <ChatsStyle className="chats">
      <Chat
        key="1"
        name="Mark"
        message="Yo Sophie"
        timestamp="90 "
        profilePicture="https://source.unsplash.com/1600x900/?sexy,girl,women"
      />
      <Chat
        key="2"
        name="Mark"
        message="Yo Sophie"
        timestamp="18 "
        profilePicture="https://source.unsplash.com/1600x900/?sexy,girl,women"
      />
      <Chat
        key="3"
        name="Jean"
        message="Valjean"
        timestamp="45 "
        profilePicture="https://source.unsplash.com/1600x900/?sexy,girl,women"
      />
      <Chat
        key="4"
        name="Paul"
        message="Bismuth"
        timestamp="56 "
        profilePicture="https://source.unsplash.com/1600x900/?sexy,girl,women"
      />
      <Chat
        key="5"
        name="Aline"
        message="Carusso"
        timestamp="78"
        profilePicture="https://source.unsplash.com/1600x900/?sexy,girl,women"
      />
    </ChatsStyle>
  );
};

export default Chats;

const ChatsStyle = styled.div`
  width: 100%;
`;
