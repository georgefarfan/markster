import { EditorMarkdown } from "../interface/editor-markdown.interface";
import { TYPES } from "../types/editor-markdown.types";

export const SET_TEXT = (param: EditorMarkdown) => ({
  type: TYPES.SET_TEXT,
  payload: {
    text: param.text,
  },
});
