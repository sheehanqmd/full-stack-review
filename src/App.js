import React from 'react';
import { HashRouter as Router} from 'react-router-dom';
import routes from "./routes";
import {Provider} from "react-redux"
import store from  "./redux/store";
import './App.css';



function App() {
  return (
    <Provider store = {store}>
    <Router>
    <div className="App">
      {routes}
    </div>
    </Router>
   </Provider>
  );
}

export default App;
