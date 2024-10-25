
import React ,{ useEffect, useContext } from "react";
import Routing from "./Router.jsx";
import { auth } from "./Utility/firebase.js";
import { DataContext} from "./components/DataProvider/DataProvider.jsx";
import { Type } from "./Utility/action.type.js";

function App() {
  //taking user from context
  //we should update the global state using dispatch
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return <Routing />;
}

export default App;

