import { AddFileParam } from "../interface/files.interface";

export const addFileAction = (param: AddFileParam) => ({
  type: "SELECT_SUBJECT",
  payload: {
    file: param.file,
  },
});
