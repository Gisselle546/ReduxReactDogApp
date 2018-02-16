import React, { Component } from 'react';
import Layout from './Components/HOC/Layout';
import MainComponent from './Components/MainComponents';
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <MainComponent/>
      </Layout>
    );
  }
}

export default App;
