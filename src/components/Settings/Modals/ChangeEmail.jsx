import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    FormControl,
    TextField,
    InputAdornment,
    IconButton,
    Box,
} from '@mui/material';

import {
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";

const ChangeEmailDialog = (props) => {
    const handleClose = () => {
        props.setOpen(false);
    };

    return (
        <div>
        <Dialog
            open={props.open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" sx={{ backgroundColor: "#DBF1F4"}}>
                {"Change My Email"}
            </DialogTitle>
            <Divider />
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    We need your current password to verify the update request.
                </DialogContentText>
                <Box
                    component="form"
                    sx={{
                    "& .MuiTextField-root": { m: 1, maxWidth: "100%" },
                    }}
                    noValidate
                    autoComplete="off"
                >
                <form
                    id={"Change-Password-Form"}
                    onSubmit={(e) => {
                        e.preventDefault();
                    }} style={{ marginTop: "2rem" }}
                    >
                    <FormControl fullWidth variant="outlined">
                        <TextField
                            id="outlined-adornment-current-password"
                            InputProps={{
                                endAdornment: (
                                <InputAdornment>
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        edge="end"
                                    >
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                            label="Current Password"
                        />
                    </FormControl>
                    <FormControl fullWidth variant="outlined">
                        <TextField
                            id="outlined-adornment-password"
                            InputProps={{
                                endAdornment: (
                                <InputAdornment>
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        edge="end"
                                    >
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                            label="New Password"
                        />
                    </FormControl>
                    <FormControl fullWidth variant="outlined">
                        <TextField
                            id="outlined-adornment-confirm-password"
                            InputProps={{
                                endAdornment: (
                                <InputAdornment>
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        edge="end"
                                    >
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                            label="Confirm Password"
                        />
                    </FormControl>
                    <FormControl fullWidth variant="outlined">
                        <Button
                            sx={{ m: 1 }}
                            variant="outlined"
                            size="large"
                            type="submit"
                        >
                            Update
                        </Button>
                    </FormControl>
                </form>
                </Box>
                
            </DialogContent>
            
        </Dialog>
        </div>
    );
}

export default ChangeEmailDialog
