import styled from "styled-components";
import { IconButton, ForumIcon, PersonIcon } from "./index";
import { tinderLogo } from "../assets/index";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <HeaderStyle className="navbar">
      {backButton ? (
        <IconButton
          onClick={() => {
            history.replace(backButton);
          }}
        >
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}

      <Link exact to="/">
        <img src={tinderLogo} className="header__logo" alt="" />
      </Link>

      <Link exact to="/chat">
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 2em);
  padding: 1em;
  border-bottom: 1px solid #f9f9f9f9;
  .header__logo {
    object-fit: contain;
    height: 40px;
  }
  .header__icon {
    padding: 10px;
  }
`;
