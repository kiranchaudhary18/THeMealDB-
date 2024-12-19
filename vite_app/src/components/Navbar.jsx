import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          React Task
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Meals
        </Button>
        <Button color="inherit" component={Link} to="/cocktails">
          Cocktails
        </Button>
        <Button color="inherit" component={Link} to="/potter">
          Potter
        </Button>
        <Button color="inherit" component={Link} to="/banks">
          Banks
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
