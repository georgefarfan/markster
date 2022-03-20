import { combineReducers } from "redux";
import { FilesState } from "../interface/files.interface";

const INITIAL_STATE: FilesState = {
  items: [],
};

const filesReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  files: filesReducer,
});
