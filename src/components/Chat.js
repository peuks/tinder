import styled from "styled-components";
import { Avatar } from "./index";
import { Link } from "react-router-dom";
const Chat = ({ name, message, timestamp, profilePicture }) => {
  return (
    <ChatStyle className="chat">
      <Avatar className="chat__image" alt={name} src={profilePicture} />
      <div className="chat__details">
        <Link to={`/chat/${name}`}>
          <h2>{name}</h2>
        </Link>
        <p>{message}</p>
      </div>
      <p className="chat__timestamp">{timestamp}</p>
    </ChatStyle>
  );
};

export default Chat;

const ChatStyle = styled.div`
  display: flex;
  align-items: center;
  padding: 0 2em;
  justify-content: space-between;
  height: 4.375rem;
  border-bottom: 1px solid #fafafa;

  .chat__details {
    flex: 1;
    padding-left: 1.25em;
  }

  .chat__details {
    p {
      padding-left: 0.5rem;
      font-style: italic;
      font-size: 0.85rem;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }
  .chat__timestamp {
    color: lightgray;
  }
`;
