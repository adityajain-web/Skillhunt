import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Grid, Box, Typography, Card, CardContent, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import Auth from '../../../images/auth.webp'
import 'react-toastify/dist/ReactToastify.css';
import Styles from '../../../styles/Login.module.css'

const Login = () => {
    const navigate = useNavigate()

    const schema = yup.object().shape({
        email: yup.string().email('Invalid email.').required('Email is required.'),
        password: yup.string().required('Password is required.').min(8, 'Password must be at least 8 character.')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data),
            redirect: 'follow'
        };

        await fetch("http://127.0.0.1:8000/seeker-login", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.error) {
                    toast.error(result.error)
                } else {
                    navigate('/seeker/dashboard/')
                    toast.success('Login successfully.')
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <main className={`${Styles.loginMain}`}>
                <Container maxWidth="xxl" className={`p-0 m-0 ${Styles.loginContainer}`}>
                    <Grid container spacing={2} style={{ height: '100%' }}>
                        <Grid item xs={12} sm={6} lg={4} className={`d-flex align-items-center justify-content-center ${Styles.formGrid}`}>
                            <Box id="authFormContainer">
                                <Box mb={2} className="d-block d-sm-none text-center">
                                    <Typography variant="h4" className='text-white'>Find Job, Employment, and Career Opportunity</Typography>
                                    <Typography variant='h1' className='text-white'>The Easiest Way to Get Your New Job</Typography>
                                </Box>
                                <Card style={{ width: "100%" }}>
                                    <CardContent className='py-5 px-4'>
                                        <Typography variant='h2' align='center'>Sign in to Skillhunt</Typography>
                                        <Box mt={2}>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <Box mb={2}>
                                                    <label htmlFor='email'>Email</label>
                                                    <input type='email' id='email' {...register('email')} />
                                                    {
                                                        errors && errors.email ? <Typography className='text-danger'>{errors.email.message}</Typography> : null
                                                    }
                                                </Box>
                                                <Box mb={2}>
                                                    <label htmlFor='password'>Password</label>
                                                    <input type='password' id='password' {...register('password')} />
                                                    {
                                                        errors && errors.password && errors.password.message ? <Typography className='text-danger'>{errors.password.message}</Typography> : null
                                                    }
                                                </Box>
                                                <Box mt={2}>
                                                    <Button type="submit" className="submitBtn" variant="contained">Sign In</Button>
                                                </Box>
                                            </form>
                                            <Box mt={2} className="d-flex flex-column flex-md-row justify-content-between">
                                                <Button variant='text' onClick={() => navigate('/auth/reset-verification/')}>Forget Password</Button>
                                                <Button variant='text' onClick={() => navigate('/auth/register/')}>Need an account?</Button>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
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