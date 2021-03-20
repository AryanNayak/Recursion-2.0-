import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../asset/logo_transparent (1).png"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  nav_bgc: {
    backgroundColor: "#00416d",
  },
  logo: {
    height: "40px",
    padding: "10px",
  },
}));

function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.nav_bgc} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <MenuIcon />
          </IconButton>

          <img className={classes.logo} src={logo} alt="logo" />

          <Typography variant="h6" className={classes.title}>
            WeWin
          </Typography>
          <Button color="inherit">Get Started</Button>
          <Button color="inherit">Hospital Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
