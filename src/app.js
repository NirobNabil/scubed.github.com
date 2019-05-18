import React, { Component } from "react"
import Header from './components/header'
import { createGlobalStyle } from 'styled-components'
import paths from "./paths"
import code from './assets/fonts/CODE_Bold.otf'


const GlobalStyle = createGlobalStyle`
  body{
    display: none
  }
  @font-face{
    font-family: CODE_bold;
    src: url(${code}) format('otf');
  }
  @font-face{
    font-family: CODE_regular;
    src: url(${ props => props.fontsPath }/CODE%20light.otf) format('otf');
  }
  @font-face{
    font-family: Neoteric_bold;
    src: url(${ props => props.fontsPath }/NEOTERIC_bold.ttf);
  }
  @font-face{
    font-family: Neoteric_regular;
    src: url(${ props => props.fontsPath }/NEOTERIC_regular.ttf);
  }
  @font-face{
    font-family: Rock_regular;
    src: url(${ props => props.fontsPath }/ROCK.TTF);
  }
  @font-face{
    font-family: Rock_bold;
    src: url(${ props => props.fontsPath }/rockb.ttf);
  }
  @font-face{
    font-family: Dosis_bold;
    src: url("${ props => props.fontsPath }/dosis_family/Dosis-bold.otf")
  }
  @font-face{
    font-family: Dosis_ExtraBold;
    src: url("${ props => props.fontsPath }/dosis_family/Dosis-ExtraBold.otf")
  }
  @font-face{
    font-family: quicksand_light;
    src: url("${ props => props.fontsPath }/Quicksand/Quicksand-Light.ttf")
  }
  @font-face{
    font-family: quicksand_regular;
    src: url("${ props => props.fontsPath }/Quicksand/Quicksand-Regular.ttf")
  }
  @font-face{
    font-family: quicksand_bold;
    src: url("${ props => props.fontsPath }/Quicksand/Quicksand-Bold.ttf")
  }
  @font-face{
    font-family: quicksand_medium;
    src: url("${ props => props.fontsPath }/Quicksand/Quicksand-Medium.ttf")
  }
  @font-face{
    font-family: raleway_thin;
    src: url("${ props => props.fontsPath }/Raleway/Raleway-Thin.ttf")
  }
  @font-face{
    font-family: raleway_regular;
    src: url("${ props => props.fontsPath }/Raleway/Raleway-regular.ttf")
  }
  @font-face{
    font-family: raleway_light;
    src: url("${ props => props.fontsPath }/Raleway/Raleway-Light.ttf")
  }
  @font-face{
    font-family: raleway_medium;
    src: url("${ props => props.fontsPath }/Raleway/Raleway-Medium.ttf")
  }
  @font-face{
    font-family: raleway_semibold;
    src: url("${ props => props.fontsPath }/Raleway/Raleway-SemiBold.ttf")
  }
  @font-face{
    font-family: raleway_black;
    src: url("${ props => props.fontsPath }/Raleway/Raleway-black.ttf")
  }
  @font-face{
    font-family: borda;
    src: url("${ props => props.fontsPath }/Borda/Borda.ttf")
  }
  @font-face{
    font-family: borda_medium;
    src: url("${ props => props.fontsPath }/Borda/Borda_Medium.ttf")
  }
  @font-face{
    font-family: borda_light;
    src: url("${ props => props.fontsPath }/Borda/Borda_Light.ttf")
  }
  @font-face{
    font-family: maison;
    src: url("${ props => props.fontsPath }/maison-neue-mono.ttf");
  }
  @font-face{
    font-family: rezo_zero;
    src: url("${ props => props.fontsPath }/rz-regular.ttf")
  }

`
console.log(GlobalStyle.toString())
class App extends Component {



  render() {
    return (
      <div className="App">
        <GlobalStyle fontsPath={paths.fonts}/>
          <Header></Header>
      </div>
    );
  }
}

export default App;