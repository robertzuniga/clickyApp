import React from 'react';
import Image from './Image';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Here's my cool edit!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Grid fluid>
          <Row between="xs">
            <Col xs={3}>
            <Image/>
            </Col>
            <Col xs={3}>
            <Image/>
            </Col>
            <Col xs={3}>
            <Image/>
            </Col>
          </Row>
          <Row between="xs">
            <Col xs={3}>
            <Image/>
            </Col>
            <Col xs={3}>
            <Image/>
            </Col>
            <Col xs={3}>
            <Image/>
            </Col>
          </Row>
          <Row between="xs">
            <Col xs={3}>
            <Image/>
            </Col>
            <Col xs={3}>
            <Image/>
            </Col>
            <Col xs={3}>
            <Image/>
            </Col>
          </Row>
        </Grid>

      </header>
    </div>
  );
}

export default App;
