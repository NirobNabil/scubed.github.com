import React, { Component } from "react"
import { createGlobalStyle, keyframes } from 'styled-components'
import ScrollReveal from 'scrollreveal'
import GlobalFonts from "./fonts.js"
import Header from './components/header'
import Home from "./components/pages/home.js"
import Studio from "./components/pages/studio.js"
import Projects from "./components/pages/projects.js"
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
  constructor(){
    super()
    this.state = {
        'sr': null,
        'uri': null
    }
    this.update = function(){
      console.log("appupdate")
      this.state.sr.reveal('.landing-text', {delay: 400});
    }.bind(this)
  }
  componentDidMount(){
    const defaults = {
      delay: 100,
      duration: 600,
      distance: '120px',
      container: document.querySelector('.home-container'),
      origin: 'bottom',
      reset: false,
    }
    var sreveal = ScrollReveal(defaults);
    sreveal.debug = true; 
    window.scrollreveal = sreveal
    this.setState({ sr: sreveal });

  }
  componentDidUpdate(){
    //console.log("upadte");
    //this.state.sr.clean();
  }
  render() {
    const supportsHistory = 'pushState' in window.history;
    return (
      <div className="App">
        <GlobalFonts></GlobalFonts>
        <GlobalStyles></GlobalStyles>
          <BrowserRouter onChange={this.update} forceRefresh={!supportsHistory}>
          <Header></Header>
          <Route
            render={({ location }) => {
              //this.setState({uri: location})
              return (
                <>
                <TransitionGroup component={null}>
                  <CSSTransition timeout={1500} classNames="page" key={location.key}>
                    <Switch location={location}>
                      <Route exact path="/" render={() => <Home sr={this.state.sr}></Home>}/>
                      <Route path="/studio" render={() => <Studio sr={this.state.sr}></Studio>}/>
                      <Route path="/Projects" render={() => <Projects sr={this.state.sr}></Projects>}/>
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