import { tableRow } from "../../hooks/useTable";
import { tableTypes } from "../types";

export type initStateTypes = {
    data: tableRow[],
}

type actionTypes = {
    type: string;
    payload: any;
}

const initState: initStateTypes = {
    data: []
}

export default (state: initStateTypes = initState, action: actionTypes): any => {
    switch (action.type) {
        case tableTypes.storeData:
            return ({ ...state, data: action.payload });

        case tableTypes.editData:
            state.data = state.data.map((row: tableRow) => row.id === action.payload.id ? ({ ...row, ...action.payload }) : row)
            return state;

        case tableTypes.deleteData:
            state.data = state.data.filter((row: tableRow) => row.id !== action.payload.id)
            return state;

        case tableTypes.addData:
            state.data = [{ ...action.payload }, ...state.data];
            return state;

        default:
            return state;
    }
}