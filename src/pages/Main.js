import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Grid } from '@mui/material'
import './main.css'

function Main() {
    return (
        <div>
            <Layout>
                <Grid container height='300px'>
                    <Grid item xs={6} className='main-child'>
                        <Box>
                        THIS IS SOME CONTENT ALIGNED IN THE CENTER VERTICALY AND HORIZONTALLY
                        </Box>
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                </Grid>

            </Layout>
        </div>
    )
}

export default Main