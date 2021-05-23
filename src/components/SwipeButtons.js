import React from "react";
import styled from "styled-components";
// import { swipped } from "../Services/UserInterraction";
import { IconButton } from "@material-ui/core";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
const SwipeButtons = () => {
  return (
    <SwipeButtonsStyled className="SwpieButtons">
      <IconButton
        // onClick={swipped}
        fontSize="large"
        className="swipeButtons__repeat"
      >
        <ReplayIcon />
      </IconButton>
      <IconButton
        // onClick={swipped}
        fontSize="large"
        className="swipeButtons__left"
      >
        <CloseIcon />
      </IconButton>
      <IconButton
        // onClick={swipped}
        fontSize="large"
        className="swipeButtons__star"
      >
        <StarRateIcon />
      </IconButton>
      <IconButton
        // onClick={swipped}
        fontSize="large"
        className="swipeButtons__right"
      >
        <FavoriteIcon />
      </IconButton>
      <IconButton
        // onClick={swipped}
        fontSize="large"
        className="swipeButtons__lightning"
      >
        <FlashOnIcon />
      </IconButton>
    </SwipeButtonsStyled>
  );
};

export default SwipeButtons;

const SwipeButtonsStyled = styled.div`
  justify-content: space-evenly;
  flex: 1;
  display: flex;
  align-items: flex-end;
  margin-bottom: 10vh;
  width: 600px;
  max-width: 85vw;
  .MuiSvgIcon-root {
    height: 2.5rem;
    width: 2.5rem;
  }
  .MuiIconButton-root {
    background-color: white;
    box-shadow: 0 1px 8px 0 rgb(73 86 92 / 10%), 0 4px 6px 0 rgb(73 86 92 / 12%);
    font-size: 40px;
  }
  .swipeButtons__repeat {
    padding: 1vw;
    color: #f5b748;
  }
  .swipeButtons__left {
    padding: 1vw;
    color: #ec5e6f;
  }
  .swipeButtons__star {
    padding: 1vw;
    color: #62b4f9;
  }
  .swipeButtons__right {
    padding: 1vw;
    color: #76e2b3;
  }
  .swipeButtons__lightning {
    padding: 1vw;
    color: #915dd1;
  }
`;
