import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, TextField } from '@mui/material';


export default function ResponsiveDialog({ open, handleClose, selectedData, handleEditRecord, handleDeleteRecord, handleAddData }: any) {
    const [data, setData] = useState<any>({});
    const [isEdit, setIsEdit] = useState<boolean>(false);

    useEffect(() => {
        if (selectedData) {
            const edit = Object.keys(selectedData).length ? true : false;
            setData(edit ? selectedData : { title: "", description: "", display_name: "" });
            setIsEdit(edit);
        }
    }, [selectedData]);

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value });
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">
                    {isEdit ? "Edit" : "Add"} the info
                </DialogTitle>
                <DialogContent>
                    <Grid container sx={{ alignItems: 'center' }} spacing={2}>
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField
                                required
                                name="title"
                                sx={{ marginTop: '2%', width: "100%" }}
                                label="Title"
                                value={data.title}
                                onChange={handleChange}
                            >
                            </TextField>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField
                                required
                                name="description"
                                sx={{ margin: '2% 0%', width: "100%" }}
                                label="Description"
                                value={data.description}
                                onChange={handleChange}
                            >
                            </TextField>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField
                                required
                                name="display_name"
                                sx={{ margin: '2% 0%', width: "100%" }}
                                label="Body"
                                value={data.display_name}
                                onChange={handleChange}
                            >
                            </TextField>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions >
                    <Button color="primary" autoFocus onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button color="success" onClick={() => { isEdit ? handleEditRecord(data) : handleAddData(data) }} autoFocus>
                        Save
                    </Button>
                    {isEdit ? <Button color="error" onClick={() => handleDeleteRecord(data)} autoFocus>
                        Delete
                    </Button> : ""}
                </DialogActions>
            </Dialog>
        </div >
    );
}
