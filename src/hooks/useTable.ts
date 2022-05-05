import { GridColDef, GridColumns } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import axios from "../helpers/ApiClient";

type tableFilter = {
    limit: number,
    rating: string,
    lang: string,
    offset: number,
    q: string
}

const tableColumn: GridColumns = [
    { headerName: "ID", field: "id", },
    { headerName: "Description", field: "description", width: 100, maxWidth: 150, resizable: true },
    { headerName: "Display name", field: "display_name", width: 100, maxWidth: 150, resizable: true },
    { headerName: "Is verified", field: "is_verified", width: 100, maxWidth: 150, resizable: true },
    { headerName: "Avatar", field: "avatar_url", width: 100, maxWidth: 150, resizable: true },
    { headerName: "Creatd time", field: "import_datetime", width: 100, maxWidth: 150, resizable: true },
    { headerName: "Title", field: "title", width: 100, maxWidth: 150, resizable: true },
    { headerName: "User name", field: "username", width: 100, maxWidth: 150, resizable: true },
]


function useTableData() {

    const [tableData, setTableData] = useState([]);
    const [tableFilter, setTableFilter] = useState<tableFilter>({ limit: 25, rating: "g", lang: "en", offset: 0, q: "a" });

    useEffect(() => {
        getTableData();
    }, [tableFilter]);

    const getTableData = async (): Promise<void> => {
        try {
            // const response = await axios.get("/search", { params: tableFilter });
            const response = await axios.get("/posts");
            console.log("response => ", response);

            if (response.data.data.length) {
                // setTableData(response.data.data.map((sticker: { user: Object }) => ({ ...sticker.user, ...sticker })));
                setTableData(response.data.map((sticker: { user: Object }) => ({ ...sticker.user, ...sticker })));
            }
        } catch (error) {
            console.log("error", error);
        }
    }

    return ({
        tableData,
        tableColumn,
        tableFilter,
        setTableFilter
    })
}

export default useTableData;