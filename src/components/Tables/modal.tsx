import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, FormControl, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';


export default function ResponsiveDialog({ open, handleClose, selectedData }: any) {
    const [data, setData] = useState<any>({});
    const theme = useTheme();

    useEffect(() => {
        setData(selectedData);
    }, [selectedData])

    console.log("data => ", data);

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, [name]: value });
    };


    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    Edit the info
                </DialogTitle>
                <DialogContent>
                    <Grid container sx={{ alignItems: 'center' }} spacing={2}>
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField
                                required
                                name="display_name"
                                sx={{ marginTop: '2%', width: "100%" }}
                                label="Display name"
                                value={data.display_name}
                                onChange={handleChange}
                            >
                            </TextField>
                        </Grid>
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
                                label="Discription"
                                value={data.description}
                                onChange={handleChange}
                            >
                            </TextField>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions >
                    <Button autoFocus onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}
