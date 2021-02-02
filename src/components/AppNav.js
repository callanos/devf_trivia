import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function AppNav (props){

    const { classes } = props;

    return(
        <AppBar className={ classes.NavColor } position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" component="p">FrontEnd Trivia</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default withStyles ({
    NavColor:{
        backgroundColor: '#123456'
    }
})(AppNav);