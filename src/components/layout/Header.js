import React from 'react';
import Grid from '@mui/material/Grid';
import '../css/header.css'
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
function Header() {
    return (
        <div>
            <Grid container className='parent'>

                <Grid item xs={3} className='child1' component='div'>
                    <Box >
                        LOREM IPSUM
                    </Box>
                </Grid>

                <Grid item xs={9} className='child2' >
                    <Box mr={6}>
                        <Link >Link1</Link>
                    </Box>
                </Grid>

            </Grid>
        </div>
    )
}

export default Header