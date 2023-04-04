import React from 'react'
import { Container, Grid, Box, Typography } from '@mui/material'
import Styles from '../../../styles/Login.module.css'
import Auth from '../../../images/auth.webp'

const Login = () => {
    return (
        <>
            <main className={`${Styles.loginMain}`}>
                <Container maxWidth="xxl" className={`p-0 m-0 ${Styles.loginContainer}`}>
                    <Grid container spacing={2} style={{ height: '100%' }}>
                        <Grid item xs={12} sm={6} lg={4}>1</Grid>
                        <Grid item sm={6} lg={8} className={`d-none d-sm-flex flex-column justify-content-center ${Styles.imageContainer}`}>
                            <Box py={5}>
                                <Typography variant="h4" className='text-white'>Find Job, Employment, and Career Opportunity</Typography>
                                <Typography variant='h1' className='text-white'>The Easiest Way to Get Your New Job</Typography>
                            </Box>
                            <Box>
                                <img src={Auth} alt="auth" className='img-fluid' />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default Login