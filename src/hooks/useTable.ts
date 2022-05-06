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
    { headerName: "ID", field: "id" },
    { headerName: "User name", field: "username" },
    { headerName: "Title", field: "title", },
    { headerName: "Description", field: "description", },
    { headerName: "Display name", field: "display_name", },
    { headerName: "Avatar", field: "avatar_url", },
    { headerName: "Creatd time", field: "import_datetime", },
    { headerName: "Is verified", field: "is_verified", },
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