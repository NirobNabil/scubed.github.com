import React, { Component } from "react";
import { createGlobalStyle, keyframes } from "styled-components";
import ScrollReveal from "scrollreveal";
import GlobalFonts from "./fonts.js";
import Header from "./components/header";
import Home from "./components/pages/home.js";
import Studio from "./components/pages/studio.js";
import Projects from "./components/pages/projects.js";
import ProjectPage from "./components/pages/project.js";
import Contact from "./components/pages/Contact.js";
import Footer from "./components/footer";
import landing1 from "./assets/landing2.png";
import landing2 from "./assets/landing1.jpg";
import landing3 from "./assets/dummy.jpg";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

let slideIn = keyframes`
  from {
    transform: translateY(100vh);
  }
  to {
    transform: translateY(0vh);
  }
`;

let slideOut = keyframes`
  from {
      transform: translateY(0vh);
  }
  to {
      transform: translateY(-100vh);
  }
`;

let fadeToBlack = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

let GlobalStyles = createGlobalStyle`
  body{
    margin    : 0;
    padding   : 0;
    overflow-x: hidden;
  }
  h1, h2, h3, h4, a{
    margin         : 0;
    padding        : 0;
    text-decoration: none;
    color          : inherit;
  }

  //custom scrollbar
  ::-webkit-scrollbar{
    display: none;
    width: .5vw;
    background: transparent;
  }
  ::-webkit-scrollbar-track{
    background: rgba(0,0,0,.1)
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 1vw;
    background: rgba(0,0,0,.4);
  }

  &.page-enter{
    position: absolute;
    z-index: 1 !important;
    animation-delay: 0s;
    animation: ${slideIn} 1s forwards cubic-bezier(.77,0,.36,1);
  }
  &.page-exit{
    position: absolute;
    z-index: -100 !important;
    animation: ${slideOut} 1.6s forwards ease-in-out;
    &:after{
      animation: ${fadeToBlack} 1.6s forwards ease-out;
      content: '';
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
      z-index: 50;
      position: absolute;
      background: black;
      opacity: 0;
    }
  }

`;

class App extends Component {
  constructor() {
    super();
    this.supportsHistory = "pushState" in window.history;
    this.state = {
      currentPath: null
    };
    this.onRouterChange = (prevState, nextState) => {
      console.log("prevstate");
      console.log(prevState);
    };
  }
  render() {
    return (
      <div className="App">
        <GlobalFonts />
        <GlobalStyles />
        <BrowserRouter forceRefresh={!this.supportsHistory}>
          <Header />
          <Route
            render={({ location }) => {
              return (
                <>
                  <TransitionGroup component={null}>
                    <CSSTransition
                      timeout={1500}
                      classNames="page"
                      key={location.key}
                    >
                      <Switch location={location}>
                        <Route
                          exact
                          path="/"
                          render={({ match }) => {
                            return <Home match={match} />;
                          }}
                        />
                        <Route path="/Tech" render={() => <Studio />} />
                        <Route
                          exact
                          path="/Projects"
                          render={({ match }) => {
                            console.log(match);
                            return <Projects match={match} />;
                          }}
                        />
                        <Route
                          exact
                          path={`/Projects/:name`}
                          render={({ match }) => {
                            return <ProjectPage match={match.params.name} />;
                          }}
                        />
                        <Route
                          exact
                          path={`/Contact`}
                          render={({ match }) => {
                            return <Contact />;
                          }}
                        />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </>
              );
            }}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;