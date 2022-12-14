import React from "react";
import { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./slice/counterSlice";
import { setUsers } from "./slice/userSlice";

function App() {
  const count = useSelector((state: any) => state.counter.count);
  const { users } = useSelector((state: any) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPosts = async () => {
      const responce = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await responce.json();
      dispatch(setUsers(data));
    };
    getPosts();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increase())}>Up</button>
      <button onClick={() => dispatch(decrease())}>Down</button>
      <h2>User</h2>
      {users &&
        users.map((user: any, index: number) => (
          <div key={index}>{user.name}</div>
        ))}
    </div>
  );
}

export default App;
