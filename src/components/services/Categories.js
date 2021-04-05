import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Service from "./Service";
import OfferList from "./offers/OfferList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab disabled label="Packages" {...a11yProps(0)} />
          <Tab label="Offers" {...a11yProps(1)} />
          <Tab label="Hair" {...a11yProps(2)} />
          <Tab label="Nails" {...a11yProps(3)} />
          <Tab label="MakeUp" {...a11yProps(4)} />
          <Tab label="Massage" {...a11yProps(5)} />
          <Tab label="Hair Removal" {...a11yProps(6)} />
          <Tab disabled label="Products" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}>
        <OfferList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Service category="Hair" />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Service category="Nails" />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Service category="Makeup" />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Service category="Massage Spa" />
      </TabPanel>

      <TabPanel value={value} index={6}>
        <Service category="Hair Removal" />
      </TabPanel>
      <TabPanel value={value} index={7}></TabPanel>
    </div>
  );
}
