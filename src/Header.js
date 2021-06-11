import React, { Component } from 'react';
import './Header.css'; // imports header cascading style sheet

class Header extends Component {
  render() {
    // Creates a prop for style with an key of width and background color
    const style = {
      width: this.props.width,
      backgroundColor: this.props.backColor
    }

    // Returns a header to render
    return (
        <header style={style} className="Header-main">
        </header>

    );
  }
}

export default Header;


//document.querySelector("header").style.backgroundColor = "red"
