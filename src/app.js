import React, { Component } from "react"
import { createGlobalStyle } from 'styled-components'
import GlobalFonts from "./fonts.js"
import Header from './components/header'
import Home from "./components/pages/home"

let GlobalStyles = createGlobalStyle`
  body{
    margin    : 0;
    padding   : 0;
    overflow-x: hidden;
  }
  a{
    margin         : 0;
    padding        : 0;
    text-decoration: none;
    color          : inherit;
  }
`
class App extends Component {

  render() {
    return (
      <div className="App">
        <GlobalFonts></GlobalFonts>
        <GlobalStyles></GlobalStyles>
          <Header></Header>
          <Home></Home>
      </div>
    );
  }
}

export default App;