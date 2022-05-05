import React, { useState } from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import useTableData from "../../hooks/useTable";
import ResponsiveDialog from "./modal";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Tables() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDataRow, setSelectedDataRow] = useState({});
    const { tableData, tableColumn, editTableData, deleteTableData, createTableData } = useTableData();
    const navigate = useNavigate();

    const handleClose = () => {
        setModalOpen(false);
    };

    const handleSelectData = (selection: any) => {
        if (selection.length) {
            const selectedDatw: any = tableData.find((data: any) => data.id === selection[0]);
            setSelectedDataRow(selectedDatw)
            setModalOpen(true);
        }
    };

    const handleAddRecord = () => {
        setModalOpen(true);
        setSelectedDataRow({});
    };

    const handleEditRecord = (editedRecord: any) => {
        editTableData(editedRecord);
        handleClose();
    };

    const handleDeleteRecord = (deletedRecord: any) => {
        deleteTableData(deletedRecord);
        handleClose();
    };

    const handleAddData = (addRecord: any) => {
        createTableData({ ...addRecord, userId: 1 });
        handleClose();
    }

    const onGraphsClick = () => {
        navigate("/graphs");
    }

    return (
        <div style={{ height: 900, width: "100%" }}>
            <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                <Button onClick={handleAddRecord}>Add Record</Button>
                <Button onClick={onGraphsClick}>Graphs</Button>
            </Box>
            <DataGrid columns={tableColumn} rows={tableData} pageSize={15} onSelectionModelChange={handleSelectData} components={{ Toolbar: GridToolbar }} />
            <ResponsiveDialog open={modalOpen} handleClose={handleClose} selectedData={selectedDataRow} handleEditRecord={handleEditRecord} handleDeleteRecord={handleDeleteRecord} handleAddData={handleAddData} />
        </div>
    )
}

export default Tables;