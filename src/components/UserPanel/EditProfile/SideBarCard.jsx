import React from 'react';
import {
    Box,
    Paper,
    Grid,
    FormControl,
    TextField,
    Button,
    Divider,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Avatar,
    Card,
    Typography,
    IconButton
} from '@mui/material';
import { Item } from "semantic-ui-react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const SideBarCard = () => {
    return (
        <div>
            <Card>
                <Stack spacing={6} sx={{ paddingBottom: "1rem" }}>
                    <Item>
                        <Stack alignItems={`center`} spacing={1}>
                            <Item>
                                <IconButton component="label">
                                    <input
                                        hidden
                                        accept="image/*"
                                        multiple
                                        type="file"
                                        max={20}
                                    />
                                    <Avatar sx={{ width:'15vw', height:'15vw' }} />
                                </IconButton>
                            </Item>
                            <Item>
                                <Button
                                    sx={{ width: "100%" }}
                                    variant="contained"
                                    component="label"
                                    startIcon={<EditIcon />}
                                    >
                                    Upload a photo
                                    <input
                                        hidden
                                        accept="image/*"
                                        multiple
                                        type="file"
                                    />
                                </Button>
                            </Item>
                            <Item>
                                <Button
                                    sx={{ mt: 1, width: "100%" }}
                                    variant="contained"
                                    color="error"
                                    startIcon={<DeleteIcon />}
                                    >
                                    Remove photo
                                </Button>
                            </Item>
                        </Stack>
                    </Item>
                </Stack>
            </Card>
        </div>
    )
}

export default SideBarCard