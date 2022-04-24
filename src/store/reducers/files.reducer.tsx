import { combineReducers } from "redux";
import { FilesState } from "../interface/files.interface";

const INITIAL_STATE: FilesState = {
  items: [],
};

export const filesReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
