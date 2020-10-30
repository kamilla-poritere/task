import { combineReducers } from "redux";

import { users } from "./users.reducer";
import { user } from "./user.reducer";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({
  users,
  user,
  alert,
});

export default rootReducer;
