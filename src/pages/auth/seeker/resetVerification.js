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

const ResetVerification = () => {
    const navigate = useNavigate()

    const schema = yup.object().shape({
        phone: yup.string().required('Phone number is required.').matches(/^\d+$/, 'Invalid phone number.').min(10, 'Invalid phone number.').max(10, 'Invalid phone number.'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data)
        toast.success('Sign in successfully!');
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
                                        <Typography variant='h2' align='center'>Skillhunt</Typography>
                                        <Box mt={2}>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <Box mb={2}>
                                                    <label htmlFor='phone'>Enter your register phone number</label>
                                                    <input type='phone' id='phone' {...register('phone')} />
                                                    {
                                                        errors && errors.phone && errors.phone.message ? <Typography className='text-danger'>{errors.phone.message}</Typography> : null
                                                    }
                                                </Box>
                                                <Box mt={2}>
                                                    <Button type="submit" className="submitBtn" variant="contained">Send OTP</Button>
                                                </Box>
                                            </form>
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

export default ResetVerification