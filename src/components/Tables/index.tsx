import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import useTableData from "../../hooks/useTable";
import ResponsiveDialog from "./modal";
import { Button } from "@mui/material";

function Tables() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDataRow, setSelectedDataRow] = useState({});
    const { tableData, tableColumn } = useTableData();

    const handleClose = () => {
        setModalOpen(!modalOpen);
    };

    const handleSelectData = (selection: any) => {
        const selectedDatw: any = tableData.find((data: any) => data.id === selection[0]);
        setSelectedDataRow(selectedDatw)
        setModalOpen(!modalOpen);
    };

    const handleAddRecord = () => {
        setModalOpen(true);
        setSelectedDataRow({});
    };


    return (
        <div style={{ height: 300, width: "100%" }}>
            <Button onClick={handleAddRecord}>Add Record</Button>
            <DataGrid columns={tableColumn} rows={tableData} hideFooter onSelectionModelChange={handleSelectData} />
            <ResponsiveDialog open={modalOpen} handleClose={handleClose} selectedData={selectedDataRow} />
        </div>
    )
}

export default Tables;