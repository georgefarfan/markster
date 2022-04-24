import { EditorMarkdown } from "../interface/editor-markdown.interface";
import * as ACTIONS from "../actions/editor-markdown.action";

const INITIAL_STATE: EditorMarkdown = {
  text: "",
};

export const editorMarkdownReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ACTIONS.SET_TEXT:
      return {
        ...state,
      };
    default:
      return state;
  }
};
