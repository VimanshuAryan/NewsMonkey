import './App.css';

import React, { Component } from 'react'
import Navbar from './UI/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <News pageSize={5}/>
      </>
    )
  }
}
