import { combineReducers } from "redux";
import { editorMarkdownReducer } from "./editor-markdown.reducer";
import { filesReducer } from "./files.reducer";

export const Reducers = combineReducers({
  files: filesReducer,
  editor: editorMarkdownReducer,
});
