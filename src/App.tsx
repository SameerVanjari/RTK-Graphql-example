import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Home from "./components/Home";

import { useEffect } from "react";
import { getAllAnimes } from "./store/thunks/animeThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAnimes());
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
