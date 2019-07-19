import React, { Component } from "react";
import Scrollbar from 'smooth-scrollbar';
class smoothScrolling extends Component{

  render() {
    return (
      <script src="dist/smooth-scrollbar.js"></script>

<script>
  var Scrollbar = window.Scrollbar;

  Scrollbar.init(document.querySelector('#my-scrollbar'), options);
</script>
    )
  }

  }


  export default smoothScrolling;