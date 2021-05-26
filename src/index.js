import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import reportWebVitals from './reportWebVitals';
import './index.css';
import store from './store';
import ShowPageContainer from './containers/ShowPageContainer';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route exact path="/">
          <AppContainer />
        </Route>
        <Route path="/:param">
          <ShowPageContainer />
        </Route>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
