import React, { useState } from 'react'
import { SeekerHeader } from '../../components/components'
import { DrawerHeader } from '../../components/seeker/dashboard/layout/header'
import { Box, CssBaseline, Typography } from '@mui/material'
import { PersonalDetails, Education, Experience, Skillset, Project, Objective, Resume, JobSearch, AppliedJobs, SavedJobs, Messages, Settings } from '../../sections/sections'

const SeekerDashboard = () => {
    const [tab, setTab] = useState('Personal Details')

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <SeekerHeader setTab={setTab} />
                <main style={{ flexGrow: 1, padding: 3 }}>
                    <DrawerHeader />
                    {tab === 'Personal Details' ? <PersonalDetails /> : null}
                    {tab === 'Education' ? <Education /> : null}
                    {tab === 'Experience' ? <Experience /> : null}
                    {tab === 'Skill' ? <Skillset /> : null}
                    {tab === 'Project' ? <Project /> : null}
                    {tab === 'Objective' ? <Objective /> : null}
                    {tab === 'Resume' ? <Resume /> : null}
                    {tab === 'Jobs Search' ? <JobSearch /> : null}
                    {tab === 'Applied Jobs' ? <AppliedJobs /> : null}
                    {tab === 'Saved Jobs' ? <SavedJobs /> : null}
                    {tab === 'Messages' ? <Messages /> : null}
                    {tab === 'Settings' ? <Settings /> : null}
                </main>
            </Box>
        </>
    )
}

export default SeekerDashboard