import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Grid, Card, CardContent, Box, Typography, Button } from '@mui/material'

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <main style={{ marginTop: '5rem' }}>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className='mx-auto'>
                            <Card>
                                <CardContent>
                                    <Box>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <Typography variant='body1'>Seeker</Typography>
                                                <Button variant="contained" color="primary" onClick={() => navigate('/auth/login/')}>
                                                    Get Hire
                                                </Button>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <Typography variant='body1'>Employer</Typography>
                                                <Button variant="contained" color="primary">
                                                    Hire
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    )
}

export default Home