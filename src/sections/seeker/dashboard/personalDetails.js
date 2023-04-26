import React, { useState } from 'react'
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import ReactImageFileToBase64 from "react-file-image-to-base64";




const PersonalDetails = () => {
    const [image, setImage] = useState(null);
    const [maxDate, setMaxDate] = useState(new Date().toISOString().split("T")[0]);


    const schema = yup.object().shape({
        firstName: yup.string().required('First name is required.'),
        lastName: yup.string().required('Last name is required.'),
        email: yup.string().email('Invalid email.').required('Email is required.'),
        phone: yup.string().required('Phone number is required.').matches(/^\d+$/, 'Invalid phone number.').min(10, 'Invalid phone number.').max(10, 'Invalid phone number.'),
        address: yup.string().required('Address is required.'),
        zipCode: yup.string().matches(/^[1-9][0-9]{5}$/, 'Zip code is not valid')
            .required('Zip code is required.'),
        city: yup.string().required('City is required.'),
        state: yup.string().required('State is required.'),
        website: yup.string().url('Website site url is not valid.'),
        linkedin: yup.string().url('Linkedin url is not valid.'),
        gender: yup.string().required("Please select a gender"),
        dateOfBirth: yup.date().max(new Date(), "Date of birth can't be in the future").required("Date of birth is required"),
    })

    const defaultValues = {
        firstName: '',
        lastName: '',
        email: "",
        phone: "",
        address: "",
        zipCode: "",
        city: "",
        state: "",
        website: "",
        linkedin: "",
        display_profile: "",
        dateOfBirth: null,
        gender: null
    }

    const { register, handleSubmit, reset, setValue, control, formState: { errors } } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
        defaultValues
    });

    const handleOnCompleted = (files) => {
        setImage(files[0].base64_file)
        setValue('display_profile', files[0].base64_file)
    }

    const onSubmit = (data) => {
        data = { ...data, id: `seeker-1` }
        console.log(data)
    }
    return (
        <>
            <Container maxWidth="xxl" sx={{ my: '2rem' }}>
                <Box my={5}>
                    <Typography variant='h2'>Personal Details</Typography>
                </Box>
                <Box>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={3}>
                                <Card sx={{ height: "100%" }}>
                                    <CardContent style={{ padding: "1rem" }}>
                                        <Box p={2}>
                                            <Typography variant='h5' align='center' gutterBottom>Upload Image (Optional)</Typography>
                                            {
                                                image !== null ? <Box>
                                                    <img src={image} className='img-fluid' alt="display profile" />
                                                </Box> : <Box className="uploader">
                                                    <ReactImageFileToBase64
                                                        multiple={false}
                                                        onCompleted={handleOnCompleted}
                                                        preferredButtonText="Upload Profile Image"
                                                    />
                                                </Box>
                                            }
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6} md={9}>
                                <Card>
                                    <CardContent style={{ padding: "1rem" }}>
                                        <Grid container>
                                            <Grid item xs={12} md={8}>
                                                <Box p={2}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} sm={6}>
                                                            <label htmlFor='firstName'>First Name</label>
                                                            <input type='text' id='firstName' {...register('firstName')} className='form-control' />
                                                            {
                                                                errors && errors.firstName && errors.firstName.message ? <Typography className='text-danger'>{errors.firstName.message}</Typography> : null
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <label htmlFor='lastName'>Last Name</label>
                                                            <input type='text' id='lastName' {...register('lastName')} className='form-control' />
                                                            {
                                                                errors && errors.lastName && errors.lastName.message ? <Typography className='text-danger'>{errors.lastName.message}</Typography> : null
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <label htmlFor='dateOfBirth'>Date of Birth</label>
                                                            <input type='date' id='dateOfBirth' {...register('dateOfBirth')} max={maxDate} className='form-control' />
                                                            {
                                                                errors && errors.dateOfBirth && errors.dateOfBirth.message ? <Typography className='text-danger'>{errors.dateOfBirth.message}</Typography> : null
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <label htmlFor='gender'>Gender</label>
                                                            <div>
                                                                <Controller
                                                                    name="gender"
                                                                    control={control}
                                                                    defaultValue=""
                                                                    rules={{ required: true }}
                                                                    render={({ field }) => (
                                                                        <>
                                                                            <input
                                                                                {...field}
                                                                                id="male"
                                                                                type="radio"
                                                                                value="male"
                                                                                style={{ marginRight: "0.25rem" }}
                                                                            />
                                                                            <label htmlFor="male" style={{ marginRight: "1rem" }}>Male</label>
                                                                            <input
                                                                                {...field}
                                                                                id="female"
                                                                                type="radio"
                                                                                value="female"
                                                                                style={{ marginRight: "0.25rem" }}
                                                                            />
                                                                            <label htmlFor="female" style={{ marginRight: "1rem" }}>Female</label>
                                                                        </>
                                                                    )}
                                                                />
                                                            </div>
                                                            {errors.gender && (
                                                                <Typography className='text-danger'>{errors.gender.message}</Typography>
                                                            )}
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <label htmlFor='email'>Email</label>
                                                            <input type='text' id='email' {...register('email')} className='form-control' />
                                                            {
                                                                errors && errors.email && errors.email.message ? <Typography className='text-danger'>{errors.email.message}</Typography> : null
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <label htmlFor='phone'>Phone Number</label>
                                                            <input type='tel' id='phone' {...register('phone')} className='form-control' />
                                                            {
                                                                errors && errors.phone && errors.phone.message ? <Typography className='text-danger'>{errors.phone.message}</Typography> : null
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <label htmlFor='phone'>Address</label>
                                                            <textarea rows={3} cols={10} id='address' {...register('address')} className='form-control' />
                                                            {
                                                                errors && errors.address && errors.address.message ? <Typography className='text-danger'>{errors.address.message}</Typography> : null
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <label htmlFor='zipCode'>Zip Code</label>
                                                            <input type='number' id='zipCode' {...register('zipCode')} className='form-control' />
                                                            {
                                                                errors && errors.zipCode && errors.zipCode.message ? <Typography className='text-danger'>{errors.zipCode.message}</Typography> : null
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <label htmlFor='city'>City</label>
                                                            <input type='text' id='city' {...register('city')} className='form-control' />
                                                            {
                                                                errors && errors.city && errors.city.message ? <Typography className='text-danger'>{errors.city.message}</Typography> : null
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <label htmlFor='state'>State</label>
                                                            <input type='text' id='state' {...register('state')} className='form-control' />
                                                            {
                                                                errors && errors.state && errors.state.message ? <Typography className='text-danger'>{errors.state.message}</Typography> : null
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <label htmlFor='website'>Website (Optional) </label>
                                                            <input type='url' id='website' {...register('website')} className='form-control' />
                                                            {
                                                                errors && errors.website && errors.website.message ? <Typography className='text-danger'>{errors.website.message}</Typography> : null
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <label htmlFor='linkedin'>Linkedin Profile (Optional) </label>
                                                            <input type='url' id='linkedin' {...register('linkedin')} className='form-control' />
                                                            {
                                                                errors && errors.linkedin && errors.linkedin.message ? <Typography className='text-danger'>{errors.linkedin.message}</Typography> : null
                                                            }
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Button type='submit' variant='contained'>Continue</Button>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </>
    )
}

export default PersonalDetails