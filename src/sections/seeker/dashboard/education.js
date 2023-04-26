import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardContent, Container, Dialog, DialogActions, DialogContent, Grid, IconButton, MenuItem, Select, Typography } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';


const Education = () => {
    const [open, setOpen] = useState(false);
    const [qualification, setQualification] = useState('')
    const [educationData, setEducationData] = useState({
        SSC: [],
        HSC: [],
        Grad: [],
        PG: [],
        Certification: []
    })

    const validationSchema = Yup.object().shape({
        qualification: Yup.string().required('Qualification is required'),
        board: Yup.string().when('qualification', {
            is: (val) => val === 'SSC' || val === 'HSC',
            then: () => Yup.string().required('Board is required'),
        }),
        university: Yup.string().when('qualification', {
            is: (val) => val === 'Grad' || val === 'PG',
            then: () => Yup.string().required('University is required'),
        }),
        subject: Yup.string().when('qualification', {
            is: (val) => val === 'Grad' || val === 'PG',
            then: () => Yup.string().required('Course / Specialization / Subject is required'),
        }),
        certification: Yup.string().when('qualification', {
            is: 'Certification',
            then: () => Yup.string().required('Certification is required'),
        }),
        yearofPassing: Yup.number().required('Year of passing is required'),
        percentage: Yup.string().when('qualification', {
            is: (val) => val === 'SSC' || val === 'HSC' || val === 'Grad' || val === 'PG',
            then: () => Yup.string().required('Percentage / CGPA is required'),
        }),
    });

    const defaultValues = {
        qualification: '',
        board: '',
        university: '',
        subject: '',
        certification: '',
        yearofPassing: '',
        percentage: '',
    }

    const { register, handleSubmit, trigger, reset, setValue, control, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues
    });


    const handleQualificationChange = (e) => {
        setQualification(e.target.value)
        setValue('qualification', e.target.value)
    }

    const onsubmit = (data) => {
        if (data.qualification === 'SSC') {
            setEducationData((prev) => {
                return {
                    ...prev,
                    SSC: [...prev.SSC,
                    {
                        Qualification: data.qualification,
                        Board: data.board,
                        Year: data.yearofPassing,
                        Percentage: data.percentage
                    }
                    ]
                }
            })
        } else if (data.qualification === 'HSC') {
            setEducationData((prev) => {
                return {
                    ...prev,
                    HSC: [...prev.HSC,
                    {
                        Qualification: data.qualification,
                        Board: data.board,
                        Year: data.yearofPassing,
                        Percentage: data.percentage
                    }
                    ]
                }
            })
        } else if (data.qualification === 'Grad') {
            setEducationData((prev) => {
                return {
                    ...prev,
                    Grad: [...prev.Grad,
                    {
                        Qualification: data.qualification,
                        University: data.university,
                        Subject: data.subject,
                        Year: data.yearofPassing,
                        Percentage: data.percentage
                    }
                    ]
                }
            })
        } else if (data.qualification === 'PG') {
            setEducationData((prev) => {
                return {
                    ...prev,
                    PG: [...prev.PG,
                    {
                        Qualification: data.qualification,
                        University: data.university,
                        Subject: data.subject,
                        Year: data.yearofPassing,
                        Percentage: data.percentage
                    }
                    ]
                }
            })
        } else if (data.qualification === 'Certification') {
            setEducationData((prev) => {
                return {
                    ...prev,
                    Certification: [...prev.Certification,
                    {
                        Qualification: data.qualification,
                        Subject: data.certification,
                        Year: data.yearofPassing,
                    }
                    ]
                }
            })
        }
        reset()
        setOpen(false)
    }

    useEffect(() => {
        console.log(educationData)
    }, [educationData])

    const handleonBlur = async (e) => {
        await trigger(e.target.id)
    }

    return (
        <>
            <Container maxWidth="xxl" sx={{ my: '2rem' }}>
                <Box my={5} className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center">
                    <Typography variant='h2' gutterBottom>Education Details</Typography>
                    <Button variant='contained' onClick={() => setOpen(true)}>Add Education Details</Button>
                </Box>
                <Box>

                </Box>
                <Dialog maxWidth="sm" fullWidth open={open}>
                    <DialogActions style={{ padding: "0.25rem" }}>
                        <IconButton onClick={() => setOpen(false)}><Close /></IconButton>
                    </DialogActions>
                    <DialogContent style={{ padding: "1rem" }}>
                        <Typography variant='h3'>Education Details</Typography>
                        <Box mt={2}>
                            <form onSubmit={handleSubmit(onsubmit)}>
                                <Box mb={2}>
                                    <label htmlFor="qualification">Qualification</label>
                                    <select label="Select Qualification" id="qualification" className='form-control' {...register('qualification')} onChange={handleQualificationChange} onBlur={handleonBlur}>
                                        <option value="">Select</option>
                                        <option value="SSC">SSC</option>
                                        <option value="HSC">HSC / Diploma</option>
                                        <option value="Grad">Graduation</option>
                                        <option value="PG">Post Graduation</option>
                                        <option value="Certification">Certification</option>
                                    </select>
                                    {
                                        errors && errors.qualification && errors.qualification.message ? <Typography className='text-danger'>{errors.qualification.message}</Typography> : null
                                    }
                                </Box>
                                {
                                    qualification === 'SSC' || qualification === 'HSC' ? <Box mb={2}>
                                        <label htmlFor="board">Board</label>
                                        <input type='text' id='board' className='form-control' {...register('board')} onBlur={handleonBlur} />
                                        {
                                            errors && errors.board && errors.board.message ? <Typography className='text-danger'>{errors.board.message}</Typography> : null
                                        }
                                    </Box> : null
                                }

                                {
                                    qualification === 'Grad' || qualification === 'PG' ? <Box mb={2}>
                                        <label htmlFor="university">University</label>
                                        <input type='text' id='university' className='form-control' {...register('university')} onBlur={handleonBlur} />
                                        {
                                            errors && errors.university && errors.university.message ? <Typography className='text-danger'>{errors.university.message}</Typography> : null
                                        }
                                    </Box> : null
                                }

                                {
                                    qualification === 'Grad' || qualification === 'PG' ? <Box mb={2}>
                                        <label htmlFor="subject">Course / Specialzation / Subject</label>
                                        <input type='text' id='subject' className='form-control' {...register('subject')} onBlur={handleonBlur} />
                                        {
                                            errors && errors.subject && errors.subject.message ? <Typography className='text-danger'>{errors.subject.message}</Typography> : null
                                        }
                                    </Box>
                                        : null
                                }

                                {
                                    qualification === 'Certification' ? <Box mb={2}>
                                        <label htmlFor="certification">Certification</label>
                                        <input type='text' id='certification' className='form-control' {...register('certification')} onBlur={handleonBlur} />
                                        {
                                            errors && errors.certification && errors.certification.message ? <Typography className='text-danger'>{errors.certification.message}</Typography> : null
                                        }
                                    </Box> : null
                                }

                                <Box mb={2}>
                                    <label htmlFor="yearofPassing">{qualification === 'Certification' ? 'Year of Issue' : 'Year of Passing'}</label>
                                    <input type='number' id='yearofPassing' className='form-control' {...register('yearofPassing')} onBlur={handleonBlur} />
                                    {
                                        errors && errors.yearofPassing && errors.yearofPassing.message ? <Typography className='text-danger'>{errors.yearofPassing.message}</Typography> : null
                                    }
                                </Box>
                                {
                                    qualification === 'SSC' || qualification === 'HSC' || qualification === 'Grad' || qualification === 'PG' ? <Box mb={2}>
                                        <label htmlFor="percentage">Percentage / CGPA</label>
                                        <input type='string' id='percentage' className='form-control' {...register('percentage')} onBlur={handleonBlur} />
                                        {
                                            errors && errors.percentage
                                                && errors.percentage
                                                    .message ? <Typography className='text-danger'>{errors.percentage
                                                        .message}</Typography> : null
                                        }
                                    </Box> : null
                                }
                                <Box>
                                    <Button type="submit" variant="contained">Submit</Button>
                                </Box>
                            </form>
                        </Box>
                    </DialogContent>
                </Dialog>
            </Container>
        </>
    )
}

export default Education