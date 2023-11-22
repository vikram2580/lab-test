import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchBalance } from "./redux/reducers/balanceSlice";
import Router from "./router";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);
  return <Router />;
}

export default App;
