// this is a global context setup
import React, {useState} from "react";

export const Context = React.createContext();
export const initialState = {
  userInfo : {
    name : "",
    number : "",
    code : "",
    email : "",
    allowNotification: false,
    isLoggedIn : false,
  },
  newRoom: {
    roomTitle: "open to everyone",
    roomActive: "",
    buttonActive: "open",
  },
  isBottomSheetOpen: false,
  singleUserData: {},
};

const UserProvider = ({children}) => {
  const [state, setState] = useState(() => 
    localStorage.getItem("clubHouseData") ? 
    {...initialState, userInfo : JSON.parse(localStorage.getItem("clubHouseData"))} : initialState
  );

  return (
    <Context.Provider value={[state, setState]}>
      {children}
    </Context.Provider>
  )
}

export default UserProvider;