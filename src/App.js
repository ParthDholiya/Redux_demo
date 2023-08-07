import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import allActions from './actions'

function App() {
  const counter = useSelector(state => state.counter);
  const currentUser = useSelector(state => state.currentUser);

  const dispatch = useDispatch();

  const user = { name: "Ravi" };

  useEffect(() => {
    dispatch(allActions.userAction.setUser(user))
  }, [])

  return (
    <div className="App">
      {
        currentUser.loggedIn ?
          <>
            <h1>Hello, {currentUser.user.name}</h1>
            <button onClick={() => dispatch(allActions.userAction.logout())}>Logout</button>
          </>
          :
          <>
            <h1>Login</h1>
            <button onClick={() => dispatch(allActions.userAction.setUser(user))}>Login as Rei</button>
          </>
      }
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(allActions.counterAction.decrement())}>Decrease Counter</button>
      <button onClick={() => dispatch(allActions.counterAction.increment())}>Increase Counter</button>
    </div>
  );
}

export default App;
