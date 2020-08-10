import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Nav from './components/navbar';
import Hero from './components/hero';
import IconBox from './components/icon-box';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <Hero></Hero>
        <section className="features-section">
          <IconBox
            img="/images/icon1.png"
            title="Declarative"
            description="React makes it painless to create interactive UIs."
          ></IconBox>
          <IconBox
            img="/images/icon2.png"
            title="Components"
            description="Build encapsulated components that manage their state."
          ></IconBox>
          <IconBox
            img="/images/icon3.png"
            title="Single-Way"
            description="A set of immutable values are passed tot he components."
          ></IconBox>
          <IconBox
            img="/images/icon4.png"
            title="JSX"
            description="Statically-typed, designed to run on modern browsers."
          ></IconBox>
        </section>
      </div>
    );
  }
}

export default App;
