import axios from "../../helpers/ApiClient";
import { tableRow } from "../../hooks/useTable";
import { tableTypes } from "../../store/types";

export const getTableData = (tableFilter: any): any => async (dispatch: Function): Promise<void> => {
    try {
        const response = await axios.get("/search", { params: tableFilter });

        if (response.data.data.length) {
            dispatch({
                type: tableTypes.storeData,
                payload: response.data.data.map((sticker: any) => ({ id: sticker.id, description: sticker.user.description, display_name: sticker.user.display_name, is_verified: sticker.user.is_verified, avatar_url: sticker.user.avatar_url, import_datetime: sticker.import_datetime, title: sticker.title, username: sticker.user.username }))
            });
        }
    } catch (error) {
        console.log("error", error);
    }
};

export const editTableRowAction = (row: tableRow) => ({
    type: tableTypes.editData,
    payload: row
});

export const deleteTableRowAction = (row: tableRow) => ({
    type: tableTypes.deleteData,
    payload: row
});

export const addTableRowAction = (row: tableRow) => ({
    type: tableTypes.addData,
    payload: row
});