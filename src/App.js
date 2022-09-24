import React, { Component } from 'react'
import Navbar from './UI/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 12
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News pageSize={this.pageSize} category="general" />}/>
            <Route path="/general" element={<News key="gen" pageSize={this.pageSize} category="general" />}/>
            <Route path="/business" element={<News key="bus" pageSize={this.pageSize} category="business" />}/>
            <Route path="/entertainment" element={<News key="ent" pageSize={this.pageSize} category="entertainment" />}></Route>
            <Route path="/health" element={<News key="heal" pageSize={this.pageSize} category="health" />}></Route>
            <Route path="/science" element={<News key="sci" pageSize={this.pageSize} category="science" />}></Route>
            <Route path="/sports" element={<News key="spo" pageSize={this.pageSize} category="sports" />}></Route>
            <Route path="/technology" element={<News key="tech" pageSize={this.pageSize} category="technology" />}></Route>
          </Routes>
        </Router>,
        {/* <Router>
          <Navbar />          
          <Switch>
            <Route path="/general"><News pageSize={this.pageSize} category="general" /></Route>
            <Route path="/business"><News pageSize={this.pageSize} category="business" /></Route>
            <Route path="/entertainment"><News pageSize={this.pageSize} category="entertainment" /></Route>
            <Route path="/health"><News pageSize={this.pageSize} category="health" /></Route>
            <Route path="/science"><News pageSize={this.pageSize} category="science" /></Route>
            <Route path="/sports"><News pageSize={this.pageSize} category="sports" /></Route>
            <Route path="/technology"><News pageSize={this.pageSize} category="technology" /></Route>
          </Switch>
        </Router> */}
      </>
    )
  }
}
