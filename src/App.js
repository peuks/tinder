import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Chats,
  GlobalStyle,
  Header,
  SwipeButtons,
  TinderCards,
  Messages,
} from "./components/index";
const App = () => {
  return (
    <div className="app">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <Messages />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
