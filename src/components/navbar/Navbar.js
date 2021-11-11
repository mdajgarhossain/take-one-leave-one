import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
    return (
        <AppBar position="static" style={{ background: '#2E3B55' }} sx={{ textAlign: 'center' }}>
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                    Take One Leave One
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
