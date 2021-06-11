//  Import is used to import into the App component
import React, { Component } from 'react';
import './App.css'; // imports cascading style sheet for app
import Header from './Header'; // imports header component
import SectionMain from './SectionMain'; // imports main section component
import Aside from './Aside'; // imports aside component
import Footer from './Footer'; // imports footer component

// Renders out JSX for the App and returns it to the browser
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header backColor="green" width="50%"></Header>
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
