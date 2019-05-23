import React, { Component } from "react"
import { createGlobalStyle, keyframes } from 'styled-components'
import GlobalFonts from "./fonts.js"
import Header from './components/header'
import Home from "./components/pages/home.js"
import Studio from "./components/pages/studio.js"
import Footer from "./components/footer"
import { 
  Route, 
  Switch, 
  BrowserRouter,
} from 'react-router-dom';
import { 
  CSSTransition, 
  TransitionGroup 
} from 'react-transition-group';


let slideIn = keyframes`
  from {
      transform: translateY(100vh);
      visibility: visible;
  }
  to {
      transform: translateY(0vh);
  }
`

let slideOut = keyframes`
  from {
      transform: translateY(0vh);
  }
  to {
      transform: translateY(-100vh);
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
    z-index: 10;
    animation-delay: 0s;
    animation: ${slideIn} 1s forwards;
  }
  &.page-exit{
    z-index: -10;
    animation: ${slideOut} 1.6s forwards ease-out;
  }

`
class App extends Component {

  render() {
    const supportsHistory = 'pushState' in window.history;
    return (
      <div className="App">
        <GlobalFonts></GlobalFonts>
        <GlobalStyles></GlobalStyles>
          <BrowserRouter forceRefresh={!supportsHistory}>
          <Header></Header>
          <Route
            render={({ location }) => {
              return (
                <>
                <TransitionGroup component={null}>
                  <CSSTransition timeout={1500} classNames="page" key={location.key}>
                    <Switch location={location}>
                      <Route exact path="/" component={Home}/>
                      <Route path="/studio" component={Studio}/>
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>   
                </>
              )
            }}/>
          </BrowserRouter>
          {/* <Studio></Studio> */}
      </div>
    );
  }
}

export default App;