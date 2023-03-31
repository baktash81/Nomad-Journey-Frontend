import React from 'react';
import './EditProfile.css';
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
  Container,
  Tabs,
  Tab,
} from '@mui/material';
import { Item } from "semantic-ui-react";
import PropTypes from 'prop-types';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const EditProfile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='editProfile'>
      <Container style={{ paddingTop: "3rem", paddingBottom: "2rem"}}>
        <Grid container spacing={3}>
          {/* Profile picture */}
          <Grid item xs={12} sm={12} md={3}>
            <Card>
              This card is for profile picture + button for change + button for remove it
            </Card>
          </Grid>
          {/* Name and City/Country */}
          <Grid item xs={12} sm={12} md={9}>
            <Typography component="h1" sx={{ fontWeight: "bold", fontSize: "2.8rem"}}>
              Aylin Naebzadeh
            </Typography>
          </Grid>
          {/* Tabs */}
          <Grid item xs={12} sm={12} md={9}>
            <Card>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="ABOUT" {...a11yProps(0)} />
                    <Tab label="HOME" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  In About Edit Form
                </TabPanel>
                <TabPanel value={value} index={1}>
                  In Home Edit Form
                </TabPanel>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default EditProfile
