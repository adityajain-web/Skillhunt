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

const Register = () => {
    const navigate = useNavigate()

    const schema = yup.object().shape({
        firstName: yup.string().required('First name is required.'),
        lastName: yup.string().required('Last name is required.'),
        email: yup.string().email('Invalid email.').required('Email is required.'),
        phone: yup.string().required('Phone number is required.').matches(/^\d+$/, 'Invalid phone number.').min(10, 'Invalid phone number.').max(10, 'Invalid phone number.'),
        password: yup.string().required('Password is required.').min(8, 'Password must be at least 8 character.'),
        cPass: yup.string().oneOf([yup.ref('password'), null], 'Confirm password must be same as password.').required('Confirm password is required.')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data)
        toast.success('Sign up successfully!');
    }
    return (
        <>
            <main className={`${Styles.regMain}`}>
                <Container maxWidth="xxl" className={`p-0 m-0 ${Styles.loginContainer}`}>
                    <Grid container spacing={2} style={{ height: '100%' }}>
                        <Grid item xs={12} sm={6} lg={4} className={`d-flex align-items-center justify-content-center ${Styles.formGrid}`}>
                            <Box id="authFormContainer">
                                <Box mb={2} className="d-block d-sm-none text-center">
                                    <Typography variant="h4" className='text-white'>Find Job, Employment, and Career Opportunity</Typography>
                                    <Typography variant='h1' className='text-white'>The Easiest Way to Get Your New Job</Typography>
                                </Box>
                                <Card style={{ width: "100%" }}>
                                    <CardContent className='px-4'>
                                        <Typography variant='h2' align='center'>Sign in to Skillhunt</Typography>
                                        <Box mt={2}>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <Box mb={2}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} sm={6}>
                                                            <label htmlFor='firstName'>First Name</label>
                                                            <input type='firstName' id='firstName' {...register('firstName')} />
                                                            {
                                                                errors && errors.firstName && errors.firstName.message ? <Typography className='text-danger'>{errors.firstName.message}</Typography> : null
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <label htmlFor='lastName'>Last Name</label>
                                                            <input type='lastName' id='lastName' {...register('lastName')} />
                                                            {
                                                                errors && errors.lastName && errors.lastName.message ? <Typography className='text-danger'>{errors.lastName.message}</Typography> : null
                                                            }
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <Box mb={2}>
                                                    <label htmlFor='email'>Email</label>
                                                    <input type='email' id='email' {...register('email')} />
                                                    {
                                                        errors && errors.email && errors.email.message ? <Typography className='text-danger'>{errors.email.message}</Typography> : null
                                                    }
                                                </Box>
                                                <Box mb={2}>
                                                    <label htmlFor='phone'>Phone</label>
                                                    <input type='phone' id='phone' {...register('phone')} />
                                                    {
                                                        errors && errors.phone && errors.phone.message ? <Typography className='text-danger'>{errors.phone.message}</Typography> : null
                                                    }
                                                </Box>
                                                <Box mb={2}>
                                                    <label htmlFor='password'>Password</label>
                                                    <input type='password' id='password' {...register('password')} />
                                                    {
                                                        errors && errors.password && errors.password.message ? <Typography className='text-danger'>{errors.password.message}</Typography> : null
                                                    }
                                                </Box>
                                                <Box mb={2}>
                                                    <label htmlFor='cPass'>Confirm Password</label>
                                                    <input type='password' id='cPass' {...register('cPass')} />
                                                    {
                                                        errors && errors.cPass && errors.cPass.message ? <Typography className='text-danger'>{errors.cPass.message}</Typography> : null
                                                    }
                                                </Box>
                                                <Box mt={2}>
                                                    <Button type="submit" className="submitBtn" variant="contained">Sign In</Button>
                                                </Box>
                                            </form>
                                            <Box mt={2} className="d-flex flex-column align-items-center">
                                                <Button variant='text'>Forget Password</Button>
                                                <Button variant='text' onClick={() => navigate('/auth/login/')}>Already have an account.</Button>
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

export default Register
