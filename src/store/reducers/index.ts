import { combineReducers } from "redux";
import TableReducer, { initStateTypes as initTableTypes } from "./tableReducer";

export interface RootState {
    tableState: initTableTypes
}

export default combineReducers<RootState>({
    tableState: TableReducer
});