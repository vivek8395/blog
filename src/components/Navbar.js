import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
      appBar: {
        backgroundColor: "#fff"
      },
      
    }));

const Navbar = () => {
      const classes = useStyles();
      return (
            <div>
                 <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary" >
            Logo
          </Typography>
        </Toolbar>
      </AppBar>
            </div>
      )
}

export default Navbar
