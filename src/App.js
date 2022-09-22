import React, { Component } from 'react'
import Navbar from './UI/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News pageSize={6} category="general" />}/>
            <Route path="/general" element={<News key="gen" pageSize={6} category="general" />}/>
            <Route path="/business" element={<News key="bus" pageSize={6} category="business" />}/>
            <Route path="/entertainment" element={<News key="ent" pageSize={6} category="entertainment" />}></Route>
            <Route path="/health" element={<News key="heal" pageSize={6} category="health" />}></Route>
            <Route path="/science" element={<News key="sci" pageSize={6} category="science" />}></Route>
            <Route path="/sports" element={<News key="spo" pageSize={6} category="sports" />}></Route>
            <Route path="/technology" element={<News key="tech" pageSize={6} category="technology" />}></Route>
          </Routes>
        </Router>,
        {/* <Router>
          <Navbar />          
          <Switch>
            <Route path="/general"><News pageSize={6} category="general" /></Route>
            <Route path="/business"><News pageSize={6} category="business" /></Route>
            <Route path="/entertainment"><News pageSize={6} category="entertainment" /></Route>
            <Route path="/health"><News pageSize={6} category="health" /></Route>
            <Route path="/science"><News pageSize={6} category="science" /></Route>
            <Route path="/sports"><News pageSize={6} category="sports" /></Route>
            <Route path="/technology"><News pageSize={6} category="technology" /></Route>
          </Switch>
        </Router> */}
      </>
    )
  }
}
