import { GridColumns } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { getTableData, editTableRowAction, deleteTableRowAction, addTableRowAction } from "../components/Tables/actions";
import { RootState } from "../store/reducers";

type tableFilter = {
    limit: number;
    rating: string;
    lang: string;
    offset: number;
    q: string;
}

const tableColumn: GridColumns = [
    { headerName: "ID", field: "id", width: 200, maxWidth: 250 },
    { headerName: "User name", field: "username", width: 150, maxWidth: 250 },
    { headerName: "Title", field: "title", width: 250, maxWidth: 250 },
    { headerName: "Description", field: "description", width: 250, maxWidth: 400 },
    { headerName: "Display name", field: "display_name", width: 250, maxWidth: 400 },
    { headerName: "Avatar", field: "avatar_url", width: 250, maxWidth: 400 },
    { headerName: "Creatd time", field: "import_datetime", width: 250, maxWidth: 400 },
    { headerName: "Is verified", field: "is_verified", width: 150 },
];

export type tableRow = {
    id: string;
    description: string;
    display_name: string;
    is_verified: string;
    avatar: string;
    import_datetime: string;
    title: string;
    username: string;
}

function useTableData() {
    const tableData = useSelector<RootState, tableRow[]>(({ tableState }) => tableState.data);

    const dispatch = useDispatch();
    const [tableFilter, setTableFilter] = useState<tableFilter>({ limit: 50, rating: "g", lang: "en", offset: 0, q: "a" });

    useEffect(() => {
        dispatch(getTableData(tableFilter));
    }, []);

    const editTableData = (editedRecord: tableRow) => {
        dispatch(editTableRowAction(editedRecord));
    };

    const deleteTableData = (deletedRecord: tableRow) => {
        dispatch(deleteTableRowAction(deletedRecord));
    }

    const createTableData = (createRecord: tableRow) => {
        dispatch(addTableRowAction({ ...tableData[0], ...createRecord, id: v4() }));
    }

    return ({
        tableData,
        tableColumn,
        tableFilter,
        editTableData,
        deleteTableData,
        createTableData,
        setTableFilter
    })
}

export default useTableData;