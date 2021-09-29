import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { login, logout } from './Actions/auth';
import { startSetExpenses } from './Actions/expenses';
import { startSetBills } from './Actions/bills';
import { startSetBuckets } from './Actions/buckets'
import { startSetIncome } from './Actions/income';
import './Firebase/firebase'
import { firebase } from './Firebase/firebase';
import LoadingPage from './assets/loadingPage'
import configureStore from './Store/configureStore';
import AppRouter, { history } from './components/Routes/AppRouter';

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'))
    hasRendered = true
  }
}

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetBills())
    store.dispatch(startSetBuckets())
    store.dispatch(startSetIncome())
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/myDashboard')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})
